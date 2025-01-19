import type { IGetWordsController, IGetWordsControllerRepository, IWord } from "./@types.ts";

export default class GetWordsController {
  private repository: IGetWordsControllerRepository;

  constructor(args: IGetWordsController) {
    this.repository = args.repository;
  }

  public async execute(): Promise<Array<IWord>> {
    return this.repository.getWords();
  }
}