import { mock } from "node:test";
import { MOCK_HINT_LIST, MOCK_WORD_LIST } from "./__dto__.ts";

export const repositoryDatabase = {
  hint: {
    findMany: mock.fn(() => Promise.resolve(MOCK_HINT_LIST))
  },
  word: {
    findMany: mock.fn(() => Promise.resolve(MOCK_WORD_LIST))
  }
}