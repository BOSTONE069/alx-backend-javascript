export default function iterateThroughObject(reportWithIterator) {
  let employees = "";

  // Use the iterator object to iterate through the report
  let employee = reportWithIterator.next();
  while (!employee.done) {
    // Add the current employee to the employees string
    employees += employee.value.employee + " | ";
    employee = reportWithIterator.next();
  }

  // remove the last | and space from the string
  employees = employees.slice(0, -3);

  return employees;
}
