export default class Currency {
  constructor(code, string) {
    this.code = code;
    this.string = string;
  }

  // Getter
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  // Getter
  get string() {
    return this._string;
  }

  set string(string) {
    this._string = string;
  }

  displayFullCurrency() {
    return `${this.string} (${this.code})`;
  }
}
