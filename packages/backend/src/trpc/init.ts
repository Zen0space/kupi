import { initTRPC, TRPCError } from "@trpc/server";
import { type CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { type PrismaClient } from "@kupi/db";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { requireEnv } from "../env";

const logtoEndpoint = requireEnv("LOGTO_ENDPOINT");
const logtoApiResource = requireEnv("LOGTO_API_RESOURCE");

const jwks = createRemoteJWKSet(
  new URL(`${logtoEndpoint}/oidc/jwks`),
);

export type User = {
  sub: string;
  [key: string]: unknown;
};

export type Context = {
  prisma: PrismaClient;
  user: User | null;
};

async function verifyToken(token: string): Promise<User | null> {
  try {
    const { payload } = await jwtVerify(token, jwks, {
      issuer: `${logtoEndpoint}/oidc`,
      audience: logtoApiResource,
    });
    console.log("[auth] Token verified, sub:", payload.sub);
    return payload as User;
  } catch (err) {
    console.error("[auth] Token verification failed:", err);
    return null;
  }
}

export function createContext(prisma: PrismaClient) {
  return async (opts: CreateExpressContextOptions): Promise<Context> => {
    const authHeader = opts.req.headers.authorization;
    let user: User | null = null;

    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.slice(7);
      console.log("[auth] Bearer token received:", token.slice(0, 20) + "...");
      user = await verifyToken(token);
    } else {
      console.log("[auth] No Authorization header received");
    }

    return { prisma, user };
  };
}

const t = initTRPC.context<Context>().create();

const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
  }
  return next({ ctx: { ...ctx, user: ctx.user } });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthenticated);
