import type IDatabase from "src/interfaces/database.type.ts";
import { beforeEach, describe, it } from "node:test";
import { strictEqual, doesNotReject, ok } from "node:assert";
import CreateUserRepository from "../../src/repositories/create_user.repository.ts";
import { databaseMock, databaseWithDuplicate, databaseWithoutDuplicate } from "./__mock__.ts";
import { MOCK_CREATE_USER_REPOSITORY_USER_DATA } from "./__dto__.ts";

beforeEach(() => {
  databaseMock.$disconnect.mock.resetCalls();
  databaseMock.user.create.mock.resetCalls();
  databaseWithDuplicate.user.findFirst.mock.resetCalls();
  databaseWithoutDuplicate.user.findFirst.mock.resetCalls();
})

describe('CreateUserRepository unit', () => {
  const repository = new CreateUserRepository(
    databaseMock as unknown as IDatabase,
  );

  it('should to have a duplicate', async () => {
    const arrange = new CreateUserRepository(
      databaseWithDuplicate as unknown as IDatabase,
    );

    const act = await arrange.hasDuplicate(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email);

    strictEqual(act, true);
    strictEqual(databaseWithDuplicate.user.findFirst.mock.callCount(), 1);
  });

  it('should not to have a duplicate', async () => {
    const arrange = new CreateUserRepository(
      databaseWithoutDuplicate as unknown as IDatabase,
    );

    const act = await arrange.hasDuplicate(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email);

    strictEqual(act, false);
    strictEqual(databaseWithoutDuplicate.user.findFirst.mock.callCount(), 1);
  });

  it('should run database create method', async () => {
    const act = repository.exec(
      MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
      MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
      MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
    )

    await doesNotReject(async () => await act);
    strictEqual(databaseMock.user.create.mock.callCount(), 1);
    ok((await act).id)
  })

  it('should disconnect database after create user', async () => {
    const act = repository.exec(
      MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
      MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
      MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
    )

    await doesNotReject(async () => await act);
    strictEqual(databaseMock.$disconnect.mock.callCount(), 1);
  })
})
