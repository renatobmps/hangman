import type { ICreateUserEncryptService } from "src/interfaces/create_user";

export class CreateUserEncryptService implements ICreateUserEncryptService {
  encryptPassword(password: string): string {
    throw new Error("Method not implemented.");
  }
}