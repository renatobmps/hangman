import IRepository from "src/lib/@types/repository.type";

export default interface IGetWordsRepository {
  database: Partial<IRepository>;
}
