// import { after, beforeEach, describe, it } from "node:test";
// import { apiRequest } from "../../../__tests__/utils/api_request.ts";
// import assert from "node:assert";
// import type { IGetHintsRequest } from "../../use_cases/get_hints/get_hints.interfaces.ts";
// import prismaRepository from "../../lib/prisma_repository.ts";

// beforeEach(async () => await prismaRepository().clearDatabase())
// after(async () => await prismaRepository().clearDatabase())

// describe('get hints', () => {
//   describe('e2e', () => {
//     it('should return all hints', async () => {
//       const request = await apiRequest<IGetHintsRequest>(`
//           query {
//             getHints {
//               id
//             }
//           }
//       `);

//       assert.strictEqual(request.statusCode, 200);
//       assert.ok(request.data);
//       assert.ok(request.data.getHints);
//       assert.equal(Array.isArray(request.data.getHints), true);
//       assert.equal(request.data.getHints.every(({ is_activated }) => typeof is_activated === 'boolean'), true);
//       assert.equal(request.data.getHints.every(({ total_words }) => typeof total_words === 'number'), true);
//       assert.equal(request.data.getHints.every(({ words }) => Array.isArray(words)), true);
//     })
//   })
// });