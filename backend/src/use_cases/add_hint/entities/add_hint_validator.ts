import type { IAddHintControllerValidator } from "../add_hint.interfaces.ts";

export default class AddHintValidator implements IAddHintControllerValidator {
  checkWords(words?: string[]): true {
    if (!words) throw new Error('List of words has invalid format');
    if (!Array.isArray(words)) throw new Error('Words must be an array of strings');
    if (words.every(word => typeof word !== 'string')) throw new Error('Words must be an array of strings');

    return true;
  }
  checkActiveState(state: boolean): true {
    if (typeof state === 'undefined') throw new Error('State is required');
    if (typeof state !== 'boolean') throw new Error('Invalid State');

    return true;
  }
  checkTitle(title?: string): true {
    if (typeof title === 'undefined') throw new Error('Title is required');
    if (typeof title !== 'string') throw new Error('Invalid title');
    if (!title) throw new Error('Title cannot be empty')

    return true;
  }
}