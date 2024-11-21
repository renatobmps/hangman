import { PrismaClient } from "@prisma/client";

import { withOptimize } from "@prisma/extension-optimize";

const db = () => {
  const prisma = new PrismaClient().$extends(withOptimize({ apiKey: '' }));

  return prisma;
}

export default db;
