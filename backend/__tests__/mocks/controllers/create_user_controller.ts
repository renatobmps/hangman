import type ICreateUserRepository from "../../../src/@types/create_user_repository.type.ts";
import type ICreateUserInput from "src/controllers/@types/create_user_input.type.ts";

export class CreateUserRepositoryIM implements ICreateUserRepository {
  private db: Array<ICreateUserInput> = [];

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