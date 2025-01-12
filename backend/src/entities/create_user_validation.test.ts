import { describe, it } from "node:test";
import assert from "node:assert";
import { CreateUserValidation } from "./create_user_validation.ts";
import { MOCK_CREATE_VALIDATION_DATA } from "../../__tests__/mocks/entities/create_user_validation.ts";

describe('CreateUserValidation', () => {
  describe('unit', () => {
    const validation = new CreateUserValidation();

    describe('Username', () => {
      it('should to throw "There is no username"', () => {

        assert.throws(() => validation.validUsername(undefined as unknown as string), /There is no username/i)

        assert.throws(() => validation.validUsername(null as unknown as string), /There is no username/i)

        assert.throws(() => validation.validUsername([] as unknown as string), /There is no username/i)

        assert.throws(() => validation.validUsername({} as unknown as string), /There is no username/i)
        assert.throws(() => validation.validUsername('' as unknown as string), /There is no username/i)
      });

      it('should to throw "Invalid username format"', () => {
        assert.throws(() => validation.validUsername(' '), /Invalid username format/i)
        assert.throws(() => validation.validUsername(`${MOCK_CREATE_VALIDATION_DATA.username} ${MOCK_CREATE_VALIDATION_DATA.username}`), /Invalid username format/i)
      });

      it('should to throw "Username is too short"', () => {
        assert.throws(() => validation.validUsername(MOCK_CREATE_VALIDATION_DATA.username.substring(0, 1)), /Username is too short/i)
      });

      it('should to pass', () => {
        assert.strictEqual(validation.validUsername(MOCK_CREATE_VALIDATION_DATA.username), true);
      });
    });

    describe('password', () => {
      it('should throw "There is no password"', () => {
        assert.throws(() => validation.validPassword(undefined as unknown as string), /There is no password/i)
        assert.throws(() => validation.validPassword(null as unknown as string), /There is no password/i)
        assert.throws(() => validation.validPassword([] as unknown as string), /There is no password/i)
        assert.throws(() => validation.validPassword({} as unknown as string), /There is no password/i)
        assert.throws(() => validation.validPassword('' as unknown as string), /There is no password/i)
      });

      it('should throw "Password must be at least 6 characters"', () => {
        assert.throws(() => validation.validPassword(MOCK_CREATE_VALIDATION_DATA.password.substring(0, 6)), /Password must be at least 6 characters/i)
      });

      it('should throw "Password must contain at least one uppercase letter"', () => {
        assert.throws(() => validation.validPassword(MOCK_CREATE_VALIDATION_DATA.password.toLowerCase()), /Password must contain at least one uppercase letter/i)
      });

      it('should throw "Password must contain at least one lowercase letter"', () => {
        assert.throws(() => validation.validPassword(MOCK_CREATE_VALIDATION_DATA.password.toUpperCase()), /Password must contain at least one lowercase letter/i)
      });

      it('should throw "Password must contain at least one number"', () => {
        assert.throws(() => validation.validPassword(MOCK_CREATE_VALIDATION_DATA.password.replace(/\d/g, '')), /Password must contain at least one number/i)
      });

      it('should throw "Password must contain at least one special character"', () => {
        assert.throws(() => validation.validPassword(MOCK_CREATE_VALIDATION_DATA.password.replace(/[^A-Za-z0-9]/g, '')), /Password must contain at least one special character/i)
      });

      it('should to be a valid password', () => {
        assert.strictEqual(validation.validPassword(MOCK_CREATE_VALIDATION_DATA.password), true);
      });
    });
  })
});
