export default class UserAlreadyExistsException extends Error {
  constructor(message: string = "Unexpected UserAlreadyExistsException") {
    super(message);
    this.name = "UserAlreadyExistsException";
  }
}
