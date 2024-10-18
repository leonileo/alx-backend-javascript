export default class Currency {
  constructor(code, string) {
    this.code = code;
    this.name = name;
  }

  // Getter
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  // Getter
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
