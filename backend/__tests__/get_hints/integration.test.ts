import { describe, it } from "node:test";
import { equal, ok } from "node:assert";
import GetHintsRepository from "../../src/repositories/get_hints.repository.ts";
import { db } from "../../src/lib/db.ts";

describe.skip('GetHint integration', () => {
  describe('Repository', () => {
    const repository = new GetHintsRepository(db());

    it('should do instance it', () => {
      ok(repository);
      equal(repository instanceof GetHintsRepository, true);
    });

    it('should to return hints', async () => {
      const hints = await repository.getAllHints();

      ok(hints);
      equal(Array.isArray(hints), true);
      equal(hints.every(({ total_words }) => typeof total_words === 'number'), true);
      equal(hints.every(({ words }) => Array.isArray(words)), true);
    })
  })
})

