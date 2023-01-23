/**
 * It takes an object of employees and returns a new object with a property called allEmployees that is
 * a copy of the original object, and a method called getNumberOfDepartments that returns the number of
 * departments in the object
 * @param employeesList - an object that contains a list of employees grouped by department.
 * @returns An object with two properties: allEmployees and getNumberOfDepartments.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: {...employeesList},
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    }
  }
}
