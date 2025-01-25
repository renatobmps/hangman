// import { after, beforeEach, describe, it } from "node:test";
// import GetHintsRepository from "../entities/repository.ts";
// import { MOCK_DATABASE } from "../../../../__tests__/mocks/entities/get_hint_repository.ts";
// import assert from "node:assert";
// import { db } from "../../../lib/db.ts";
// import prismaRepository from "../../../lib/prisma_repository.ts";

// beforeEach(async () => await prismaRepository().clearDatabase())
// after(async () => await prismaRepository().clearDatabase())

// describe('GetHintsRepository', () => {
//   describe('unit', () => {
//     const repository = new GetHintsRepository(MOCK_DATABASE);

//     it('should do instance it', () => {
//       assert.ok(repository);
//       assert.equal(repository instanceof GetHintsRepository, true);
//     });

//     it('should to return hints', async () => {
//       const hints = await repository.getAllHints();

//       assert.ok(hints);
//       assert.equal(Array.isArray(hints), true);
//       assert.equal(hints.every(({ total_words }) => typeof total_words === 'number'), true);
//       assert.equal(hints.every(({ words }) => Array.isArray(words)), true);
//     })
//   });

//   describe('integration', async () => {
//     const repository = new GetHintsRepository(db());

//     it('should do instance it', () => {
//       assert.ok(repository);
//       assert.equal(repository instanceof GetHintsRepository, true);
//     });

//     it('should to return hints', async () => {
//       const hints = await repository.getAllHints();

//       assert.ok(hints);
//       assert.equal(Array.isArray(hints), true);
//       assert.equal(hints.every(({ total_words }) => typeof total_words === 'number'), true);
//       assert.equal(hints.every(({ words }) => Array.isArray(words)), true);
//     })
//   })
// })
