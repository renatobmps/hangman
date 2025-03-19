import { describe, it } from "node:test";
import { ok, strictEqual, notEqual, match } from "node:assert";
import EncryptPasswordService from "../../src/services/encrypt_password.service.ts";
import { MOCK_CREATE_USER_DATA } from "./__dto__.ts";

describe('EncryptPasswordService unit', () => {
  const service = new EncryptPasswordService();

  it('should encrypt password using SHA256 HMAC when valid password provided', async () => {
    const pwd = MOCK_CREATE_USER_DATA.password;
    const encryptedPassword = await service.exec(pwd);

    ok(encryptedPassword);
    strictEqual(encryptedPassword.length, 64);
    strictEqual(typeof encryptedPassword, 'string');
    notEqual(encryptedPassword, pwd);
  });

  it('should encrypt empty password string when empty string provided', async () => {
    const pwd = '';
    const encryptedPassword = await service.exec(pwd);

    ok(encryptedPassword);
    strictEqual(encryptedPassword.length, 64);
    strictEqual(typeof encryptedPassword, 'string');
    notEqual(encryptedPassword, pwd);
  });

  it('should return hash as hexadecimal string when password is encrypted', async () => {
    const result = await service.exec(MOCK_CREATE_USER_DATA.password);

    match(result, /^[0-9a-f]{64}$/);
  });

  it('should encrypt very long password when 1MB string provided', async () => {
    const password = 'a'.repeat(1024 * 1024);

    const encryptedPassword = await service.exec(password);

    ok(encryptedPassword);
    strictEqual(encryptedPassword.length, 64);
    strictEqual(typeof encryptedPassword, 'string');
    match(encryptedPassword, /^[0-9a-f]{64}$/)
    notEqual(encryptedPassword, '');
  });
});
