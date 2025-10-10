import { describe, it } from "node:test";
import { PrismaClient } from "@prisma/client";
import { deepEqual } from "node:assert";
import {
  GET_HINT_BY_NAME_DATA,
  prismaMock,
} from "../../__mocks__/prisma_get_hint_by_name.ts";
import getHintByName from "../../../src/lib/prisma_repository/op/get_hint_by_name.ts";

describe("getHintByName", async () => {
  await getHintByName(prismaMock as unknown as PrismaClient)(
    GET_HINT_BY_NAME_DATA.text,
  );

  it("should to get words", () => {
    deepEqual(prismaMock.hint.findFirst.mock.callCount(), 1);
    deepEqual(prismaMock.hint.findFirst.mock.calls[0].arguments.at(0), {
      where: GET_HINT_BY_NAME_DATA,
      orderBy: { text: "asc" },
    });
  });

  it("should to disconnect", () => {
    deepEqual(prismaMock.$disconnect.mock.callCount(), 1);
  });
});
