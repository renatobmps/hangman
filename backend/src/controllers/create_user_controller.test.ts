import { describe } from "node:test";
import CreateUserController from "./create_user_controller.ts";
import { CreateUserRepositoryIM, encryptService, MOCK_CREATE_USER_CONTROLLER_USER_DATA, repository, validation } from "../../__tests__/mocks/controllers/create_user_controller.ts";
import assert from "node:assert";
import { CreateUserValidation } from "../entities/create_user_validation.ts";
import CreateUserEncryptService from "../entities/create_user_encrypt_service.ts";

describe("CreateUserController", () => {
  describe('unit', async () => {
    const controller = new CreateUserController(repository, validation, encryptService);

    const newUser = await controller.execute(MOCK_CREATE_USER_CONTROLLER_USER_DATA);

    assert.ok(newUser.id);
  });

  describe('integration', async () => {
    const controller = new CreateUserController(new CreateUserRepositoryIM(), new CreateUserValidation(), new CreateUserEncryptService());

    const newUser = await controller.execute(MOCK_CREATE_USER_CONTROLLER_USER_DATA);

    assert.ok(newUser.id);
  });
});
