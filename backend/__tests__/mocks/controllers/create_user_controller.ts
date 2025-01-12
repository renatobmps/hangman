import type { ICreateUserController, ICreateUserEncryptService, ICreateUserRepository, ICreateUserValidation } from "../../../src/interfaces/create_user.ts";

export const repository: ICreateUserRepository = {
  createUser: async () => ({ id: '123' }),
  hasDuplicate: async () => false,
}

export const validation: ICreateUserValidation = {
  validPassword: () => true,
  validUsername: () => true,
}

export const encryptService: ICreateUserEncryptService = {
  encryptPassword: async () => 'encryptedPassword',
}

export const MOCK_CREATE_USER_CONTROLLER_USER_DATA: ICreateUserController = {
  password: 'P@ssw0rd',
  username: 'username',
  email: 'email',
}

export class CreateUserRepositoryIM implements ICreateUserRepository {
  private db: Array<ICreateUserController> = [];

  async hasDuplicate(username: string, email?: string): Promise<boolean> {
    return this.db.some(register => (register.username === username || register.email === email))
  }

  async createUser(username: string, password: string, email?: string): Promise<{ id: string; }> {
    this.db = [...this.db, {
      username,
      password,
      email
    }]

    return { id: 'new_id' };
  }
}