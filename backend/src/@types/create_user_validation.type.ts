export default interface ICreateUserValidation {
  validUsername(username: string): boolean;
  validPassword(password: string): boolean;
}
