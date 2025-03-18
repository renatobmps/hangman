import type { ICreateUserRepository, ICreateUserValidation, ICreateUserInput } from "src/interfaces/create_user.type"

export const MOCK_CREATE_USER_SERVICE_USER_DATA: ICreateUserInput = {
  password: 'P@ssw0rd',
  username: 'username',
  email: 'email',
}

export class CreateUserRepositoryIM implements ICreateUserRepository {
  private db: Array<ICreateUserInput & { id: string }> = [];

  async hasDuplicate(username: string, email?: string): Promise<boolean> {
    return this.db.some(register => (register.username === username || register.email === email))
  }

  async createUser(username: string, password: string, email?: string): Promise<{ id: string; }> {
    const rand = () => Math.floor(Math.random() * 10);
    const newID = 'id_' + rand() + rand() + rand();

    this.db = [...this.db, {
      id: newID,
      username,
      password,
      email
    }]

    return { id: newID };
  }
}
