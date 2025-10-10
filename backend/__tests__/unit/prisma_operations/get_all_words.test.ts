import { describe, it } from "node:test";
import { PrismaClient } from "@prisma/client";
import { deepEqual } from "node:assert";
import { prismaMock } from "../../__mocks__/prisma_get_all_words.ts";
import getAllWords from "../../../src/lib/prisma_repository/op/get_all_words.ts";

describe("getAllWords", async () => {
  await getAllWords(prismaMock as unknown as PrismaClient)();

  it("should to get words", () => {
    deepEqual(prismaMock.word.findMany.mock.callCount(), 1);
    deepEqual(prismaMock.word.findMany.mock.calls[0].arguments.at(0), {
      orderBy: { text: "asc" },
    });
  });

  it("should to disconnect", () => {
    deepEqual(prismaMock.$disconnect.mock.callCount(), 1);
  });
});
