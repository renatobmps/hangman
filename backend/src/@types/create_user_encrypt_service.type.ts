export default interface ICreateUserEncryptService {
  encryptPassword(password: string): Promise<string>;
}
