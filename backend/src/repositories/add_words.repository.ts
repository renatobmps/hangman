import type IDatabase from "src/interfaces/database.type";
import type IAddWordRepository from "./@types/add_words_repository.type";
import type { IAddWordRepositoryExecute } from "./@types/add_words_repository.type";
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
