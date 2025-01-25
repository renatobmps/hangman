import crypto from 'node:crypto';
import type ICreateUserEncryptService from '../@types/create_user_encrypt_service.type';

export default class CreateUserEncryptService implements ICreateUserEncryptService {
  async encryptPassword(password: string): Promise<string> {
    const salt = crypto.randomBytes(128).toString('base64') + process.env.HASH_SALT;

    const hashPwd = (salt: string, pwd: string) => {
      const hmac = crypto.createHmac('sha256', salt);
      return hmac.update(pwd).digest('hex');
    };

    const passHash = hashPwd(salt, password);

    return passHash;
  }
}