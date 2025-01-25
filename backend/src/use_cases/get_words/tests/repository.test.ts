import { after, beforeEach, describe, it } from "node:test";
import assert from "node:assert";
import GetWordsRepository from "../entities/get_words_repository.ts";
import type IRepository from "../../../lib/repository.interfaces.ts";
import prismaRepository from "../../../lib/prisma_repository.ts";
import { MOCK_HINTS, MOCK_WORDS } from "../get_words.constantes.ts";

beforeEach(async () => await prismaRepository().clearDatabase())
after(async () => await prismaRepository().clearDatabase())

describe('GetWordsRepository', () => {
  const mock_repository = new GetWordsRepository({
    getAllWords: async () => MOCK_WORDS,
    getHintByWord: async () => MOCK_HINTS,
  } as unknown as IRepository);
  const repository = new GetWordsRepository(prismaRepository());

  it('should to instance', () => {
    assert.ok(mock_repository);
    assert.ok(repository);

    assert.equal(mock_repository instanceof GetWordsRepository, true);
    assert.equal(repository instanceof GetWordsRepository, true);

    assert.ok(mock_repository.getWords);
    assert.ok(repository.getWords);
  })

  it('should to bring words', async () => {
    const [mock_words, words] = await Promise.all([
      mock_repository.getWords(),
      repository.getWords(),
    ])

    assert.ok(mock_words);
    assert.ok(words);
  });

  it('should be an array', async () => {
    const [mock_words, words] = await Promise.all([
      mock_repository.getWords(),
      repository.getWords(),
    ])

    assert.equal(Array.isArray(mock_words), true);
    assert.equal(Array.isArray(words), true);
  })

  it('should all words have an ID', async () => {
    const [mock_words, words] = await Promise.all([
      mock_repository.getWords(),
      repository.getWords(),
    ])

    assert.equal(mock_words.every(word => typeof word.id === 'string'), true);
    assert.equal(words.every(word => typeof word.id === 'string'), true);
  })

  it('should all words have a title', async () => {
    const [mock_words, words] = await Promise.all([
      mock_repository.getWords(),
      repository.getWords()
    ])

    assert.equal(mock_words.every(word => typeof word.text === 'string'), true);
    assert.equal(words.every(word => typeof word.text === 'string'), true);
  })

  it('should all words have a list of hints', async () => {
    const [mock_words, words] = await Promise.all([
      mock_repository.getWords(),
      repository.getWords()
    ])

    assert.equal(mock_words.every(word => Array.isArray(word.hints)), true);
    assert.equal(words.every(word => Array.isArray(word.hints)), true);
  })

    it('should all hints have title', async () => {
      const [mock_words, words] = await Promise.all([
        mock_repository.getWords(),
        repository.getWords()
      ])

      assert.equal(mock_words.every(words => words.hints?.every(hint => typeof hint.text === 'string')), true);
      assert.equal(words.every(words => words.hints?.every(hint => typeof hint.text === 'string')), true);
    })

    it('should to have same values of mock', async () => {
      const mock_words = await mock_repository.getWords();

      assert.equal(mock_words.length, MOCK_WORDS.length);
      assert.equal(mock_words[0].text, MOCK_WORDS[0].text);
      assert.equal(mock_words[0].hints?.length, MOCK_HINTS.length);
    });
})