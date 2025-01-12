import type { ICreateUserRepository, ICreateUserController, ICreateUserValidation, ICreateUserEncryptService } from "src/interfaces/create_user";

export default class CreateUserController {
  private repository: ICreateUserRepository;
  private validation: ICreateUserValidation;
  private encryptService: ICreateUserEncryptService;

  constructor(
    repository: ICreateUserRepository,
    validation: ICreateUserValidation,
    encryptService: ICreateUserEncryptService,
  ) {
    this.repository = repository;
    this.validation = validation;
    this.encryptService = encryptService;
  }

  public async execute(user: ICreateUserController) {
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