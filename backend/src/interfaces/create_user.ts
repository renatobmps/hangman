export interface ICreateUserController {
  username: string
  password: string
  email?: string
}

export interface ICreateUserRepository {
  hasDuplicate(username: string, email?: string): Promise<boolean>,
  createUser(username: string, password: string, email?: string): Promise<{ id: string }>
}

export interface ICreateUserValidation {
  validUsername(username: string): boolean;
  validPassword(password: string): boolean;
}

export interface ICreateUserEncryptService {
  encryptPassword(password: string): Promise<string>;
}