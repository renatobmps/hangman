import { PrismaClient } from "@prisma/client";
import type IPrismaOp from "../../@types/prisma_op.type";
import type IAddWordAtHint from "../../@types/add_word_at_hint.type";

const addWordAtHint: IPrismaOp<IAddWordAtHint> = (prisma: PrismaClient) => {
  return (hind_id, word_id) =>
    prisma.hintsWords
      .create({
        data: { hint_id: hind_id, word_id: word_id },
      })
      .finally(() => prisma.$disconnect);
};

export default addWordAtHint;
