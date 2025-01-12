import { describe, it } from "node:test";
import assert from "node:assert";
import CreateUserEncryptService from "./create_user_encrypt_service.ts";
import { MOCK_CREATE_USER_DATA } from "../../__tests__/mocks/entities/create_user_encrypt_service.ts";

describe('CreateUserEncryptService', () => {
  describe('unit', () => {
    const service = new CreateUserEncryptService();

    it('should encrypt password using SHA256 HMAC when valid password provided', async () => {
      const encryptedPassword = await service.encryptPassword(MOCK_CREATE_USER_DATA.password);

      assert.ok(encryptedPassword);
      assert.strictEqual(encryptedPassword.length, 64);
      assert.strictEqual(typeof encryptedPassword, 'string');
      assert.notEqual(encryptedPassword, MOCK_CREATE_USER_DATA.password);
    });

    it('should encrypt empty password string when empty string provided', async () => {
      const encryptedPassword = await service.encryptPassword('');

      assert.ok(encryptedPassword);
      assert.strictEqual(encryptedPassword.length, 64);
      assert.strictEqual(typeof encryptedPassword, 'string');
      assert.notEqual(encryptedPassword, '');
    });

    it('should return hash as hexadecimal string when password is encrypted', async () => {
      const result = await service.encryptPassword(MOCK_CREATE_USER_DATA.password);

      assert.match(result, /^[0-9a-f]{64}$/);
    });

    it('should encrypt very long password when 1MB string provided', async () => {
      const password = 'a'.repeat(1024 * 1024);

      const encryptedPassword = await service.encryptPassword(password);

      assert.ok(encryptedPassword);
      assert.strictEqual(encryptedPassword.length, 64);
      assert.strictEqual(typeof encryptedPassword, 'string');
      assert.match(encryptedPassword, /^[0-9a-f]{64}$/)
      assert.notEqual(encryptedPassword, '');
    });
  })
})