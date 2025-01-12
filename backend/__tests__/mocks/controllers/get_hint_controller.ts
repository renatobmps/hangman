import type { IGetAllHintsRes, IGetHintsRepository } from "../../../src/use_cases/get_hints/get_hints.interfaces.ts";

export const MOCK_GET_HINTS_CONTROLLER_REPOSITORY: IGetHintsRepository = {
  getAllHints: async () => ([{
    id: '1234',
    is_activated: true,
    text: 'Some hint',
    words: [
      { id: '1234', text: 'Some word', description: 'Description 1', is_activated: true },
      { id: '2345', text: 'Some word', description: 'Description 2', is_activated: false },
    ]
  }])
}

export class GetHintsRepositoryIM implements IGetHintsRepository {
  private database: Array<IGetAllHintsRes> = [];

  async getAllHints(): Promise<Array<IGetAllHintsRes>> {
    this.database = await MOCK_GET_HINTS_CONTROLLER_REPOSITORY.getAllHints();

    return this.database;
  }
}
