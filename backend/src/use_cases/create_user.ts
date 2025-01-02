// fornecer o que o controller precisar pra ele e ser importado pelo server

import { CreateUserValidation } from "../entities/create_user_validation.ts";
import { CreateUserController } from "../controllers/create_user_controller.ts"
import type { ICreateUserController } from "../interfaces/create_user.ts";
import CreateUserRepository from "../entities/create_user_repository.ts"

export const createUser = async (user: ICreateUserController) => {
  const controller = new CreateUserController(
    new CreateUserRepository(),
    new CreateUserValidation(),
  );

  return controller.execute(user);
}