import { db } from "../../lib/db.ts";
import GetHintsRepository from "./entities/repository.ts";
import GetHintsController from "./get_hints.controller.ts";
import type { IGetAllHintsRes } from "./get_hints.interfaces.ts";

const getHints = async (): Promise<Array<IGetAllHintsRes>> => {
  const controller = new GetHintsController(
    new GetHintsRepository(
      db()
    )
  )

  return controller.execute();
}

export default getHints;
