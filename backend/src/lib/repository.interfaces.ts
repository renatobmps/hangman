import {
  // Game,
  // GameLetter,
  Hint,
  HintsWords,
  // User,
  Word
} from '@prisma/client';

export default interface IRepository {
  addHint(hint_text: string, hint_active: boolean): Promise<Hint>;
  addWord(word: string, description?: string, is_activated?: boolean): Promise<Word>,
  addWordInHint(hind_id: string, word_id: string): Promise<HintsWords>;
  clearDatabase(): Promise<void>;
  getHintByName(name: string): Promise<Hint | null>;
  getHintByWord(word_id: string): Promise<Array<HintsWords & { id_hint: Hint }> | null>;
  getAllWords(): Promise<Array<Word | null>>;
}
