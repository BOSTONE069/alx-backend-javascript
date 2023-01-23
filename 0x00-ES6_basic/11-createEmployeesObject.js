/**
 * It takes a department name and an array of employees and returns an object with the department name
 * as the key and the array of employees as the value
 * @param departmentName - a string
 * @param employees - [
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees
  }
}
