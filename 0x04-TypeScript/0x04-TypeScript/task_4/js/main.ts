/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subjects.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />

export const cpp = Subjects.Cpp;
export const java = Subjects.JavaClass;
export const react = Subjects.ReactClass;

export const cTeacher: Subjects.Teacher = {
  firstName: "Doe",
  lastName: 'John',
  experienceTeachingC: 10,
}

const cSubject = new cpp();
console.log('C++');
console.log(cSubject.setTeacher(cTeacher));
console.log(cSubject.getRequirements());
console.log(cSubject.getAvailableTeacher());

const javaSubject = new java();
console.log('Java');
console.log(javaSubject.setTeacher(cTeacher));
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

const reactSubject = new react();
console.log('React');
console.log(reactSubject.setTeacher(cTeacher));
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());
