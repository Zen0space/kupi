import { PrismaClient } from "./generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

export { PrismaClient } from "./generated/prisma";

export function createPrismaClient(url?: string) {
  const adapter = new PrismaPg({
    connectionString: url || process.env.DATABASE_URL!,
  });
  return new PrismaClient({ adapter });
}
