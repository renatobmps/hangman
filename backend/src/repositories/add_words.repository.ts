import type IDatabase from "src/interfaces/database.type";
import type IAddWordRepository from "../interfaces/add_words.type";
import type { IAddWordRepositoryExecute } from "../interfaces/add_words.type";
import type IWord from "src/lib/@types/word.type";

class AddWordsRepository implements IAddWordRepository {
  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  async execute(args: IAddWordRepositoryExecute): Promise<Partial<IWord>> {
    return this.database.word.create({
      data: args,
    }).finally(() => (
      this.database.$disconnect()
    ))
  }
}

export default AddWordsRepository
