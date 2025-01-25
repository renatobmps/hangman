// import { after, beforeEach, describe, it } from "node:test";
// import assert from "node:assert";
// import getHints from "../index.ts";
// import prismaRepository from "../../../lib/prisma_repository.ts";

// beforeEach(async () => await prismaRepository().clearDatabase())
// after(async () => await prismaRepository().clearDatabase())

// describe('getHints', () => {
//   it('should to return all hints', async () => {
//     const hints = await getHints();

//     assert.ok(hints);
//     assert.equal(Array.isArray(hints), true);
//     assert.equal(hints.every(({ is_activated }) => typeof is_activated === 'boolean'), true);
//     assert.equal(hints.every(({ total_words }) => typeof total_words === 'number'), true);
//     assert.equal(hints.every(({ words }) => Array.isArray(words)), true);
//   })
// })