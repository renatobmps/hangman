export default class UsernameHelper {
  private _username: string;

  constructor(username: string) {
    this._username = username;
  }

  public check(): boolean {
    return !!this._username.match(/^[a-z0-9_@]+$/);
  }

  public convert(): string {
    return this.removeAccents(
      this._username
        .toLowerCase()
        .replace(/\s{1,}/g, ' ')
        .trim()
        .replace(/\s/g, '_')
    )
  }

  private removeAccents(word: string = "") {
    return word
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
}
