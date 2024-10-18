export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }
  // Getter

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Getter

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  // Getter

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
