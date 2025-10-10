import { mock } from "node:test";

export const prismaMock = {
  $disconnect: mock.fn(() => Promise.resolve()),
  hint: { findFirst: mock.fn(() => Promise.resolve()) },
};

export const GET_HINT_BY_NAME_DATA = {
  text: "some name",
};
