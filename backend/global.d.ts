import { PrismaClient } from "@prisma/client";

declare global {
  var app_name: string;
  var _prisma: PrismaClient;
}

export { };
