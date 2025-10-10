import type IDatabase from "../../src/interfaces/database.type.ts";
import { ok, strictEqual, deepEqual, doesNotReject, rejects, throws, doesNotThrow } from "assert";
import { beforeEach, describe, it } from "node:test";
import CreateUser from "../../src/controllers/create_user.controller.ts";
import UserAlreadyExistsException from "../../src/exceptions/user_already_exists_exception.ts";
import UsernameHelper from "../../src/helpers/username.helper.ts";
import User from "../../src/models/user.ts";
import CreateUserRepository from "../../src/repositories/create_user.repository.ts";
import CreateUserService from "../../src/services/create_user.service.ts";
import { MOCK_CREATE_USER_REPOSITORY_USER_DATA } from "./__dto__.ts";
import { createUserService, databaseMock, databaseWithDuplicate, databaseWithoutDuplicate, repositoryWithDuplicate, validationPwdError, validationUsernameError, } from "./__mock__.ts";
import UserValidationService from "../../src/services/user_validation.service.ts";
import InvalidUsernameException from "../../src/exceptions/invalid_username_exception.ts";
import InvalidPasswordException from "../../src/exceptions/invalid_password_exception.ts";

beforeEach(async () => {
  createUserService.encryptPasswordService.exec.mock.resetCalls();
  createUserService.repository.exec.mock.resetCalls();
  createUserService.repository.hasDuplicate.mock.resetCalls();
  databaseMock.$disconnect.mock.resetCalls();
  databaseMock.user.create.mock.resetCalls();
  databaseWithDuplicate.user.findFirst.mock.resetCalls();
  databaseWithoutDuplicate.user.findFirst.mock.resetCalls();
});

describe.only("CreateUser unit", async () => {

  describe("User", () => {
    describe("username", () => {
      it('should username to be slug', () => {
        const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);
        user.username = user.username.toUpperCase();

        ok(user);
        deepEqual(new UsernameHelper(user.username).check(), true);
      })
    })

    describe("password", () => {
      it('should to accept password', () => {
        const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);
        user.password = "aA1!bB";

        ok(user);
        deepEqual(new UsernameHelper(user.username).check(), true);
      })
    })

    describe('email', () => {
      it('should email be optional', () => {
        const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);
        user.email = undefined;

        ok(user);
        strictEqual(user.email, undefined);
      })
    })

    it('should to be possible to create an user with mock data', () => {
      const user = new User(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      ok(user);
      deepEqual(user.username, new UsernameHelper(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username).convert())
      deepEqual(user.email, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email)
      deepEqual(user.password, MOCK_CREATE_USER_REPOSITORY_USER_DATA.password)
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

  describe("UserValidationService", () => {
    const validation = new UserValidationService();

    describe("username", () => {
      it('should to throw "There is no username"', () => {
        const errorMessage = new RegExp("There is no username", "i");
        throws(() => validation.validUsername(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: undefined }) as unknown as User), errorMessage)
        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: null } as unknown as User), errorMessage)
        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: [] } as unknown as User), errorMessage)
        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: {} } as unknown as User), errorMessage)
        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: '' } as unknown as User), errorMessage)
      });

      it('should to throw "Username is too short"', () => {
        const errorMessage = new RegExp("Username is too short", 'i');

        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: MOCK_CREATE_USER_REPOSITORY_USER_DATA.username.substring(0, 1), } as unknown as User), errorMessage)

        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: "A", } as unknown as User), errorMessage)

        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: "use", } as unknown as User), errorMessage)
      })

      it('should to throw "Invalid username format"', () => {
        const errorMessage = new RegExp("Invalid username format", 'i');

        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: MOCK_CREATE_USER_REPOSITORY_USER_DATA.username + ' ' + MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, } as unknown as User), errorMessage)

        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: "User name", } as unknown as User), errorMessage)

        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: "User  name", } as unknown as User), errorMessage)

        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: " username", } as unknown as User), errorMessage)

        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: "username ", } as unknown as User), errorMessage)

        throws(() => validation.validUsername({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, username: " username ", } as unknown as User), errorMessage)
      })

      it('should to accept valid username', () => {
        const act = validation.validUsername(MOCK_CREATE_USER_REPOSITORY_USER_DATA as unknown as User);

        strictEqual(act, true);
        doesNotThrow(() => validation.validUsername(MOCK_CREATE_USER_REPOSITORY_USER_DATA as unknown as User))
      })
    })

    describe("password", () => {
      it('should to throw "There is no password" error', () => {
        const errorMessage = new RegExp("There is no password", "i");

        throws(() => validation.validPassword({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: undefined, } as unknown as User), errorMessage);
        throws(() => validation.validPassword({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: null, } as unknown as User), errorMessage);
        throws(() => validation.validPassword({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: {}, } as unknown as User), errorMessage);
        throws(() => validation.validPassword({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: [], } as unknown as User), errorMessage);
        throws(() => validation.validPassword({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: 0, } as unknown as User), errorMessage);
      })

      it('should to throw "Password must be at least 6 characters" error', () => {
        const errorMessage = new RegExp("Password must be at least 6 characters", "i");

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: MOCK_CREATE_USER_REPOSITORY_USER_DATA.password.substring(0, 5) } as unknown as User)), errorMessage);

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: "aA1!", } as unknown as User)), errorMessage);
      })

      it('should to throw "Password must contain at least one uppercase letter" error', () => {
        const errorMessage = new RegExp("Password must contain at least one uppercase letter", "i");

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: MOCK_CREATE_USER_REPOSITORY_USER_DATA.password.toLocaleLowerCase(), } as unknown as User)), errorMessage);

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: "a".repeat(6), } as unknown as User)), errorMessage);
      })

      it('should to throw "Password must contain at least one lowercase letter" error', () => {
        const errorMessage = new RegExp("Password must contain at least one lowercase letter", "i");

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: MOCK_CREATE_USER_REPOSITORY_USER_DATA.password.toUpperCase(), } as unknown as User)), errorMessage);

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: "A".repeat(6), } as unknown as User)), errorMessage);
      })

      it('should to throw "Password must contain at least one number" error', () => {
        const errorMessage = new RegExp("Password must contain at least one number", "i");

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: MOCK_CREATE_USER_REPOSITORY_USER_DATA.password.replace(/\d/g, ''), } as unknown as User)), errorMessage);

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: "aA".repeat(3), } as unknown as User)), errorMessage);
      })

      it('should to throw "Password must contain at least one special character" error', () => {
        const errorMessage = new RegExp("Password must contain at least one special character", "i");

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: MOCK_CREATE_USER_REPOSITORY_USER_DATA.password.replace(/[^A-Za-z0-9]/g, ''), } as unknown as User)), errorMessage);

        throws(() => validation.validPassword(({ ...MOCK_CREATE_USER_REPOSITORY_USER_DATA, password: "aA1".repeat(2), } as unknown as User)), errorMessage);

      })

      it('should to accept valid password', () => {
        const act = validation.validPassword(MOCK_CREATE_USER_REPOSITORY_USER_DATA as unknown as User);

        strictEqual(act, true);
        doesNotThrow(() => validation.validPassword(MOCK_CREATE_USER_REPOSITORY_USER_DATA as unknown as User))
      })
    })
  })

  describe('Service', () => {
    const mockService = new CreateUserService({
      ...createUserService,
    });

    it("should to be invalid username", async () => {
      const arrange = new CreateUserService({
        ...createUserService,
        userValidationService: validationUsernameError,
      });

      const act = arrange.execute(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

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
        userValidationService: validationPwdError,
      });

      const act = arrange.execute(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

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

      const act = arrange.execute(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      rejects(async () => await act, new RegExp("User already exists", "i"));
      act.catch((error) => {
        deepEqual(error instanceof UserAlreadyExistsException, true);
      });
      deepEqual(repositoryWithDuplicate.exec.mock.callCount(), 0);
      deepEqual(repositoryWithDuplicate.hasDuplicate.mock.callCount(), 1);
    });

    it("should to run password encryption", async () => {
      await mockService.execute(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      deepEqual(createUserService.encryptPasswordService.exec.mock.callCount(), 1);
    });

    it("should to run repository's create method", async () => {
      await mockService.execute(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      deepEqual(createUserService.repository.exec.mock.callCount(), 1);
    });

    it("should to create a new user", async () => {
      const newUser = await mockService.execute(
        MOCK_CREATE_USER_REPOSITORY_USER_DATA,
      );

      ok(newUser.id);
    });
  })

  describe.skip("Controller", () => {
    it('should to create a user', async () => {
      const createUser = new CreateUser();

      const newUser = await createUser.exec(MOCK_CREATE_USER_REPOSITORY_USER_DATA);

      ok(newUser.id);
    });
  })
});
