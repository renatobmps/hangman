import type IDatabase from "../../src/interfaces/database.type.ts";
import { ok, strictEqual, deepEqual, doesNotReject, rejects } from "assert";
import { beforeEach, describe, it } from "node:test";
import CreateUser from "../../src/controllers/create_user.ts";
import InvalidPasswordException from "../../src/exceptions/invalid_password_exception.ts";
import InvalidUsernameException from "../../src/exceptions/invalid_username_exception.ts";
import UserAlreadyExistsException from "../../src/exceptions/user_already_exists_exception.ts";
import UsernameHelper from "../../src/helpers/username.helper.ts";
import User from "../../src/models/user.ts";
import CreateUserRepository from "../../src/repositories/create_user.repository.ts";
import CreateUserService from "../../src/services/create_user.service.ts";
import { MOCK_CREATE_USER_REPOSITORY_USER_DATA, MOCK_CREATE_USER_SERVICE_USER_DATA, MOCK_CREATE_USER_USE_CASE_USER } from "./__dto__.ts";
import { createUserService, databaseMock, databaseWithDuplicate, databaseWithoutDuplicate, validationUsernameError, validationPwdError, repositoryWithDuplicate } from "./__mock__.ts";

beforeEach(async () => {
  createUserService.encryptService.exec.mock.resetCalls();
  createUserService.repository.exec.mock.resetCalls();
  createUserService.repository.hasDuplicate.mock.resetCalls();
  createUserService.validation.validPassword.mock.resetCalls();
  createUserService.validation.validUsername.mock.resetCalls();
  databaseMock.$disconnect.mock.resetCalls();
  databaseMock.user.create.mock.resetCalls();
  databaseWithDuplicate.user.findFirst.mock.resetCalls();
  databaseWithoutDuplicate.user.findFirst.mock.resetCalls();
});

describe("CreateUser unit", async () => {

  describe("User", () => {
    it('should to be possible to create an user with mock data', () => {
      const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      ok(user);
    })

    it('should email be optional', () => {
      const userWithoutEmailData = {
        ...MOCK_CREATE_USER_REPOSITORY_USER_DATA,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;

      delete userWithoutEmailData.email;

      const user = new User(userWithoutEmailData);

      ok(user);
      strictEqual('email' in userWithoutEmailData, false);
    })

    it('should username is slug', () => {
      const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);
      user.username = user.username.toUpperCase() + '  ';

      ok(user);
      deepEqual(new UsernameHelper(user.username).check(), true);
    })
  })

  describe("Repository", () => {
    const repository = new CreateUserRepository(
      databaseMock as unknown as IDatabase,
    );

    it('should to have a duplicate', async () => {
      const arrange = new CreateUserRepository(
        databaseWithDuplicate as unknown as IDatabase,
      );
      const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      const act = await arrange.hasDuplicate(user);

      strictEqual(act, true);
      strictEqual(databaseWithDuplicate.user.findFirst.mock.callCount(), 1);
    });

    it('should not to have a duplicate', async () => {
      const arrange = new CreateUserRepository(
        databaseWithoutDuplicate as unknown as IDatabase,
      );

      const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      const act = await arrange.hasDuplicate(user);

      strictEqual(act, false);
      strictEqual(databaseWithoutDuplicate.user.findFirst.mock.callCount(), 1);
    });

    it('should run database create method', async () => {
      const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      const act = repository.exec(user)

      await doesNotReject(async () => await act);
      strictEqual(databaseMock.user.create.mock.callCount(), 1);
      ok((await act).id)
    })

    it('should disconnect database after create user', async () => {
      const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      const act = repository.exec(user)

      await doesNotReject(async () => await act);
      strictEqual(databaseMock.$disconnect.mock.callCount(), 1);
    })
  })

  describe('Service', () => {
    const mockService = new CreateUserService({
      ...createUserService,
    });

    it("should to be invalid username", async () => {
      const arrange = new CreateUserService({
        ...createUserService,
        validation: validationUsernameError,
      });

      const act = arrange.execute(MOCK_CREATE_USER_SERVICE_USER_DATA);

      rejects(async () => await act, new RegExp("Invalid username", "i"));
      act.catch((error) => {
        deepEqual(error instanceof InvalidUsernameException, true);
      });
      deepEqual(validationUsernameError.validUsername.mock.callCount(), 1);
      deepEqual(validationUsernameError.validPassword.mock.callCount(), 0);
    });

    it("should to be invalid password", async () => {
      const arrange = new CreateUserService({
        ...createUserService,
        validation: validationPwdError,
      });

      const act = arrange.execute(MOCK_CREATE_USER_SERVICE_USER_DATA);

      rejects(async () => await act, new RegExp("Invalid password", "i"));
      act.catch((error) => {
        deepEqual(error instanceof InvalidPasswordException, true);
      });
      deepEqual(validationPwdError.validPassword.mock.callCount(), 1);
      deepEqual(validationPwdError.validUsername.mock.callCount(), 1);
    });

    it("should to have duplicate", async () => {
      const arrange = new CreateUserService({
        ...createUserService,
        repository: repositoryWithDuplicate,
      });

      const act = arrange.execute(MOCK_CREATE_USER_SERVICE_USER_DATA);

      rejects(async () => await act, new RegExp("User already exists", "i"));
      act.catch((error) => {
        deepEqual(error instanceof UserAlreadyExistsException, true);
      });
      deepEqual(repositoryWithDuplicate.exec.mock.callCount(), 0);
      deepEqual(repositoryWithDuplicate.hasDuplicate.mock.callCount(), 1);
    });

    it("should to run password encryption", async () => {
      await mockService.execute(MOCK_CREATE_USER_SERVICE_USER_DATA);

      deepEqual(
        createUserService.encryptService.exec.mock.callCount(),
        1,
      );
    });

    it("should to run repository's create method", async () => {
      await mockService.execute(MOCK_CREATE_USER_SERVICE_USER_DATA);

      deepEqual(createUserService.repository.exec.mock.callCount(), 1);
    });

    it("should to create a new user", async () => {
      const newUser = await mockService.execute(
        MOCK_CREATE_USER_SERVICE_USER_DATA,
      );

      ok(newUser.id);
    });
  })

  describe("Controller", () => {
    it('should to create a user', async () => {
      const createUser = new CreateUser();

      const newUser = await createUser.exec(MOCK_CREATE_USER_USE_CASE_USER);

      ok(newUser.id);
    });
  })

});
