import type { ICreateUserInput } from "../interfaces/create_user.type.ts";
import type IDatabase from "src/interfaces/database.type.ts";
import UserValidationService from "../services/user_validation.service.ts";
import CreateUserService from "../services/create_user.service.ts";
import CreateUserRepository from "../repositories/create_user.repository.ts";
import EncryptPasswordService from "../services/encrypt_password.service.ts";
import { db } from "../lib/db.ts";

export default class CreateUser {
  private controller: CreateUserService;

  constructor() {
    this.controller = new CreateUserService({
      encryptPasswordService: new EncryptPasswordService(),
      repository: new CreateUserRepository(db() as unknown as IDatabase),
      userValidationService: new UserValidationService(),
    });
  }

  public async exec(user: ICreateUserInput) {

    const newUser = await this.controller.execute(user);

    return newUser;
  }
}