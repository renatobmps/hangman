import type IRepository from "../../../lib/repository.interfaces.ts";
import type { IAddHintControllerExecute, IAddHintControllerRepository } from "../add_hint.interfaces.ts";

export default class AddHintRepository implements IAddHintControllerRepository {
  private database: IRepository

  constructor(database: IRepository) {
    this.database = database;
  }

  async hasDuplicate(title: string): Promise<boolean> {
    const registry = await this.database.getHintByName(title);

    return !!registry;
  }
  async create(hint: IAddHintControllerExecute): Promise<{ id: string; }> {
    const newHint = await this.database.addHint(hint.text!, hint.isActive!);

    if (hint.words) {
      await Promise.all(hint.words.map(word => (
        this.database.addWordInHint(newHint.id, word)
      )));
    }

    return { id: newHint.id };
  }
}