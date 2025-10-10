import { equal, ok, strictEqual } from "node:assert";
import { beforeEach, describe, it } from "node:test";
import Hint from "../../src/models/hint.ts";
import GetHintsRepository from "../../src/repositories/get_hints.repository.ts";
import { MOCK_DATABASE } from "./__dto__.ts";
import { repositoryDatabase } from "./__mock.ts";
import type IDatabase from "src/interfaces/database.type.ts";

beforeEach(() => {
  repositoryDatabase.hint.findMany.mock.resetCalls();
  repositoryDatabase.word.findMany.mock.resetCalls();
})

describe('GetHint', () => {
  describe('Hint', () => {
    it('should to create an hint', () => {
      const hint = new Hint();

      ok(hint);
    })
  })

  describe('Repository', () => {
    const repository = new GetHintsRepository(repositoryDatabase as unknown as IDatabase);

    it('should to find many hints', async () => {
      const hints = await repository.getAllHints();

      ok(hints);
      strictEqual(repositoryDatabase.hint.findMany.mock.callCount(), 1)
    })

    it('should to find many words', async () => {
      const hints = await repository.getAllHints();

      ok(hints);
      strictEqual(repositoryDatabase.word.findMany.mock.callCount(), 1)
    })

    it('should to return hints', async () => {
      const hints = await repository.getAllHints();

      ok(hints);
      equal(Array.isArray(hints), true);
      equal(hints.every(({ total_words }) => typeof total_words === 'number'), true);
      equal(hints.every(({ words }) => Array.isArray(words)), true);
    })
  })
})
