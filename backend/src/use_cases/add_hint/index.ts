import prismaRepository from "../../lib/prisma_repository.ts"
import AddHintController from "./add_hint.controller.ts"
import AddHintRepository from "./entities/add_hint_repository.ts"
import AddHintValidator from "./entities/add_hint_validator.ts"
import type { IAddHintControllerExecute } from "./add_hint.interfaces.ts"

const addHint = (hint: IAddHintControllerExecute) => {
  let copyOfHints = { ...hint };

  const addHint = new AddHintController({
    repository: new AddHintRepository(prismaRepository()),
    validator: new AddHintValidator(),
  })

  if (copyOfHints.words) {
    copyOfHints.words = Array.isArray(copyOfHints.words) ? copyOfHints.words : [copyOfHints.words]
  }

  return addHint.execute(copyOfHints);
}

export default addHint