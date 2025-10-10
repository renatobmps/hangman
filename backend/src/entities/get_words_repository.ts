import GetWordsController from "../../src/controllers/get_words.controller.ts";
import type { IGetWordsControllerRepository } from "../controllers/@types/get_words_controller_repository.type.ts";
import type IGetWordsRepository from "./@types/get_words_repository.type";

/** @deprecated use {@link GetWordsController} */
export default class GetWordsRepository {
  private database;

  constructor({ database }: IGetWordsRepository) {
    this.database = database;
  }

  async getWords() {
    return [];
  }
}
