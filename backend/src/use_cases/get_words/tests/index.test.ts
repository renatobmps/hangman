// import { after, beforeEach, describe, it } from "node:test";
// import getWords from "../index.ts";
// import assert from "node:assert";
// import prismaRepository from "../../../lib/prisma_repository.ts";

// beforeEach(async () => await prismaRepository().clearDatabase())
// after(async () => await prismaRepository().clearDatabase())

// describe('getWords', () => {
//   it('should to return all words', async () => {
//     const words = await getWords();

//     assert.ok(words);
//     assert.equal(Array.isArray(words), true);
//     assert.equal(words.every(word => typeof word.id === 'string'), true);
//     assert.equal(words.every(word => typeof word.text === 'string'), true);
//     assert.equal(words.every(word => typeof word.hints !== 'undefined'), true);
//     assert.equal(words.every(word => Array.isArray(word.hints)), true);
//     assert.equal(words.every(word => word.hints?.every(hint => typeof hint.text === 'string')), true);
//   })
// })