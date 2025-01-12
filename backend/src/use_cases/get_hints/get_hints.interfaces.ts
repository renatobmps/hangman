export interface IGetAllHintsRes {
  id?: string,
  text?: string,
  is_activated?: boolean,
  total_words?: number,
  words?: Array<{
    id?: string,
    text?: string,
    description?: string | null,
    is_activated?: boolean,
  }>;
}

export interface IGetHintsRepository {
  getAllHints(): Promise<Array<IGetAllHintsRes>>
}

interface IHintFindManyDbRes {
  id?: string,
  text?: string,
  is_activated?: boolean,
  HintsWords?: Array<{
    word_id?: string,
    id_word?: {
      text?: string,
      description?: string | null,
      is_activated?: boolean,
    }
  }>
}

interface IWordFindManyDbRes {
  id?: string,
  text?: string,
  description?: string | null,
  is_activated?: boolean
}

export interface IDatabase {
  hint: {
    findMany(args: {
      include: { HintsWords: { include: { id_word: true } } },
    }): Promise<Array<IHintFindManyDbRes>>;
  }
  word: {
    findMany(args: {
      where: {
        HintsWords: {
          none: {}
        }
      }
    }): Promise<Array<IWordFindManyDbRes>>
  }
}

export interface IGetHintsRequest {
  getHints: Array<{
    id?: string,
    is_activated?: boolean,
    total_words?: number,
    words?: Array<unknown>,
  }>
}