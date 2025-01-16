import { beforeEach, describe, it } from "node:test";
import assert from "node:assert";
import AddHintController from "../add_hint.controller.ts";
import { MOCK_ADD_HINT_CONTROLLER_DATA, MOCK_ADD_HINT_CONTROLLER_REPOSITORY, MOCK_ADD_HINT_CONTROLLER_VALIDATOR } from "../add_hint.constants.ts";
import AddHintValidator from "../entities/add_hint_validator.ts";
import AddHintRepository from "../entities/add_hint_repository.ts";
import database from "../../../lib/database_gateway.ts";

beforeEach(async () => {
  await database().clearDatabase();
})

describe('AddHintController', () => {
  describe('unit', () => {
    const controller = new AddHintController({
      validator: MOCK_ADD_HINT_CONTROLLER_VALIDATOR,
      repository: MOCK_ADD_HINT_CONTROLLER_REPOSITORY
    });

    it('should to instance', () => {
      assert.ok(controller);
      assert.equal(controller instanceof AddHintController, true);
      assert.ok(controller.execute);
    })

    it('should to create with words', async () => {
      const newHint = await controller.execute(MOCK_ADD_HINT_CONTROLLER_DATA);

      assert.ok(newHint)
      assert.ok(newHint.id)
    })

    it('should to create without words', async () => {
      const copyOfMock = { ...MOCK_ADD_HINT_CONTROLLER_DATA };
      delete copyOfMock.words;

      const newHint = await controller.execute(copyOfMock);

      assert.ok(newHint)
      assert.ok(newHint.id)
    })

    it('should to throw validation error', () => {

      assert.rejects(async () => await new AddHintController({
        validator: {
          ...MOCK_ADD_HINT_CONTROLLER_VALIDATOR,
          checkTitle: () => { throw new Error('mocked error') },
        },
        repository: MOCK_ADD_HINT_CONTROLLER_REPOSITORY
      }).execute(MOCK_ADD_HINT_CONTROLLER_DATA), /mocked error/);

      assert.rejects(async () => await new AddHintController({
        validator: {
          ...MOCK_ADD_HINT_CONTROLLER_VALIDATOR,
          checkActiveState: () => { throw new Error('mocked error') },
        },
        repository: MOCK_ADD_HINT_CONTROLLER_REPOSITORY
      }).execute(MOCK_ADD_HINT_CONTROLLER_DATA), /mocked error/);

      assert.rejects(async () => await new AddHintController({
        validator: {
          ...MOCK_ADD_HINT_CONTROLLER_VALIDATOR,
          checkWords: () => { throw new Error('mocked error') },
        },
        repository: MOCK_ADD_HINT_CONTROLLER_REPOSITORY
      }).execute(MOCK_ADD_HINT_CONTROLLER_DATA), /mocked error/);
    })
  })

  describe('integration', () => {
    const controller = new AddHintController({
      validator: new AddHintValidator(),
      repository: new AddHintRepository(database()),
    })

    it('should to instance', () => {
      assert.ok(controller);
      assert.equal(controller instanceof AddHintController, true);
      assert.ok(controller.execute);
    })

    it('should to create with words', async () => {
      const words = await Promise.all(
        MOCK_ADD_HINT_CONTROLLER_DATA.words!.map(word => (
          database().addWord(word)
        ))
      );

      const newHint = await controller.execute({
        ...MOCK_ADD_HINT_CONTROLLER_DATA,
        words: words.map(word => word.id),
      });

      assert.ok(newHint)
      assert.ok(newHint.id)
    })

    it('should to create without words', async () => {
      const copyOfMock = { ...MOCK_ADD_HINT_CONTROLLER_DATA };
      delete copyOfMock.words;

      const newHint = await controller.execute(copyOfMock);

      assert.ok(newHint)
      assert.ok(newHint.id)
    })
  })
})