import type IDatabase from "src/interfaces/database.type";
import type { ICreateUserRepository } from "src/interfaces/create_user.type";

export default class CreateUserRepository implements ICreateUserRepository {
  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  async hasDuplicate(username: string, email?: string): Promise<boolean> {
    const registers = await this.database.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    return !!registers;
  }

  async exec(
    username: string,
    password: string,
    email?: string,
  ): Promise<{ id: string }> {
    const { id = "no_id" } = await this.database.user.create({
      data: { password, username, email },
    }).finally(() => this.database.$disconnect());

    return { id };
  }
}
