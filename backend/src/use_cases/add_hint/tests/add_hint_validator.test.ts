import { describe, it } from "node:test";
import assert from "node:assert";
import AddHintValidator from "../entities/add_hint_validator.ts";

describe('AddHintValidator', () => {
  const validator = new AddHintValidator();

  it('should to instance', () => {
    assert.ok(validator);
    assert.equal(validator instanceof AddHintValidator, true);
    assert.ok(validator.checkTitle);
  });

  describe('title', () => {

    it('should accept title with multiple words', () => {
      const title = 'This is a valid title';

      const result = validator.checkTitle(title);

      assert.ok(result);
    });

    it('should accept title with single word', () => {
      const title = 'Title';

      const result = validator.checkTitle(title);

      assert.ok(result);
    });

    it('should throw error when title is empty string', () => {
      const title = '';

      assert.throws(() => validator.checkTitle(title).valueOf, /Title cannot be empty/);
    });

    it('should throw error when title is undefined', () => {
      assert.throws(() => validator.checkTitle(undefined).valueOf, /Title is required/);
    });

    it('should throw error when title is null', () => {
      assert.throws(() => validator.checkTitle(null as unknown as string).valueOf, /Invalid title/);
    });
  })

  describe('active', () => {
    it('should to accept true', () => {
      const validation = validator.checkActiveState(true);

      assert.ok(validation);
    })

    it('should to accept false', () => {
      const validation = validator.checkActiveState(false);

      assert.ok(validation);
    })

    it('should not accept invalid values', () => {
      assert.throws(() => validator.checkActiveState(undefined as unknown as boolean))
      assert.throws(() => validator.checkActiveState(null as unknown as boolean))
      assert.throws(() => validator.checkActiveState([] as unknown as boolean))
      assert.throws(() => validator.checkActiveState({} as unknown as boolean))
    })
  })

  describe('words', () => {
    it('should to be valid', () => {
      const validation = validator.checkWords(['id_123', 'id_456', 'id_789']);

      assert.ok(validation);
    })

    it('should not accept not array', () => {
      assert.throws(() => validator.checkWords({} as unknown as string[]))
    })

    it('should not accept array of string', () => {
      assert.throws(() => validator.checkWords([123, 456] as unknown as string[]))
    })
  })
})