import assert from "node:assert";
import { describe, it } from "node:test";
import { CreateUserEncryptService } from "src/entities/create_user_encrypt_service";

describe('EncryptService', () => {
  it('should to encrypt', () => {
    const encrypt = new CreateUserEncryptService();

    assert.ok(encrypt.encryptPassword('Secret'))
  })
})