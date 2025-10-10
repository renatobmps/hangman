import { PrismaClient } from "@prisma/client";
import type IPrismaOp from "../../@types/prisma_op.type";
import type IGetHintByWord from "../../@types/get_hint_by_word.type";

const getHintByWord: IPrismaOp<IGetHintByWord> = (prisma: PrismaClient) => {
  return (word_id) =>
    prisma.hintsWords
      .findMany({
        where: { word_id },
        include: { id_hint: true },
        orderBy: { id_hint: { text: "asc" } },
      })
      .finally(() => prisma.$disconnect());
};

export default getHintByWord;
