import { PrismaClient } from "@prisma/client";

type IPrismaOp<T> = (prisma: PrismaClient) => T;

export default IPrismaOp;
