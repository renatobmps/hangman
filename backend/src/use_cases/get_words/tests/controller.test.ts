import { describe, it } from "node:test";
import assert from "node:assert";
import GetWordsController from "../get_words.controller.ts";
import type { IGetWordsControllerRepository } from "../@types.ts";
import GetWordsRepository from "../entities/get_words_repository.ts";
import prismaRepository from "../../../lib/prisma_repository.ts";

describe('GetWordsController', () => {
  const MOCK_REPOSITORY: IGetWordsControllerRepository = {
    getWords: async () => [
      { id: '1234', text: 'word 1', hints: [{ text: 'hint 1' }, { text: 'hint 2' }] }
    ]
  }
  const mocked_controller = new GetWordsController({
    repository: MOCK_REPOSITORY,
  })

  const controller = new GetWordsController({
    repository: new GetWordsRepository(prismaRepository()),
  });

  it('should to instance', () => {
    assert.ok(mocked_controller);
    assert.ok(controller);

    assert.equal(mocked_controller instanceof GetWordsController, true);
    assert.equal(controller instanceof GetWordsController, true);

    assert.ok(mocked_controller.execute);
    assert.ok(controller.execute);
  })

  it('should to bring the words', async () => {
    const mock_words = await mocked_controller.execute();
    const words = controller.execute();

    assert.ok(mock_words);
    assert.ok(words);
  })

  it('words should be array', async () => {
    const mock_words = await mocked_controller.execute();
    const words = await controller.execute();

    assert.equal(Array.isArray(mock_words), true);
    assert.equal(Array.isArray(words), true);
  })

  it('words should have a id', async () => {
    const mock_words = await mocked_controller.execute();
    const words = await controller.execute();

    assert.equal(mock_words.every(word => typeof word.id === 'string'), true);
    assert.equal(words.every(word => typeof word.id === 'string'), true);
  })

  it('words should have a title', async () => {
    const mock_words = await mocked_controller.execute();
    const words = await controller.execute();

    assert.equal(mock_words.every(word => typeof word.text === 'string'), true);
    assert.equal(words.every(word => typeof word.text === 'string'), true);
  })

  it('words should have hints', async () => {
    const mock_words = await mocked_controller.execute();
    const words = await controller.execute();

    assert.equal(mock_words.every(word => typeof word.hints !== 'undefined'), true);
    assert.equal(words.every(word => typeof word.hints !== 'undefined'), true);
  })
  
  it('hints should to be arrays', async () => {
    const mock_words = await mocked_controller.execute();
    const words = await controller.execute();
    
    assert.equal(mock_words.every(word => Array.isArray(word.hints)), true);
    assert.equal(words.every(word => Array.isArray(word.hints)), true);
  })
  
  it('hints should to have an title', async () => {
    const mock_words = await mocked_controller.execute();
    const words = await controller.execute();
    
    assert.equal(mock_words.every(word => word.hints?.every(hint => typeof hint.text === 'string')), true);
    assert.equal(words.every(word => word.hints?.every(hint => typeof hint.text === 'string')), true);
  })
})