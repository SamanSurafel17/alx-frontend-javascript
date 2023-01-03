export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const stGrade = newGrades.filter((std) => std.studentId === student.id);
      const grade = stGrade.length > 0 ? stGrade[0].grade : 'N/A';
      return { ...student, grade };
    });
}
