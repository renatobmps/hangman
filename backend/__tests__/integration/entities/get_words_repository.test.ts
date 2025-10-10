import { after, beforeEach, describe, it } from "node:test";
import { deepEqual, ok } from "node:assert";
import prismaRepository from "../../../src/lib/prisma_repository.ts";
import GetWordsRepository from "../../../src/entities/get_words_repository.ts";

// beforeEach(async () => await prismaRepository.clearDatabase())
// after(async () => await prismaRepository.clearDatabase())

describe("GetWordsRepository", () => {
  const repository = new GetWordsRepository({
    database: prismaRepository,
  });

  it("should to instance", () => {
    ok(repository);
    deepEqual(repository instanceof GetWordsRepository, true);
    ok(repository.getWords);
  });

  it("should to bring words", async () => {
    const words = await repository.getWords();

    ok(words);
  });

  it("should be an array", async () => {
    const words = await repository.getWords();

    deepEqual(Array.isArray(words), true);
  });

  it("should all words have an ID", async () => {
    const words = await repository.getWords();

    deepEqual(
      words.every((word) => typeof word.id === "string"),
      true,
    );
  });

  it("should all words have a title", async () => {
    const words = await repository.getWords();

    deepEqual(
      words.every((word) => typeof word.text === "string"),
      true,
    );
  });

  it("should all words have a list of hints", async () => {
    const words = await repository.getWords();

    deepEqual(
      words.every((word) => Array.isArray(word.hints)),
      true,
    );
  });

  it("should all hints have title", async () => {
    const [words] = await Promise.all([repository.getWords()]);

    deepEqual(
      words.every((words) =>
        words.hints?.every((hint) => typeof hint.text === "string"),
      ),
      true,
    );
  });
});
