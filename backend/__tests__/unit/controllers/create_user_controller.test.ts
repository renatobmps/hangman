import {
  INVALID_PWD_ARRANGE,
  INVALID_USER_ARRANGE,
  MOCK_CREATE_USER_CONTROLLER_USER_DATA,
  validationPwdError,
  validationUsernameError,
  repositoryWithDuplicate,
  DUPLICATED_USER_ARRANGE,
  createUserController
} from "../../__mocks__/create_user_controller_validation.ts";
import { deepEqual, ok, rejects } from "node:assert";
import { beforeEach, describe, it } from "node:test";
import CreateUserController from "../../../src/controllers/create_user_controller.ts";

beforeEach(async () => {
  createUserController.encryptService.encryptPassword.mock.resetCalls();
  createUserController.repository.createUser.mock.resetCalls();
  createUserController.repository.hasDuplicate.mock.resetCalls();
  createUserController.validation.validPassword.mock.resetCalls();
  createUserController.validation.validUsername.mock.resetCalls();
})

describe("CreateUserController", async () => {
  const mockController = new CreateUserController({
    ...createUserController
  });

  it('should to be invalid username', async () => {
    const controller = new CreateUserController({
      ...createUserController,
      validation: validationUsernameError,
    });

    const act = controller.execute(
      MOCK_CREATE_USER_CONTROLLER_USER_DATA
    )

    rejects(async () => await act, new RegExp(
      INVALID_USER_ARRANGE,
      'i'
    ));
    deepEqual(
      validationUsernameError.validUsername.mock.calls.length,
      1
    );
    deepEqual(
      validationUsernameError.validPassword.mock.calls.length,
      0
    );
  })

  it('should to be invalid password', async () => {
    const controller = new CreateUserController({
      ...createUserController,
      validation: validationPwdError,
    });

    const act = controller.execute(
      MOCK_CREATE_USER_CONTROLLER_USER_DATA
    )

    rejects(async () => await act, new RegExp(
      INVALID_PWD_ARRANGE,
      'i'
    ))
    deepEqual(
      validationPwdError.validPassword.mock.calls.length,
      1
    );
    deepEqual(
      validationPwdError.validUsername.mock.calls.length,
      1
    );
  })

  it('should to have duplicate', async () => {
    const controller = new CreateUserController({
      ...createUserController,
      repository: repositoryWithDuplicate,
    },
    );

    const act = controller.execute(
      MOCK_CREATE_USER_CONTROLLER_USER_DATA
    )

    rejects(async () => await act, new RegExp(
      DUPLICATED_USER_ARRANGE,
      'i'
    ))
    deepEqual(
      repositoryWithDuplicate.createUser.mock.calls.length,
      0
    )
    deepEqual(
      repositoryWithDuplicate.hasDuplicate.mock.calls.length,
      1
    )
  })

  it('should to run password encryption', async () => {
    await mockController.execute(
      MOCK_CREATE_USER_CONTROLLER_USER_DATA
    );

    deepEqual(
      createUserController.encryptService.encryptPassword.mock.calls.length,
      1,
    )
  })

  it("should to run repository's create method", async () => {
    await mockController.execute(
      MOCK_CREATE_USER_CONTROLLER_USER_DATA
    );

    deepEqual(
      createUserController.repository.createUser.mock.calls.length,
      1,
    )
  })

  it('should to create a new user', async () => {
    const newUser = await mockController.execute(
      MOCK_CREATE_USER_CONTROLLER_USER_DATA
    );

    ok(newUser.id);
  })
});
