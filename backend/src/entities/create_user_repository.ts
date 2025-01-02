import type { ICreateUserRepository } from "../interfaces/create_user.ts";
import { db } from "../lib/db.ts";

class CreateUserRepository implements ICreateUserRepository {
  async hasDuplicate(username: string, email?: string): Promise<boolean> {
    const registers = await db().user.findFirst({
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
    const { id } = await db().user.create({
      data: { password, username, email }
    });

    return { id };
  }
}

export default CreateUserRepository;