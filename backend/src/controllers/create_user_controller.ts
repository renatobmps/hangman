import type ICreateUserEncryptService from "src/@types/create_user_encrypt_service.type";
import type ICreateUserRepository from "src/@types/create_user_repository.type";
import type ICreateUserValidation from "src/@types/create_user_validation.type";
import type ICreateUserController from "./@types/create_user_controller.type";
import type ICreateUserInput from "./@types/create_user_input.type";

export default class CreateUserController {
  private repository: ICreateUserRepository;
  private validation: ICreateUserValidation;
  private encryptService: ICreateUserEncryptService;

  constructor({
    repository,
    validation,
    encryptService,
  }: ICreateUserController) {
    this.repository = repository;
    this.validation = validation;
    this.encryptService = encryptService;
  }

  public async execute(user: ICreateUserInput) {
    if (!this.validation.validUsername(user.username)) {
      throw new Error('Invalid username');
    }

    if (!this.validation.validPassword(user.password)) {
      throw new Error('Invalid password');
    }

    const hasDuplicate = await this.repository.hasDuplicate(user.username, user.email);

    if (hasDuplicate) {
      throw new Error('User already exists');
    }

    const hashPwd = await this.encryptService.encryptPassword(user.password);

    const { id } = await this.repository.createUser(
      user.username,
      hashPwd,
      user.email
    );

    return { id }
  }
}