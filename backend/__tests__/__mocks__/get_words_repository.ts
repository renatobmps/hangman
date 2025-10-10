import { mock } from "node:test";
import type IHint from "src/lib/@types/hint.type";
import type IHintsWords from "src/lib/@types/hints_words.type";
import type IWord from "src/lib/@types/word.type";

export const GET_WORDS_REPOSITORY_DATA: Array<IWord> = [
  {
    id: "word_123",
    text: "word 1",
    description: "some description",
    is_activated: false,
    created_at: new Date(new Date().valueOf() - 1000 * 0),
    updated_at: new Date(new Date().valueOf() - 1000 * 0),
  },
  {
    id: "word_234",
    text: "word 2",
    description: "some description",
    is_activated: true,
    created_at: new Date(new Date().valueOf() - 1000 * 1),
    updated_at: new Date(new Date().valueOf() - 1000 * 1),
  },
  {
    id: "word_345",
    text: "word 3",
    description: "some description",
    is_activated: false,
    created_at: new Date(new Date().valueOf() - 1000 * 2),
    updated_at: new Date(new Date().valueOf() - 1000 * 2),
  },
];

const HINT_LIST: Array<IHint> = [
  {
    id: "hint_123",
    text: "hint 1",
    is_activated: false,
    created_at: new Date(new Date().valueOf() - 1000 * 0),
    updated_at: new Date(new Date().valueOf() - 1000 * 0),
  },
  {
    id: "hint_234",
    text: "hint 2",
    is_activated: true,
    created_at: new Date(new Date().valueOf() - 1000 * 1),
    updated_at: new Date(new Date().valueOf() - 1000 * 1),
  },
];

export const GET_WORDS_REPOSITORY_HINT_DATA: Array<
  IHintsWords & {
    id_hint: IHint;
  }
> = [
  {
    id: "relation_123",
    word_id: "word_123",
    hint_id: HINT_LIST[0].id,
    id_hint: HINT_LIST[0],
    created_at: new Date(new Date().valueOf() - 1000 * 0),
    updated_at: new Date(new Date().valueOf() - 1000 * 0),
  },
  {
    id: "relation_234",
    word_id: "word_234",
    hint_id: HINT_LIST[1].id,
    id_hint: HINT_LIST[1],
    created_at: new Date(new Date().valueOf() - 1000 * 1),
    updated_at: new Date(new Date().valueOf() - 1000 * 1),
  },
];

const getAllWords = mock.fn(() => Promise.resolve(GET_WORDS_REPOSITORY_DATA));

const getHintByWord = mock.fn((word_id: string) =>
  Promise.resolve(GET_WORDS_REPOSITORY_HINT_DATA),
);

export const getWordsControllerMocks = {
  getAllWords: getAllWords,
  getHintByWord: getHintByWord,
};
