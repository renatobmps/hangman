import type {
  IEncryptPasswordService,
  ICreateUserRepository,
} from "src/interfaces/create_user.type";
import { mock } from "node:test";

export const createUserService = {
  repository: {
    exec: mock.fn<ICreateUserRepository["exec"]>(() =>
      Promise.resolve({ id: "id_123" }),
    ),
    hasDuplicate: mock.fn<ICreateUserRepository["hasDuplicate"]>(() =>
      Promise.resolve(false),
    ),
  },
  encryptPasswordService: {
    exec: mock.fn<IEncryptPasswordService["exec"]>(() =>
      Promise.resolve("encryptedPassword"),
    ),
  },
};

export const repositoryWithDuplicate = {
  ...createUserService.repository,
  hasDuplicate: mock.fn<ICreateUserRepository["hasDuplicate"]>(async () => {
    return true;
  }),
};

export const databaseMock = {
  $disconnect: mock.fn(() => Promise.resolve()),
  user: {
    create: mock.fn(() => {
      return Promise.resolve({
        id: 'new_id'
      })
    })
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