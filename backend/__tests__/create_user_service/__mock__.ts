import type { ICreateUserEncryptService, ICreateUserRepository, ICreateUserValidation, ICreateUserInput } from "src/interfaces/create_user.type"
import { mock } from "node:test"

export const createUserService = {
  repository: {
    createUser: mock.fn<ICreateUserRepository['createUser']>(
      () => Promise.resolve({ id: 'id_123' })
    ),
    hasDuplicate: mock.fn<ICreateUserRepository['hasDuplicate']>(
      () => Promise.resolve(false)
    ),
  },
  validation: {
    validPassword: mock.fn<ICreateUserValidation['validPassword']>(
      () => true
    ),
    validUsername: mock.fn<ICreateUserValidation['validUsername']>(
      () => true
    ),
  },
  encryptService: {
    encryptPassword: mock.fn<ICreateUserEncryptService['encryptPassword']>(
      () => Promise.resolve('encryptedPassword'),
    )
  }
}

export const validationUsernameError = {
  ...createUserService.validation,
  validUsername: mock.fn<ICreateUserValidation['validUsername']>(
    () => { return false }
  ),
}

export const validationPwdError = {
  ...createUserService.validation,
  validPassword: mock.fn<ICreateUserValidation['validPassword']>(
    () => { return false }
  ),
}

export const repositoryWithDuplicate = {
  ...createUserService.repository,
  hasDuplicate: mock.fn<ICreateUserRepository['hasDuplicate']>(
    async () => { return true }
  )
}
