import {
  // Game,
  // GameLetter,
  Hint,
  HintsWords,
  // User,
  Word
} from '@prisma/client';

export interface IDatabaseGateway {
  addHint(hint_text: string, hint_active: boolean): Promise<Hint>;
  addWord(word: string, description?: string, is_activated?: boolean): Promise<Word>,
  addWordInHint(hind_id: string, word_id: string): Promise<HintsWords>;
  clearDatabase(): Promise<void>;
  getHintByName(name: string): Promise<Hint | null>;
}
