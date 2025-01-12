import type { IDatabase, IGetAllHintsRes, IGetHintsRepository } from "../get_hints.interfaces.ts";

export default class GetHintsRepository implements IGetHintsRepository {
  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  async getAllHints(): Promise<Array<IGetAllHintsRes>> {
    const hints = await this.database.hint.findMany({
      include: { HintsWords: { include: { id_word: true } } }
    });

    return hints.map(hint => ({
      id: hint.id,
      text: hint.text,
      is_activated: hint.is_activated,
      total_words: hint.HintsWords?.length,
      words: hint.HintsWords?.map(word => ({
        id: word.word_id,
        text: word.id_word?.text,
        description: word.id_word?.description,
        is_activated: word.id_word?.is_activated,
      }))
    }))
  }
}
