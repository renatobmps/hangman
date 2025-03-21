export default class InvalidPasswordException extends Error {
  constructor(message: string = "Unexpected InvalidPasswordException") {
    super(message);
    this.name = "InvalidPasswordException";
  }
}
