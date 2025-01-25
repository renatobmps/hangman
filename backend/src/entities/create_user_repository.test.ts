// import { after, beforeEach, describe, it } from "node:test";
// import assert from "node:assert";
// import CreateUserRepository from "./create_user_repository.ts";
// import { MOCK_CREATE_USER_REPOSITORY_USER_DATA, MOCK_DB } from "../../__tests__/mocks/entities/create_user_repository.ts";
// import { db } from "../../src/lib/db.ts";
// import prismaRepository from "../../src/lib/prisma_repository.ts";

// beforeEach(async () => await prismaRepository().clearDatabase())
// after(async () => await prismaRepository().clearDatabase())

// describe('CreateUserRepository', () => {
//   const mockWithoutDuplicate = new CreateUserRepository(
//     MOCK_DB.without_duplicate
//   );
//   const mockWithDuplicate = new CreateUserRepository(
//     MOCK_DB.with_duplicate
//   );
//   const repository = new CreateUserRepository(db());

//   it('should to instance repository', () => {
//     assert.ok(mockWithoutDuplicate);
//     assert.ok(mockWithDuplicate);
//     assert.ok(repository);
//     assert.strictEqual(
//       mockWithoutDuplicate instanceof CreateUserRepository, true
//     );
//     assert.strictEqual(
//       mockWithDuplicate instanceof CreateUserRepository, true
//     );
//     assert.strictEqual(
//       repository instanceof CreateUserRepository, true
//     );
//   });

//   it('should not to have a duplicate', async () => {
//     const mockHasDuplicate = await mockWithoutDuplicate.hasDuplicate(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
//     );
//     const hasDuplicate = await repository.hasDuplicate(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
//     );

//     assert.strictEqual(mockHasDuplicate, false);
//     assert.strictEqual(hasDuplicate, false);
//   });

//   it('should to have a duplicate', async () => {
//     await repository.createUser(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
//     )

//     const mockHasDuplicate = await mockWithDuplicate.hasDuplicate(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
//     );
//     const hasDuplicate = await repository.hasDuplicate(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
//     );

//     assert.strictEqual(mockHasDuplicate, true);
//     assert.strictEqual(hasDuplicate, true);
//   });

//   it('should to create an user if it not already exists', () => {
//     assert.doesNotReject(async () => await mockWithoutDuplicate.createUser(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
//     ));
//     assert.doesNotReject(async () => await mockWithoutDuplicate.createUser(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
//     ));
//     assert.doesNotReject(async () => await repository.createUser(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
//     ));
//   })

//   it('should not to create an user if it already exists', async () => {
//     await repository.createUser(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
//     )

//     assert.rejects(async () => await mockWithDuplicate.createUser(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
//     ));
//     assert.rejects(async () => await mockWithDuplicate.createUser(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
//     ));
//     assert.rejects(async () => await repository.createUser(
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.username,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.password,
//       MOCK_CREATE_USER_REPOSITORY_USER_DATA.email,
//     ));
//   })
// })