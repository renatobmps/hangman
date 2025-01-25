import { createUserController, MOCK_CREATE_USER_CONTROLLER_USER_DATA } from "../../../__tests__/__mocks__/create_user_controller_validation.ts";
import { CreateUserRepositoryIM } from "../../../__tests__/mocks/controllers/create_user_controller.ts";
import { ok } from "node:assert";
import { after, beforeEach, describe, it } from "node:test";
import CreateUserController from "../../../src/controllers/create_user_controller.ts";
import prismaRepository from "../../../src/lib/prisma_repository.ts";
import { CreateUserValidation } from "../../../src/entities/create_user_validation.ts";
import CreateUserEncryptService from "../../../src/entities/create_user_encrypt_service.ts";

beforeEach(async () => await prismaRepository().clearDatabase())
after(async () => await prismaRepository().clearDatabase())
describe("CreateUserController integration", () => {
  it('should to integrate with ICreateUserRepository', async () => {
    const mockController = new CreateUserController({
      ...createUserController,
      repository: new CreateUserRepositoryIM(),
    });

    const newUser = await mockController.execute(
      MOCK_CREATE_USER_CONTROLLER_USER_DATA,
    )

    ok(newUser.id);
  })

  it('should to integrate with ICreateUserValidation', async () => {
    const mockController = new CreateUserController({
      ...createUserController,
      validation: new CreateUserValidation(),
    });

    const newUser = await mockController.execute(
      MOCK_CREATE_USER_CONTROLLER_USER_DATA,
    )

    ok(newUser.id);
  })

  it('should to integrate with ICreateUserEncryptService', async () => {
    const mockController = new CreateUserController({
      ...createUserController,
      encryptService: new CreateUserEncryptService()
    });

    const newUser = await mockController.execute(
      MOCK_CREATE_USER_CONTROLLER_USER_DATA,
    )

    ok(newUser.id);
  })
});
