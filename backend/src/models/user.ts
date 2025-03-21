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

  constructor(props: IUserProps) {

    this.username = props.username;
    this.password = props.password;
    if (props?.email) this.email = props.email;
  }

  set username(value: string) {
    this._props.username = new UsernameHelper(value).convert();
  }

  get username() {
    return this._props.username;
  }

  set password(value: string) {
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
