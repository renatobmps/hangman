import { mock } from "node:test";

export const prismaMock = {
  word: { findMany: mock.fn(() => Promise.resolve()) },
  $disconnect: mock.fn(() => Promise.resolve()),
};
