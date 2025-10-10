import type {
  IGetWordsController,
  IGetWordsControllerExecRes,
  IGetWordsControllerRepository,
} from "src/controllers/@types/get_words_controller_repository.type.ts";

export default class GetWordsController {
  private repository: IGetWordsControllerRepository;

  constructor(args: IGetWordsController) {
    this.repository = args.repository;
  }

  public async exec(): Promise<IGetWordsControllerExecRes> {
    if (!this.repository.getAllWords) {
      throw new Error("missing getAllWords implementation");
    }

    if (!this.repository.getHintByWord) {
      throw new Error("missing getHintByWord implementation");
    }

    const words = await this.repository.getAllWords();

    const hints = await Promise.all(
      words.map((word) => {
        return this.repository.getHintByWord?.(word?.id!);
      }),
    );

    return words.map((word, i) => ({
      id: word?.id,
      text: word?.text,
      hints: hints[i]?.map((hint) => ({
        text: hint.id_hint.text,
      })),
    }));
  }
}
