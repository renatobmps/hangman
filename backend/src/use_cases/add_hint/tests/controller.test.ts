// import { after, beforeEach, describe, it } from "node:test";
// import assert from "node:assert";
// import AddHintController from "../add_hint.controller.ts";
// import { MOCK_ADD_HINT_CONTROLLER_DATA, MOCK_ADD_HINT_CONTROLLER_REPOSITORY, MOCK_ADD_HINT_CONTROLLER_VALIDATOR } from "../add_hint.constants.ts";
// import AddHintValidator from "../entities/add_hint_validator.ts";
// import AddHintRepository from "../entities/add_hint_repository.ts";
// import prismaRepository from "../../../lib/prisma_repository.ts";
// import { PrismaClient } from "@prisma/client";

// beforeEach(async () => await prismaRepository().clearDatabase())
// after(async () => await prismaRepository().clearDatabase())

// describe('AddHintController', () => {
//   const mockController = new AddHintController({
//     validator: MOCK_ADD_HINT_CONTROLLER_VALIDATOR,
//     repository: MOCK_ADD_HINT_CONTROLLER_REPOSITORY
//   });

//   const controller = new AddHintController({
//     validator: new AddHintValidator(),
//     repository: new AddHintRepository(prismaRepository()),
//   });

//   // it('should to instance', () => {
//   //   assert.ok(mockController);
//   //   assert.ok(controller);
//   //   assert.strictEqual(mockController instanceof AddHintController, true);
//   //   assert.strictEqual(controller instanceof AddHintController, true);
//   //   assert.ok(mockController.execute);
//   //   assert.ok(controller.execute);
//   // })

//   // it('should to create with words', async () => {
//   //   const words = await Promise.all(
//   //     MOCK_ADD_HINT_CONTROLLER_DATA.words!.map(word => (
//   //       prismaRepository().addWord(word)
//   //     ))
//   //   );
    
//   //   const mockNewHint = await mockController.execute(
//   //     MOCK_ADD_HINT_CONTROLLER_DATA
//   //   );
//   //   debugger;
//   //   const newHint = await controller.execute({
//   //     ...MOCK_ADD_HINT_CONTROLLER_DATA,
//   //     words: words.map(word => word.id),
//   //   });

//   //   assert.ok(mockNewHint)
//   //   assert.ok(newHint)
//   //   assert.ok(mockNewHint.id)
//   //   assert.ok(newHint.id)
//   // })

//   // it('should to create without words', async () => {
//   //   const copyOfMock = { ...MOCK_ADD_HINT_CONTROLLER_DATA };
//   //   delete copyOfMock.words;

//   //   const mockNewHint = await mock_controller.execute(copyOfMock);
//   //   const newHint = await controller.execute(copyOfMock);

//   //   assert.ok(mockNewHint)
//   //   assert.ok(newHint)
//   //   assert.ok(mockNewHint.id)
//   //   assert.ok(newHint.id)
//   // })

//   it('should to throw validation error', () => {
//     assert.rejects(async () => await new AddHintController({
//       validator: {
//         ...MOCK_ADD_HINT_CONTROLLER_VALIDATOR,
//         checkTitle: () => { throw new Error('mocked error') },
//       },
//       repository: MOCK_ADD_HINT_CONTROLLER_REPOSITORY
//     }).execute(MOCK_ADD_HINT_CONTROLLER_DATA), /mocked error/);

//     assert.rejects(async () => await new AddHintController({
//       validator: {
//         ...MOCK_ADD_HINT_CONTROLLER_VALIDATOR,
//         checkActiveState: () => { throw new Error('mocked error') },
//       },
//       repository: MOCK_ADD_HINT_CONTROLLER_REPOSITORY
//     }).execute(MOCK_ADD_HINT_CONTROLLER_DATA), /mocked error/);

//     assert.rejects(async () => await new AddHintController({
//       validator: {
//         ...MOCK_ADD_HINT_CONTROLLER_VALIDATOR,
//         checkWords: () => { throw new Error('mocked error') },
//       },
//       repository: MOCK_ADD_HINT_CONTROLLER_REPOSITORY
//     }).execute(MOCK_ADD_HINT_CONTROLLER_DATA), /mocked error/);
//   })
// })