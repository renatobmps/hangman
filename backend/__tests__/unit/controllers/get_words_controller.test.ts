import { beforeEach, describe, it } from "node:test";
import { deepEqual, ok, rejects } from "node:assert";
import {
  GET_WORDS_REPOSITORY_DATA,
  GET_WORDS_REPOSITORY_HINT_DATA,
  getWordsControllerMocks,
} from "../../__mocks__/get_words_repository.ts";
import GetWordsController from "../../../src/controllers/get_words.controller.ts";
import type { IGetWordsControllerRepository } from "src/controllers/@types/get_words_controller_repository.type.ts";

beforeEach(() => {
  getWordsControllerMocks.getAllWords.mock.resetCalls();
  getWordsControllerMocks.getHintByWord.mock.resetCalls();
});

describe("GetWordsController", () => {
  const controller = new GetWordsController({
    repository: {
      getAllWords: getWordsControllerMocks.getAllWords,
      getHintByWord: getWordsControllerMocks.getHintByWord,
    },
  });

  it("should to return error when getAllWords are not implemented", () => {
    const repository = {
      getHintByWord: getWordsControllerMocks.getHintByWord,
    } as unknown as IGetWordsControllerRepository;
    const controller = new GetWordsController({
      repository,
    });

    const act = controller.exec();

    rejects(
      async () => await act,
      new RegExp("missing getAllWords implementation", "i"),
    );
  });

  it("should to return error when getHintByWord are not implemented", () => {
    const repository = {
      getAllWords: getWordsControllerMocks.getAllWords,
    } as unknown as IGetWordsControllerRepository;
    const controller = new GetWordsController({
      repository,
    });

    const act = controller.exec();

    rejects(
      async () => await act,
      new RegExp("missing getHintByWord implementation", "i"),
    );
  });

  it("should to get all words", async () => {
    await controller.exec();

    deepEqual(getWordsControllerMocks.getAllWords.mock.callCount(), 1);
  });

  it("should to get each word by id", async () => {
    await controller.exec();

    deepEqual(
      getWordsControllerMocks.getHintByWord.mock.callCount(),
      GET_WORDS_REPOSITORY_DATA.length,
    );
  });

  it("should to bring the word list", async () => {
    const result = await controller.exec();

    ok(result);
  });

  it("should be an array", async () => {
    const result = await controller.exec();

    deepEqual(Array.isArray(result), true);
  });

  it("should all words have an ID", async () => {
    const result = await controller.exec();

    deepEqual(
      result.every((word) => typeof word.id === "string"),
      true,
    );
  });

  it("should all words have a title", async () => {
    const result = await controller.exec();

    deepEqual(
      result.every((word) => typeof word.text === "string"),
      true,
    );
  });

  it("should all words have a list of hints", async () => {
    const mock_words = await controller.exec();

    deepEqual(
      mock_words.every((word) => Array.isArray(word.hints)),
      true,
    );
  });

  it("should all hints have title", async () => {
    const mock_words = await controller.exec();

    deepEqual(
      mock_words.every((words) =>
        words.hints?.every((hint) => typeof hint.text === "string"),
      ),
      true,
    );
  });

  it("should to have same values of mock", async () => {
    const mock_words = await controller.exec();

    deepEqual(mock_words.length, GET_WORDS_REPOSITORY_DATA.length);
    deepEqual(mock_words[0].id, GET_WORDS_REPOSITORY_DATA[0].id);
    deepEqual(mock_words[0].text, GET_WORDS_REPOSITORY_DATA[0].text);
    deepEqual(
      mock_words[0].hints?.length,
      GET_WORDS_REPOSITORY_HINT_DATA.length,
    );
    deepEqual(
      mock_words[0].hints?.map((hint) => hint.text),
      GET_WORDS_REPOSITORY_HINT_DATA.map((hint) => hint.id_hint.text),
    );
  });
});
