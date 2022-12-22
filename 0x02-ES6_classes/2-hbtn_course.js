export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('name must be a string');
    if (typeof length !== 'number') throw TypeError('length must be a number');
    if (!Array.isArray(students)) throw TypeError('students must be an array of strings');
    students.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('students must be an array of strings');
    });

    this._students = students;
    this._length = length;
    this._name = name;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw TypeError('length must be a number');
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) throw TypeError('students must be an array of strings');
    newStudents.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('students must be an array of strings');
    });

    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
