import type { IEncryptPasswordService } from 'src/interfaces/create_user.type';
import crypto from 'node:crypto';

export default class EncryptPasswordService implements IEncryptPasswordService {
  async exec(password: string): Promise<string> {
    const salt = crypto.randomBytes(128).toString('base64') + process.env.HASH_SALT;

    const hashPwd = (salt: string, pwd: string) => {
      const hmac = crypto.createHmac('sha256', salt);
      return hmac.update(pwd).digest('hex');
    };

    const passHash = hashPwd(salt, password);

    return passHash;
  }
}