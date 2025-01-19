import { beforeEach, describe, it } from "node:test";
import addHint from "../index.ts";
import { MOCK_ADD_HINT_CONTROLLER_DATA } from "../add_hint.constants.ts";
import prismaRepository from "../../../lib/prisma_repository.ts";
import assert from "node:assert";

beforeEach(async () => await prismaRepository().clearDatabase());

describe('addHint', () => {
  it('should to add a hint without word', async () => {
    const copyOfMock = { ...MOCK_ADD_HINT_CONTROLLER_DATA };
    delete copyOfMock.words;

    const newHint = await addHint(copyOfMock);

    assert.ok(newHint);
    assert.ok(newHint.id);
    assert.equal(typeof newHint.id, 'string');
  })

  it('should to add a hint with word', async () => {
    const words = await Promise.all(
      MOCK_ADD_HINT_CONTROLLER_DATA.words!.map(word => (
        prismaRepository().addWord(word)
      ))
    );

    const newHint = await addHint({
      ...MOCK_ADD_HINT_CONTROLLER_DATA,
      words: words.map(word => word.id),
    });

    assert.ok(newHint);
    assert.ok(newHint.id);
    assert.equal(typeof newHint.id, 'string');
  })
})