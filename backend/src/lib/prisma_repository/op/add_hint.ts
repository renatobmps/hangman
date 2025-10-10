import { PrismaClient } from "@prisma/client";
import type IAddHint from "../../@types/add_hint.type";
import type IPrismaOp from "../../@types/prisma_op.type";

const addHint: IPrismaOp<IAddHint> = (prisma: PrismaClient) => {
  return (hint_text, hint_active) =>
    prisma.hint
      .create({
        data: { text: hint_text, is_activated: hint_active },
      })
      .finally(() => prisma.$disconnect());
};

export default addHint;
