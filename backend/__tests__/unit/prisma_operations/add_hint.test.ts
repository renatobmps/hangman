import { PrismaClient } from "@prisma/client";
import { beforeEach, describe, it } from "node:test";
import addHint from "../../../src/lib/prisma_repository/op/add_hint.ts";
import { deepEqual } from "node:assert";
import {
  ADD_HINT_CREATE_DATA,
  prismaMock,
} from "../../__mocks__/prisma_add_hint.ts";

beforeEach(async () => {
  prismaMock.hint.create.mock.resetCalls();
});

describe("addHint", () => {
  it("should to run hint create", async () => {
    await addHint(prismaMock as unknown as PrismaClient)(
      ADD_HINT_CREATE_DATA.text,
      ADD_HINT_CREATE_DATA.is_activated,
    );

    deepEqual(prismaMock.hint.create.mock.callCount(), 1);
    deepEqual(prismaMock.hint.create.mock.calls[0].arguments.at(0), {
      data: ADD_HINT_CREATE_DATA,
    });
  });

  it("should to disconnect", () => {
    deepEqual(prismaMock.$disconnect.mock.callCount(), 1);
  });
});
