import { mock } from "node:test";

export const prismaMock = {
  $disconnect: mock.fn(() => Promise.resolve()),
  hintsWords: { findMany: mock.fn(() => Promise.resolve()) },
};

export const GET_HINT_BY_WORD_DATA = {
  word_id: "id_123",
};
