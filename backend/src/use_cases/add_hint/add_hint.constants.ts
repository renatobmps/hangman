import type { IAddHintControllerExecute, IAddHintControllerRepository, IAddHintControllerValidator } from "./add_hint.interfaces.ts";

export const MOCK_ADD_HINT_CONTROLLER_VALIDATOR: IAddHintControllerValidator = {
  checkTitle: () => true,
  checkActiveState: () => true,
  checkWords: () => true,
}

export const MOCK_ADD_HINT_CONTROLLER_DATA: IAddHintControllerExecute = {
  isActive: true,
  text: 'Hello',
  words: ['hello', 'world'],
}

export const MOCK_ADD_HINT_CONTROLLER_REPOSITORY: IAddHintControllerRepository = {
  create: async () => ({ id: 'new_id' }),
  hasDuplicate: async () => false
}

export const MOCK_ADD_HINT_REPOSITORY_DATA: IAddHintControllerExecute = {
  isActive: true,
  text: 'Hello',
}