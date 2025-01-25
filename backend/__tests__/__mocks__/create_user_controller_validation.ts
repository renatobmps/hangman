import { mock } from "node:test"
import type ICreateUserEncryptService from "src/@types/create_user_encrypt_service.type"
import type ICreateUserRepository from "src/@types/create_user_repository.type"
import type ICreateUserValidation from "src/@types/create_user_validation.type"
import type ICreateUserInput from "src/controllers/@types/create_user_input.type"

export const createUserController = {
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

export const MOCK_CREATE_USER_CONTROLLER_USER_DATA: ICreateUserInput = {
  password: 'P@ssw0rd',
  username: 'username',
  email: 'email',
}

export const INVALID_USER_ARRANGE = "invalid username";

export const validationUsernameError = {
  ...createUserController.validation,
  validUsername: mock.fn<ICreateUserValidation['validUsername']>(
    () => { throw new Error(INVALID_USER_ARRANGE) }
  ),
}

export const INVALID_PWD_ARRANGE = "invalid password";

export const validationPwdError = {
  ...createUserController.validation,
  validPassword: mock.fn<ICreateUserValidation['validPassword']>(
    () => { throw new Error(INVALID_PWD_ARRANGE) }
  ),
}

export const DUPLICATED_USER_ARRANGE = 'duplicated user'

export const repositoryWithDuplicate = {
  ...createUserController.repository,
  hasDuplicate: mock.fn<ICreateUserRepository['hasDuplicate']>(
    () => { throw new Error(DUPLICATED_USER_ARRANGE) }
  )
}
