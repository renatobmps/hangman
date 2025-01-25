import { db } from "../lib/db.ts";
import type ICreateUserRepository from "../@types/create_user_repository.type.ts";

export interface IDatabase {
  user: {
    findFirst(args: {
      where: {
        OR: [
          { username: string },
          { email?: string },
        ]
      }
    }): Promise<unknown>;
    create(args: { data: { password: string, username: string, email?: string } }): Promise<{ id: string }>;
  }
}

export default class CreateUserRepository implements ICreateUserRepository {
  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  async hasDuplicate(username: string, email?: string): Promise<boolean> {
    const registers = await this.database.user.findFirst({
      where: {
        OR: [
          { username },
          { email }
        ]
      },
    });

    return !!registers;
  }

  async createUser(username: string, password: string, email?: string): Promise<{ id: string; }> {
    const { id } = await this.database.user.create({
      data: { password, username, email }
    });

    return { id };
  }
}
