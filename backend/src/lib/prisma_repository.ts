import { PrismaClient } from "@prisma/client";
import type IRepository from "./@types/repository.type.ts";
import addHint from "./prisma_repository/op/add_hint.ts";
import addWordAtHint from "./prisma_repository/op/add_word_at_hint.ts";
import clearDatabase from "./prisma_repository/op/clear_database.ts";
import getAllWords from "./prisma_repository/op/get_all_words.ts";
import getHintByName from "./prisma_repository/op/get_hint_by_name.ts";
import getHintByWord from "./prisma_repository/op/get_hints_by_word.ts";

/** @deprecated will return only prisma */
const prismaRepository = (): IRepository => {
  let prisma;

  if (!global._prisma) {
    prisma = new PrismaClient({
      ...(process.env.NODE_ENV === "development"
        ? {
            log: ["query"],
          }
        : {}),
    });
  } else {
    prisma = global._prisma;
  }

  return {
    database: prisma,
    addHint: addHint(prisma),
    addWordAtHint: addWordAtHint(prisma),
    clearDatabase: clearDatabase(prisma),
    getAllWords: getAllWords(prisma),
    getHintByName: getHintByName(prisma),
    getHintByWord: getHintByWord(prisma),
  };
};

export default prismaRepository();
