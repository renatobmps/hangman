import type { IDatabase } from "../../../src/use_cases/get_hints/get_hints.interfaces";

export const MOCK_DATABASE: IDatabase = {
  hint: {
    findMany: async () => ([
      { id: '123' },
      { id: '456' },
      { id: '789' },
    ])
  }
}
