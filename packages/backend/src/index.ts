import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createPrismaClient } from "@kupi/db";
import { appRouter } from "./trpc/routers/_app";
import { createContext } from "./trpc/init";
import { requireEnv } from "./env";

const app = express();
const port = Number(process.env.PORT) || 4000;
const corsOrigin = requireEnv("CORS_ORIGIN");
const prisma = createPrismaClient();

app.use(
  cors({
    origin: corsOrigin.split(",").map((o) => o.trim()),
    credentials: true,
  }),
);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext(prisma),
  }),
);

async function main() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }

  app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
  });
}

main();
