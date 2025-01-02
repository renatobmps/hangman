import type { ICreateUserValidation } from "../interfaces/create_user.ts";

export class CreateUserValidation implements ICreateUserValidation {
  validUsername(username: string): boolean {
    if (!username) {
      throw new Error("There is no username");
    }

    if (username.includes(' ')) {
      throw new Error("Invalid username format");
    }

    if (username.length <= 3) {
      throw new Error("Username is too short");
    }

    return true;
  }
  validPassword(password: string): boolean {
    if (!password) {
      throw new Error("There is no password");
    }

    return true;
  }
}