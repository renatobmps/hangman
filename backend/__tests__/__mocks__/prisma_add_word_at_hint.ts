import { mock } from "node:test";

export const prismaMock = {
  hintsWords: { create: mock.fn(() => Promise.resolve()) },
  $disconnect: mock.fn(() => Promise.resolve()),
};

export const ADD_WORD_AT_HINT_CREATE_DATA = {
  hint_id: "hint_id",
  word_id: "word_id",
};
