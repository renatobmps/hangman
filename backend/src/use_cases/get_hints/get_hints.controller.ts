import type { IGetHintsRepository } from "./get_hints.interfaces.ts"

export default class GetHintsController {
  private repository: IGetHintsRepository;

  constructor(repository: IGetHintsRepository) {
    this.repository = repository;
  }

  public async execute() {
    return this.repository.getAllHints();
  }
}
