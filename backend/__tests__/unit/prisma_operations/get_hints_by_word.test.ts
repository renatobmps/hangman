import { describe, it } from "node:test";
import { PrismaClient } from "@prisma/client";
import { deepEqual } from "node:assert";
import {
  GET_HINT_BY_WORD_DATA,
  prismaMock,
} from "../../__mocks__/prisma_get_hints_by_word.ts";
import getHintByWord from "../../../src/lib/prisma_repository/op/get_hints_by_word.ts";

describe("getHintByWord", async () => {
  await getHintByWord(prismaMock as unknown as PrismaClient)(
    GET_HINT_BY_WORD_DATA.word_id,
  );

  it("should to get hints", () => {
    deepEqual(prismaMock.hintsWords.findMany.mock.callCount(), 1);
    deepEqual(prismaMock.hintsWords.findMany.mock.calls[0].arguments.at(0), {
      where: GET_HINT_BY_WORD_DATA,
      include: { id_hint: true },
      orderBy: { id_hint: { text: "asc" } },
    });
  });

  it("should to disconnect", () => {
    deepEqual(prismaMock.$disconnect.mock.callCount(), 1);
  });
});
