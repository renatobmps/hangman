export default class UsernameHelper {
  private _username: string;

  constructor(username: string) {
    this._username = username;
  }

  public check(): boolean {
    return !!this._username.match(/^[a-z0-9_]+$/);
  }

  public convert(): string {
    return this._username
      .trim()
      .toLowerCase()
      .replace(/\s{2,}/g, ' ')
      .replace(/\s/g, '_')
  }
}
