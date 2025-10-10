import { PrismaClient } from "@prisma/client";
import IAddHint from "./add_hint.type";
import IAddWordAtHint from "./add_word_at_hint.type";
import IClearDatabase from "../../repositories/@types/clear_database.type";
import IGetAllWords from "./get_all_words.type";
import IGetHintByName from "./get_hint_by_name.type";
import IGetHintByWord from "./get_hint_by_word.type";

export default interface IRepository {
  database: PrismaClient;
  addHint: IAddHint;
  addWordAtHint: IAddWordAtHint;
  clearDatabase: IClearDatabase;
  getAllWords: IGetAllWords;
  getHintByName: IGetHintByName;
  getHintByWord: IGetHintByWord;
}
