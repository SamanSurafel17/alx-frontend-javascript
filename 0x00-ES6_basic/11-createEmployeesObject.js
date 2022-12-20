export default function createEmployeesObject(departmentName, employees) {
  const newObj = {
    [departmentName]: [...employees],
  };
  return newObj;
}
