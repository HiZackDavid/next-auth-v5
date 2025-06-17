import { PrismaClient } from "@prisma/client";

// As recommended  here: https://authjs.dev/getting-started/adapters/prisma
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
