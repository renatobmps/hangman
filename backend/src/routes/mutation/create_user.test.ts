// import assert from "node:assert";
// import { after, beforeEach, describe, it } from "node:test";
// import { apiRequest } from "../../../__tests__/utils/api_request.ts";
// import { MOCK_CREATE_USER_DATA } from "../../../__tests__/mocks/entities/create_user_encrypt_service.ts";
// import prismaRepository from "../../lib/prisma_repository.ts";

// beforeEach(async () => await prismaRepository().clearDatabase())
// after(async () => await prismaRepository().clearDatabase())

// describe('Create user', () => {
//   describe('e2e', () => {
//     it('should to make request', async () => {
//       const request = await apiRequest<{ createUser?: { id?: string } }>(`
//         mutation {
//           createUser(username: "${MOCK_CREATE_USER_DATA.username}", password: "${MOCK_CREATE_USER_DATA.password}", email: "${MOCK_CREATE_USER_DATA.email}") {
//             id
//           }
//         }
//       `);

//       assert.strictEqual(request.statusCode, 200);
//       assert.ok(request.data);
//       assert.ok(request.data.createUser);
//       assert.ok(request.data.createUser.id);
//     });
//   })
// });
