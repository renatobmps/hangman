import { mock } from "node:test";

export const databaseMock = {
  word: { create: mock.fn(() => Promise.resolve()) },
  $disconnect: mock.fn(() => Promise.resolve()),
};
