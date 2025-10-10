import { PrismaClient } from "@prisma/client";
import type IPrismaOp from "../../@types/prisma_op.type";
import type IGetHintByName from "../../@types/get_hint_by_name.type";

const getHintByName: IPrismaOp<IGetHintByName> = (prisma: PrismaClient) => {
  return (name: string) =>
    prisma.hint
      .findFirst({
        where: { text: name },
        orderBy: { text: "asc" },
      })
      .finally(() => prisma.$disconnect());
};

export default getHintByName;
