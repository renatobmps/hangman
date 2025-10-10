import type IDatabase from "src/interfaces/database.type";

export const MOCK_HINT_LIST = [
  {
    id: "123",
    HintsWords: [
      {
        id_word: {
          text: "word 1",
          description: "description to word 1",
          is_activated: true,
        },
      },
    ],
  },
  {
    id: "234",
    HintsWords: [
      {
        id_word: {
          text: "word 1",
          description: "description to word 1",
          is_activated: true,
        },
      },
      {
        id_word: {
          text: "word 2",
          description: "description to word 2",
          is_activated: false,
        },
      },
    ],
  },
]

export const MOCK_WORD_LIST = [
  {
    id: "1234",
    is_activated: true,
    text: "word 1",
    description: "description to word 1",
  },
  {
    id: "2345",
    is_activated: false,
    text: "word 2",
    description: "description to word 2",
  },
]

export const MOCK_DATABASE: IDatabase = {
  hint: {
    findMany: async () => [
      {
        id: "123",
        HintsWords: [
          {
            id_word: {
              text: "word 1",
              description: "description to word 1",
              is_activated: true,
            },
          },
        ],
      },
      {
        id: "234",
        HintsWords: [
          {
            id_word: {
              text: "word 1",
              description: "description to word 1",
              is_activated: true,
            },
          },
          {
            id_word: {
              text: "word 2",
              description: "description to word 2",
              is_activated: false,
            },
          },
        ],
      },
    ],
  },
  word: {
    findMany: async () => [
      {
        id: "1234",
        is_activated: true,
        text: "word 1",
        description: "description to word 1",
      },
      {
        id: "2345",
        is_activated: false,
        text: "word 2",
        description: "description to word 2",
      },
    ],
  },
};
