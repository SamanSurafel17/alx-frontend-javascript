export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  const filtered = students.filter((element) => element.location === city);
  return filtered;
}
