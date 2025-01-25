import { PrismaClient } from "@prisma/client";
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

    {
      const myPrisma = new PrismaClient();
      const [
        dbHints,
        dbWords,
        dbRelation,
      ] = await Promise.all([
        myPrisma.$executeRaw`SELECT h.* FROM public."Hint" AS h`,
        myPrisma.$executeRaw`SELECT w.* FROM public."Word" AS w`,
        myPrisma.$executeRaw`SELECT hw.* FROM public."HintsWords" AS hw`,
      ])
      console.log('\n\n\n\n\n\n')
      console.log({
        dbHints,
        dbWords,
        dbRelation,
      })
      console.log('\n\n\n\n\n\n')
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