import { beforeEach, describe, it } from "node:test";
import assert from "node:assert";
import AddHintRepository from "../entities/add_hint_repository.ts";
import prismaRepository from "../../../lib/prisma_repository.ts";
import { MOCK_ADD_HINT_REPOSITORY_DATA } from "../add_hint.constants.ts";

beforeEach(async () => {
  await prismaRepository().clearDatabase();
})

describe('AddHintRepository', () => {
  const repository = new AddHintRepository(prismaRepository());

  it('should to instance', () => {
    assert.ok(repository);
    assert.ok(repository.hasDuplicate);
    assert.ok(repository.create);
  })

  it('should not to have duplicate', async () => {
    const result = await repository.hasDuplicate('new hint');

    assert.equal(result, false);
  })

  it('should to create hint without words', async () => {
    const newHint = await repository.create(MOCK_ADD_HINT_REPOSITORY_DATA);

    assert.ok(newHint);
    assert.ok(newHint.id);
  })

  it('should to create hint with words', async () => {
    const [word1, word2] = await Promise.all([
      prismaRepository().addWord('new word 1'),
      prismaRepository().addWord('new word 2'),
    ]);

    const newHint = await repository.create({
      ...MOCK_ADD_HINT_REPOSITORY_DATA,
      words: [word1.id, word2.id]
    });

    assert.ok(newHint);
    assert.ok(newHint.id);
  });

  it('should to have duplicate', async () => {
    await repository.create(MOCK_ADD_HINT_REPOSITORY_DATA);

    const result = await repository.hasDuplicate(MOCK_ADD_HINT_REPOSITORY_DATA.text!);

    assert.equal(result, true);
  })
})