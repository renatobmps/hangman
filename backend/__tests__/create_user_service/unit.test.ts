import { deepEqual, ok, rejects } from "node:assert";
import { beforeEach, describe, it } from "node:test";
import { MOCK_CREATE_USER_SERVICE_USER_DATA } from "./__dto__.ts";
import {
  validationPwdError,
  validationUsernameError,
  repositoryWithDuplicate,
  createUserService
} from "./__mock__.ts";
import CreateUserService from "../../src/services/create_user.service.ts";
import InvalidUsernameException from "../../src/exceptions/invalid_username_exception.ts";
import InvalidPasswordException from "../../src/exceptions/invalid_password_exception.ts";
import UserAlreadyExistsException from "../../src/exceptions/user_already_exists_exception.ts";

beforeEach(async () => {
  createUserService.encryptService.encryptPassword.mock.resetCalls();
  createUserService.repository.createUser.mock.resetCalls();
  createUserService.repository.hasDuplicate.mock.resetCalls();
  createUserService.validation.validPassword.mock.resetCalls();
  createUserService.validation.validUsername.mock.resetCalls();
})

describe("CreateUserService unit", async () => {
  const mockService = new CreateUserService({
    ...createUserService
  });

  it('should to be invalid username', async () => {
    const arrange = new CreateUserService({
      ...createUserService,
      validation: validationUsernameError,
    });

    const act = arrange.execute(
      MOCK_CREATE_USER_SERVICE_USER_DATA
    )

    rejects(async () => await act, new RegExp(
      'Invalid username',
      'i'
    ));
    act.catch(error => {
      deepEqual(error instanceof InvalidUsernameException, true);
    })
    deepEqual(
      validationUsernameError.validUsername.mock.callCount(),
      1
    );
    deepEqual(
      validationUsernameError.validPassword.mock.callCount(),
      0
    );
  })

  it('should to be invalid password', async () => {
    const arrange = new CreateUserService({
      ...createUserService,
      validation: validationPwdError,
    });

    const act = arrange.execute(
      MOCK_CREATE_USER_SERVICE_USER_DATA
    )

    rejects(async () => await act, new RegExp(
      'Invalid password',
      'i'
    ))
    act.catch(error => {
      deepEqual(error instanceof InvalidPasswordException, true);
    })
    deepEqual(
      validationPwdError.validPassword.mock.callCount(),
      1
    );
    deepEqual(
      validationPwdError.validUsername.mock.callCount(),
      1
    );
  })

  it('should to have duplicate', async () => {
    const arrange = new CreateUserService({
      ...createUserService,
      repository: repositoryWithDuplicate,
    });

    const act = arrange.execute(
      MOCK_CREATE_USER_SERVICE_USER_DATA
    )

    rejects(async () => await act, new RegExp(
      'User already exists',
      'i'
    ))
    act.catch(error => {
      deepEqual(error instanceof UserAlreadyExistsException, true);
    })
    deepEqual(
      repositoryWithDuplicate.createUser.mock.callCount(),
      0
    )
    deepEqual(
      repositoryWithDuplicate.hasDuplicate.mock.callCount(),
      1
    )
  })

  it('should to run password encryption', async () => {
    await mockService.execute(
      MOCK_CREATE_USER_SERVICE_USER_DATA
    );

    deepEqual(
      createUserService.encryptService.encryptPassword.mock.callCount(),
      1,
    )
  })

  it("should to run repository's create method", async () => {
    await mockService.execute(
      MOCK_CREATE_USER_SERVICE_USER_DATA
    );

    deepEqual(
      createUserService.repository.createUser.mock.callCount(),
      1,
    )
  })

  it('should to create a new user', async () => {
    const newUser = await mockService.execute(
      MOCK_CREATE_USER_SERVICE_USER_DATA
    );

    ok(newUser.id);
  })
});
