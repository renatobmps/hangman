import { PrismaClient } from "@prisma/client";

export const db = () => {
  if (!global._prisma) {
    global._prisma = new PrismaClient();
  }

  return global._prisma;
}
