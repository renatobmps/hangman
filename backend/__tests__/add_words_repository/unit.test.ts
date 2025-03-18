import type IDatabase from "src/interfaces/database.type.ts";
import { beforeEach, describe, it } from "node:test";
import { deepEqual } from "node:assert";
import {
  ADD_WORD_CREATE_DATA,
  ADD_WORD_CREATE_DATA_REQUIRED,
  ADD_WORD_CREATE_DATA_WITHOUT_ACTIVE,
  ADD_WORD_CREATE_DATA_WITHOUT_DESC,
} from "./__dto__.ts";
import { databaseMock } from "./__mock__.ts";
import AddWordsRepository from "../../src/repositories/add_words.repository.ts";

beforeEach(async () => {
  databaseMock.word.create.mock.resetCalls();
  databaseMock.$disconnect.mock.resetCalls();
})

describe('AddWordsRepository unit', () => {
  const repository = new AddWordsRepository(
    databaseMock as unknown as IDatabase
  );

  it('should to run word create', async () => {
    await repository.execute(ADD_WORD_CREATE_DATA)

    deepEqual(
      databaseMock.word.create.mock.callCount(), 1
    )
    deepEqual(
      databaseMock.word.create.mock.calls[0].arguments.at(0),
      { data: ADD_WORD_CREATE_DATA }
    )
  })

  it('should to disconnect', async () => {
    await repository.execute(
      ADD_WORD_CREATE_DATA
    )

    deepEqual(
      databaseMock.$disconnect.mock.callCount(), 1
    )
  })

  it('should to create without description', async () => {
    await repository.execute(
      ADD_WORD_CREATE_DATA_WITHOUT_DESC
    )

    deepEqual(
      databaseMock.word.create.mock.callCount(), 1
    )
    deepEqual(
      databaseMock.word.create.mock.calls[0].arguments.at(0),
      { data: ADD_WORD_CREATE_DATA_WITHOUT_DESC }
    )
  })

  it('should to create without activated', async () => {
    await repository.execute(
      ADD_WORD_CREATE_DATA_WITHOUT_ACTIVE
    )

    deepEqual(
      databaseMock.word.create.mock.callCount(), 1
    )
    deepEqual(
      databaseMock.word.create.mock.calls[0].arguments.at(0),
      { data: ADD_WORD_CREATE_DATA_WITHOUT_ACTIVE }
    )
  })

  it('should to create with only required data', async () => {
    await repository.execute(
      ADD_WORD_CREATE_DATA_REQUIRED
    )

    deepEqual(
      databaseMock.word.create.mock.callCount(), 1
    )
    deepEqual(
      databaseMock.word.create.mock.calls[0].arguments.at(0),
      { data: ADD_WORD_CREATE_DATA_REQUIRED }
    )
  })
})