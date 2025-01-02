import type { ICreateUserController, ICreateUserRepository } from "../interfaces/create_user.ts";

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
