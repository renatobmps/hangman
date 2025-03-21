import InvalidUsernameException from "../exceptions/invalid_username_exception.ts";
import UsernameHelper from "../helpers/username.helper.ts";

interface IUserProps {
  username: string;
  password: string;
  email?: string;
}

export default class User {
  private _props: IUserProps = {
    username: '',
    password: '',
  }

  constructor(props: Omit<IUserProps, 'hash'>) {

    this.username = props.username;
    this.password = props.password;
    if (props?.email) this.email = props.email;
  }

  set username(value: string) {
    if (!value || typeof value !== "string") {
      throw new InvalidUsernameException("There is no username");
    }

    // if (value.includes(" ")) {
    //   throw new InvalidUsernameException("Invalid username format");
    // }

    // if (value.length <= 3) {
    //   throw new InvalidUsernameException("Username is too short");
    // }

    this._props.username = new UsernameHelper(value).convert();
  }

  get username() {
    return this._props.username;
  }

  set password(value: string) {
    if (!value || typeof value !== "string") {
      throw new Error("There is no password");
    }

    // if (/[A-Z]/.test(value) === false) {
    //   console.error("VALOR", value);
    //   throw new InvalidPasswordException("Password must contain at least one uppercase letter");
    // }

    // if (/[a-z]/.test(value) === false) {
    //   throw new InvalidPasswordException("Password must contain at least one lowercase letter");
    // }

    // if (/[0-9]/.test(value) === false) {
    //   throw new InvalidPasswordException("Password must contain at least one number");
    // }

    // if (/[^A-Za-z0-9\s]/.test(value) === false) {
    //   throw new InvalidPasswordException("Password must contain at least one special character");
    // }

    // if (value.length < 6) {
    //   throw new InvalidPasswordException("Password must be at least 6 characters");
    // }

    this._props.password = value;
  }

  get password() {
    return this._props.password;
  }

  set email(value: string | undefined) {
    this._props.email = value;
  }

  get email() {
    return this._props.email;
  }
}
