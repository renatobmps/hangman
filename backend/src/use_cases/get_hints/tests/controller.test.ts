// import { after, beforeEach, describe, it } from "node:test";
// import assert from "node:assert";
// import GetHintsController from "../get_hints.controller.ts";
// import { GetHintsRepositoryIM, MOCK_GET_HINTS_CONTROLLER_REPOSITORY } from "../../../../__tests__/mocks/controllers/get_hint_controller.ts";
// import prismaRepository from "../../../lib/prisma_repository.ts";

// beforeEach(async () => await prismaRepository().clearDatabase())
// after(async () => await prismaRepository().clearDatabase())

// describe('GetHintsController', () => {
//   describe('unit', () => {
//     const controller = new GetHintsController(MOCK_GET_HINTS_CONTROLLER_REPOSITORY);

//     it('should to be defined', () => {
//       assert.ok(controller);
//       assert.equal(controller instanceof GetHintsController, true);
//     });

//     it('should to return all hints', async () => {
//       const hint = await controller.execute();

//       assert.ok(hint);
//       assert.equal(Array.isArray(hint), true);
//       assert.equal(hint.every(({ id }) => typeof id === 'string'), true);
//     })
//   });

//   describe('integration', () => {
//     const controller = new GetHintsController(new GetHintsRepositoryIM());

//     it('should to be defined', () => {
//       assert.ok(controller);
//       assert.equal(controller instanceof GetHintsController, true);
//     });

//     it('should to return all hints', async () => {
//       const hint = await controller.execute();

//       assert.ok(hint);
//       assert.equal(Array.isArray(hint), true);
//       assert.equal(hint.every(({ id }) => typeof id === 'string'), true);
//     })
//   })
// })