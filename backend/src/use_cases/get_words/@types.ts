export interface IWord {
  id?: string;
  text?: string;
  hints?: Array<{ text?: string }>;
}

export interface IGetWordsControllerRepository {
  getWords(): Promise<Array<IWord>>;
}

export interface IGetWordsController {
  repository: IGetWordsControllerRepository;
}
