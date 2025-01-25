import type ICreateUserEncryptService from "src/@types/create_user_encrypt_service.type";
import type ICreateUserRepository from "src/@types/create_user_repository.type";
import type ICreateUserValidation from "src/@types/create_user_validation.type";

export default interface ICreateUserController {
  repository: ICreateUserRepository;
  validation: ICreateUserValidation;
  encryptService: ICreateUserEncryptService;
}
