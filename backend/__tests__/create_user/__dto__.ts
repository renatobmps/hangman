import type {
  ICreateUserRepository,
  ICreateUserInput,
} from "src/interfaces/create_user.type";
import type User from "src/models/user";

export const MOCK_CREATE_USER_REPOSITORY_USER_DATA = {
  username: "new_user",
  password: "P@ssw0rd",
  email: "email@test.com",
};

export class CreateUserRepositoryIM implements ICreateUserRepository {
  private db: Array<ICreateUserInput & { id: string }> = [];

  async hasDuplicate({ username, email }: User): Promise<boolean> {
    return this.db.some(
      (register) => register.username === username || register.email === email,
    );
  }

  async exec({ username, password, email }: User): Promise<{ id: string }> {
    const rand = () => Math.floor(Math.random() * 10);
    const newID = "id_" + rand() + rand() + rand();

    this.db = [
      ...this.db,
      {
        id: newID,
        username,
        password,
        email,
      },
    ];

    return { id: newID };
  }
}
