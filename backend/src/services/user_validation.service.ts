import InvalidPasswordException from "../exceptions/invalid_password_exception.ts";
import InvalidUsernameException from "../exceptions/invalid_username_exception.ts";
import type { IUserValidationService } from "src/interfaces/create_user.type";
import type User from "src/models/user";

export class UserValidationService implements IUserValidationService {
  validUsername({ username }: User): boolean {

    if (!username || typeof username !== "string") {
      throw new InvalidUsernameException("There is no username");
    }

    if (username.length <= 3) {
      throw new InvalidUsernameException("Username is too short");
    }

    if (username.includes(" ")) {
      throw new InvalidUsernameException("Invalid username format");
    }

    return true;
  }

  validPassword({ password }: User): boolean {
    if (!password || typeof password !== "string") {
      throw new Error("There is no password");
    }

    if (password.length < 6) {
      throw new InvalidPasswordException("Password must be at least 6 characters");
    }

    if (/[A-Z]/.test(password) === false) {
      console.error("VALOR", password);
      throw new InvalidPasswordException("Password must contain at least one uppercase letter");
    }

    if (/[a-z]/.test(password) === false) {
      throw new InvalidPasswordException("Password must contain at least one lowercase letter");
    }

    if (/[0-9]/.test(password) === false) {
      throw new InvalidPasswordException("Password must contain at least one number");
    }

    if (/[^A-Za-z0-9\s]/.test(password) === false) {
      throw new InvalidPasswordException("Password must contain at least one special character");
    }

    return true;
  }
}
