import type { IDatabase } from "../../../src/entities/create_user_repository.ts"

export const MOCK_CREATE_USER_REPOSITORY_USER_DATA = {
  username: 'new_user',
  email: 'email@test.com',
  password: 'password'
}

type DatabaseOperation = 'without_duplicate' | 'with_duplicate';

export const MOCK_DB: Record<DatabaseOperation, IDatabase> = {
  without_duplicate: {
    user: {
      findFirst: async () => {
        return null;
      },
      create: async () => {
        return { id: '1' }
      }
    }
  },
  with_duplicate: {
    user: {
      findFirst: async () => {
        return true;
      },
      create: async () => {
        throw new Error('duplicate user')
      }
    }
  }
}