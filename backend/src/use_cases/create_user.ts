// fornecer o que o controller precisar pra ele e ser importado pelo server

import { CreateUserValidation } from "../entities/create_user_validation.ts";
import CreateUserController from "../controllers/create_user_controller.ts"
import CreateUserRepository from "../entities/create_user_repository.ts"
import CreateUserEncryptService from "../entities/create_user_encrypt_service.ts";
import { db } from "../lib/db.ts";
import type ICreateUserInput from "src/controllers/@types/create_user_input.type.ts";

export const createUser = async (user: ICreateUserInput) => {
  const controller = new CreateUserController(
    new CreateUserRepository(db()),
    new CreateUserValidation(),
    new CreateUserEncryptService(),
  );
  const newUser = await controller.execute(user);

  return newUser;
}