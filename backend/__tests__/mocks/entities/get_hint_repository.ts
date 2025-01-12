import type { IDatabase } from "../../../src/use_cases/get_hints/get_hints.interfaces";

export const MOCK_DATABASE: IDatabase = {
  hint: {
    findMany: async () => ([
      { id: '123', HintsWords: [{ id_word: { text: 'word 1', description: 'description to word 1', is_activated: true } }] },
      {
        id: '234', HintsWords: [
          { id_word: { text: 'word 1', description: 'description to word 1', is_activated: true } },
          { id_word: { text: 'word 2', description: 'description to word 2', is_activated: false } },
        ]
      },
    ])
  },
  word: {
    findMany: async () => ([
      { id: '1234', is_activated: true, text: 'word 1', description: 'description to word 1' },
      { id: '2345', is_activated: false, text: 'word 2', description: 'description to word 2' },
    ])
  }
}
