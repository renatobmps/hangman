export default class InvalidUsernameException extends Error {
  constructor(message: string = "Unexpected InvalidUsernameException") {
    super(message);
    this.name = "InvalidUsernameException";
  }
}
