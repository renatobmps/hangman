import type { ICreateUserValidation } from "../interfaces/create_user.ts";

export class CreateUserValidation implements ICreateUserValidation {
  validUsername(username: string): boolean {
    if (!username || typeof username !== "string") {
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
    if (!password || typeof password !== "string") {
      throw new Error("There is no password");
    }

    if (/[A-Z]/.test(password) === false) {
      throw new Error("Password must contain at least one uppercase letter");
    }

    if (/[a-z]/.test(password) === false) {
      throw new Error("Password must contain at least one lowercase letter");
    }

    if (/[0-9]/.test(password) === false) {
      throw new Error("Password must contain at least one number");
    }

    if (/[^A-Za-z0-9]/.test(password) === false) {
      throw new Error("Password must contain at least one special character");
    }

    if (password.length <= 6) {
      throw new Error("Password must be at least 6 characters");
    }

    return true;
  }
}