export default function createIteratorObject(report) {
  const emp = [];
  /* eslint-disable no-unused-vars */
  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employe of employees) {
      emp.push(employe);
    }
  }
  /* eslint-enable no-unused-vars */

  return emp;
}
