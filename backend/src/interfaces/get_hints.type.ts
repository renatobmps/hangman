import type Hint from "src/models/hint";

export interface IGetHintsRepository {
  getAllHints(): Promise<Array<Hint>>;
}
