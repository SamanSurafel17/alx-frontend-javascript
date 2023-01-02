export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const id = students.map((element) => element.id);
  const sum = id.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
}
