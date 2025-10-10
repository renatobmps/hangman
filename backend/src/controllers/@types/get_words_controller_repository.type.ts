import type IWord from "src/lib/@types/word.type";
import type IHintsWords from "src/lib/@types/hints_words.type";
import type IHint from "src/lib/@types/hint.type";

export interface IGetWordsControllerRepository {
  getAllWords(): Promise<Array<IWord>>;
  getHintByWord(word_id: string): Promise<
    Array<
      IHintsWords & {
        id_hint: IHint;
      }
    >
  >;
}

export interface IGetWordsController {
  repository: IGetWordsControllerRepository;
}

export type IGetWordsControllerExecRes = Array<{
  id?: string;
  text?: string;
  hints?: Array<{ text?: string }>;
}>;
