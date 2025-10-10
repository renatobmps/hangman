import { mock } from "node:test";

export const ADD_HINT_CREATE_DATA = {
  text: "hint",
  is_activated: false,
};

export const prismaMock = {
  hint: { create: mock.fn(() => Promise.resolve()) },
  $disconnect: mock.fn(() => Promise.resolve()),
};
