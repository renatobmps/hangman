import { db } from "../../lib/db.ts";
import GetHintsRepository from "./entities/repository.ts";
import GetHintsController from "./get_hints.controller.ts";

const getHints = async () => {
  const controller = new GetHintsController(
    new GetHintsRepository(
      db()
    )
  )

  return controller.execute();
}

export default getHints;
