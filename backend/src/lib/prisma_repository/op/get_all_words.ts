import { PrismaClient } from "@prisma/client";
import type IPrismaOp from "../../@types/prisma_op.type";
import type IGetAllWords from "../../@types/get_all_words.type";

const getAllWords: IPrismaOp<IGetAllWords> = (prisma: PrismaClient) => {
  return () =>
    prisma.word
      .findMany({
        orderBy: { text: "asc" },
      })
      .finally(() => prisma.$disconnect());
};

export default getAllWords;
