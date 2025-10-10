import { mock } from "node:test";

export const TABLE_NAMES = [
  { table_name: "table1" },
  { table_name: "table2" },
  { table_name: "table3" },
  { table_name: "table4" },
];

export const prismaMock = {
  $queryRaw: mock.fn(() => TABLE_NAMES),
  $queryRawUnsafe: mock.fn(() => Promise.resolve()),
  $disconnect: mock.fn(() => Promise.resolve()),
};
