import { mock } from "node:test";

export const databaseMock = {
  $disconnect: mock.fn(() => Promise.resolve()),
  user: {
    create: mock.fn(() => Promise.resolve({
      id: 'new_id'
    }))
  },
};

export const databaseWithDuplicate = {
  ...databaseMock,
  user: {
    ...databaseMock.user,
    findFirst: mock.fn(() => Promise.resolve(true))
  }
}

export const databaseWithoutDuplicate = {
  ...databaseMock,
  user: {
    ...databaseMock.user,
    findFirst: mock.fn(() => Promise.resolve(false))
  }
}