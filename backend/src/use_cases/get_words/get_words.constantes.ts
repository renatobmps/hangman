import type { Hint, HintsWords, Word } from "@prisma/client"

export const MOCK_WORDS: Array<Word> = [
  {
    created_at: new Date(),
    description: null,
    id: 'word_123',
    is_activated: true,
    text: 'word 1',
    updated_at: null,
  }
]

export const MOCK_HINTS: Array<HintsWords & { id_hint: Hint }> = [
  {
    created_at: new Date(),
    hint_id: 'hint_123',
    id: 'relation_123',
    updated_at: null,
    word_id: 'word_123',
    id_hint: {
      created_at: new Date(),
      id: 'hint_123',
      is_activated: false,
      text: 'hint_123',
      updated_at: null,
    }
  }
]