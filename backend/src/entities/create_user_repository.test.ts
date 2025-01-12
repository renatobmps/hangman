import { after, describe, it } from "node:test";
import assert from "node:assert";
import CreateUserRepository from "./create_user_repository.ts";
import { MOCK_CREATE_USER_REPOSITORY_USER_DATA, MOCK_DB } from "../../__tests__/mocks/entities/create_user_repository.ts";
import { db } from "../../src/lib/db.ts";
import clearDatabase from "../../__tests__/utils/clear_database.ts";

after(async () => {
  await clearDatabase();
})

describe('CreateUserRepository', () => {
  describe('unit', () => {
    describe('without duplicates', () => {
      const repository = new CreateUserRepository(MOCK_DB.without_duplicate);

      it('should to instance repository', () => {
        assert.ok(repository);
        assert.strictEqual(repository instanceof CreateUserRepository, true);
      });

      it('should not to have a duplicate', async () => {

        const hasDuplicate = await repository.hasDuplicate(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email);

        assert.strictEqual(hasDuplicate, false);
      });

      it('should to create an user if it not already exists', () => {
        assert.doesNotThrow(() => repository.createUser(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.password));
        assert.doesNotThrow(() => repository.createUser(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.password, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email));
      })
    });

    describe('with duplicate', () => {
      const repository = new CreateUserRepository(MOCK_DB.with_duplicate);

      it('should to instance repository', () => {
        assert.ok(repository);
        assert.strictEqual(repository instanceof CreateUserRepository, true);
      });

      it('should to have a duplicate', async () => {

        const hasDuplicate = await repository.hasDuplicate(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email);

        assert.ok(repository);
        assert.strictEqual(hasDuplicate, true);
      });

      it('should not to create an user if it already exists', async () => {
        assert.rejects(() => repository.createUser(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.password));
        assert.rejects(() => repository.createUser(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.password, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email));
      })
    })
  })

  describe('integration', () => {
    const repository = new CreateUserRepository(db());

    it('should not to have duplicates', async () => {
      const hasDuplicate = await repository.hasDuplicate(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email);

      assert.strictEqual(hasDuplicate, false);
    });

    it('should to create a new user', async () => {
      assert.doesNotReject(async () => await repository.createUser(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.password, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email));
    })

    it('should to have duplicate', async () => {
      const hasDuplicate = await repository.hasDuplicate(MOCK_CREATE_USER_REPOSITORY_USER_DATA.username, MOCK_CREATE_USER_REPOSITORY_USER_DATA.email);

      assert.strictEqual(hasDuplicate, true);
    })
  });
})