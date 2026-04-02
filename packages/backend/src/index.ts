import express from "express";
import { createPrismaClient } from "@kupi/db";

const app = express();
const port = 3001;
const prisma = createPrismaClient();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

async function main() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }

  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
}

main();
