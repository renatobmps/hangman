import type IRepository from "../../../lib/repository.interfaces";
import type { IGetWordsControllerRepository, IWord } from "../@types";

export default class GetWordsRepository implements IGetWordsControllerRepository {
  private database: IRepository;

  constructor(database: IRepository) {
    this.database = database;
  }

  async getWords(): Promise<Array<IWord>> {
    const words = await this.database.getAllWords();
    const hints = await Promise.all(words.map(word => {
      return this.database.getHintByWord(word?.id!)
    }));

    return words.map((word, i) => ({
      id: word?.id,
      text: word?.text ?? '',
      hints: hints[i]?.map(hint => ({
        text: hint.id_hint.text,
      }))
    }))
  }
}