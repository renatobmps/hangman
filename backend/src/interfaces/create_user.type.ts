import User from "../models/user.ts";

export interface IEncryptPasswordService {
  exec(password: string): Promise<string>;
}

export interface ICreateUserRepository {
  hasDuplicate(user: User): Promise<boolean>;
  exec(user: User): Promise<{ id: string }>;
}

export interface IUserValidationService {
  validUsername(user: User): boolean;
  validPassword(user: User): boolean;
}

export interface ICreateUserService {
  repository: ICreateUserRepository;
  userValidationService: IUserValidationService;
  encryptPasswordService: IEncryptPasswordService;
}

export interface ICreateUserInput {
  username: string;
  password: string;
  email?: string;
}
