import { beforeEach, describe, it } from "node:test";
import addWordAtHint from "../../../src/lib/prisma_repository/op/add_word_at_hint.ts";
import {
  ADD_WORD_AT_HINT_CREATE_DATA,
  prismaMock,
} from "../../__mocks__/prisma_add_word_at_hint.ts";
import { PrismaClient } from "@prisma/client";
import { deepEqual } from "node:assert";

beforeEach(async () => {
  prismaMock.hintsWords.create.mock.resetCalls();
});

describe("addWordAtHint", () => {
  it("should to create relation", async () => {
    await addWordAtHint(prismaMock as unknown as PrismaClient)(
      ADD_WORD_AT_HINT_CREATE_DATA.hint_id,
      ADD_WORD_AT_HINT_CREATE_DATA.word_id,
    );

    deepEqual(prismaMock.hintsWords.create.mock.callCount(), 1);
    deepEqual(prismaMock.hintsWords.create.mock.calls[0].arguments.at(0), {
      data: ADD_WORD_AT_HINT_CREATE_DATA,
    });
  });

  it("should to disconnect", () => {
    deepEqual(prismaMock.$disconnect.mock.callCount(), 1);
  });
});
