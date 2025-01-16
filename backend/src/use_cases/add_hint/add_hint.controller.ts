import type { IAddHintController, IAddHintControllerExecute, IAddHintControllerRepository, IAddHintControllerValidator } from "./add_hint.interfaces.ts";

export default class AddHintController {
  private validator: IAddHintControllerValidator;
  private repository: IAddHintControllerRepository

  constructor({ validator, repository }: IAddHintController) {
    this.validator = validator;
    this.repository = repository
  }

  public async execute(hint: IAddHintControllerExecute): Promise<{ id: string }> {
    {
      this.validator.checkTitle(hint.text);
      this.validator.checkActiveState(hint.isActive)
      if (hint.words) {
        this.validator.checkWords(hint.words)
      }
    }

    const hasDuplicate = await this.repository.hasDuplicate(hint.text!);

    if (hasDuplicate) throw new Error('Hint already exists');

    const { id } = await this.repository.create({
      isActive: hint.isActive,
      text: hint.text,
      ...(hint.words ? { words: hint.words } : {})
    })

    return { id }
  }
}