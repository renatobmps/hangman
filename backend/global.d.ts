/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

declare global {
  var _prisma: PrismaClient;
}

export { };
