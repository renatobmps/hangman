import { PrismaClient } from "@prisma/client";
import type IPrismaOp from "../../@types/prisma_op.type";
import type IClearDatabase from "../../../repositories/@types/clear_database.type";

const clearDatabase: IPrismaOp<IClearDatabase> = (prisma: PrismaClient) => {
  return async () => {
    try {
      const tables = await prisma.$queryRaw<Array<{ table_name: string }>>`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
          AND table_name !~ '^_'
          AND table_type != 'SYSTEM TYPE';
      `;

      for (const table of tables) {
        await prisma.$queryRawUnsafe(
          `TRUNCATE TABLE "${table.table_name}" RESTART IDENTITY CASCADE`,
        );
      }
    } finally {
      prisma.$disconnect();
    }
  };
};

export default clearDatabase;
