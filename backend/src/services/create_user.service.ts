import type {
  IEncryptPasswordService,
  ICreateUserRepository,
  IUserValidationService,
  ICreateUserService,
  ICreateUserInput,
} from "src/interfaces/create_user.type";
import InvalidPasswordException from "../exceptions/invalid_password_exception.ts";
import InvalidUsernameException from "../exceptions/invalid_username_exception.ts";
import UserAlreadyExistsException from "../exceptions/user_already_exists_exception.ts";
import User from "../models/user.ts";

export default class CreateUserService {
  private repository: ICreateUserRepository;
  private validation: IUserValidationService;
  private encryptService: IEncryptPasswordService;

  constructor({ repository, userValidationService, encryptPasswordService }: ICreateUserService) {
    this.repository = repository;
    this.validation = userValidationService;
    this.encryptService = encryptPasswordService;
  }

  public async execute(user: ICreateUserInput) {
    const userModel = new User(user);

    if (!this.validation.validUsername(userModel)) {
      throw new InvalidUsernameException("Invalid username");
    }

    if (!this.validation.validPassword(userModel)) {
      throw new InvalidPasswordException("Invalid password");
    }

    const hasDuplicate = await this.repository.hasDuplicate(userModel);

    if (hasDuplicate) {
      throw new UserAlreadyExistsException("User already exists");
    }

    userModel.password = await this.encryptService.exec(userModel.password);

    const { id } = await this.repository.exec(userModel);

    return { id };
  }
}
