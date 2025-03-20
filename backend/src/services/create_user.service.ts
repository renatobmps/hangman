import type {
  IEncryptPasswordService,
  ICreateUserRepository,
  ICreateUserValidation,
  ICreateUserService,
  ICreateUserInput,
} from "src/interfaces/create_user.type";
import InvalidPasswordException from "../exceptions/invalid_password_exception.ts";
import InvalidUsernameException from "../exceptions/invalid_username_exception.ts";
import UserAlreadyExistsException from "../exceptions/user_already_exists_exception.ts";
import User from "../models/user.ts";

export default class CreateUserService {
  private repository: ICreateUserRepository;
  private validation: ICreateUserValidation;
  private encryptService: IEncryptPasswordService;

  constructor({ repository, validation, encryptService }: ICreateUserService) {
    this.repository = repository;
    this.validation = validation;
    this.encryptService = encryptService;
  }

  public async execute(user: ICreateUserInput) {
    if (!this.validation.validUsername(user.username)) {
      throw new InvalidUsernameException("Invalid username");
    }

    if (!this.validation.validPassword(user.password)) {
      throw new InvalidPasswordException("Invalid password");
    }

    const userModel = new User(user);

    const hasDuplicate = await this.repository.hasDuplicate(userModel);

    if (hasDuplicate) {
      throw new UserAlreadyExistsException("User already exists");
    }

    userModel.password = await this.encryptService.exec(userModel.password);

    const { id } = await this.repository.exec(userModel);

    return { id };
  }
}
