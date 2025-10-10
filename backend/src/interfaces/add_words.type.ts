import type IWord from "src/lib/@types/word.type";

export interface IAddWordRepositoryExecute {
  text: string;
  description?: string;
  is_activated?: boolean;
}

export default interface IAddWordRepository {
  execute(args: IAddWordRepositoryExecute): Promise<Partial<IWord>>;
}
