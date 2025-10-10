import { describe, it } from "node:test";
import { PrismaClient } from "@prisma/client";
import { deepEqual } from "node:assert";
import {
  prismaMock,
  TABLE_NAMES,
} from "../../__mocks__/prisma_clear_database.ts";
import clearDatabase from "../../../src/lib/prisma_repository/op/clear_database.ts";

describe("clearDatabase", async () => {
  await clearDatabase(prismaMock as unknown as PrismaClient)();

  it("should to get tables", () => {
    deepEqual(prismaMock.$queryRaw.mock.callCount(), 1);
    deepEqual(prismaMock.$queryRaw.mock.calls[0].result, TABLE_NAMES);
  });

  it("should to run for all tables", () => {
    deepEqual(prismaMock.$queryRawUnsafe.mock.callCount(), TABLE_NAMES.length);
  });

  it("should to disconnect", () => {
    deepEqual(prismaMock.$disconnect.mock.callCount(), 1);
  });
});
