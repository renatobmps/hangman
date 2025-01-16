import { PrismaClient } from "@prisma/client";
import type { IDatabaseGateway } from "./database_gateway.interfaces.ts";

const database = (): IDatabaseGateway => {
  let prisma;

  if (!global._prisma) {
    prisma = new PrismaClient();
  } else {
    prisma = global._prisma;
  }

  return {
    addHint: (hint_text, hint_active) => prisma.hint.create({
      data: { text: hint_text, is_activated: hint_active }
    }),
    addWord: (word, description, is_activated) => prisma.word.create({
      data: { text: word, description, is_activated }
    }),
    addWordInHint: (hind_id, word_id) => prisma.hintsWords.create({
      data: { hint_id: hind_id, word_id: word_id }
    }),
    clearDatabase: async () => {
      try {
        const tables = await prisma.$queryRaw<Array<{ table_name: string }>>`
          SELECT table_name 
          FROM information_schema.tables 
          WHERE table_schema = 'public'
            AND table_name !~ '^_'
            AND table_type != 'SYSTEM TYPE';
        `;

        for (const table of tables) {
          await prisma.$queryRawUnsafe(`TRUNCATE TABLE "${table.table_name}" RESTART IDENTITY CASCADE`);
        }
      } finally {
        prisma.$disconnect();
      }
    },
    getHintByName: (name: string) => prisma.hint.findFirst({ where: { text: name } }),
  }
}

export default database;
