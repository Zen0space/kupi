import { initTRPC } from "@trpc/server";
import { type CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { type PrismaClient } from "@kupi/db";

export function createContext(
  prisma: PrismaClient,
) {
  return (_opts: CreateExpressContextOptions) => ({
    prisma,
  });
}

export type Context = {
  prisma: PrismaClient;
};

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
