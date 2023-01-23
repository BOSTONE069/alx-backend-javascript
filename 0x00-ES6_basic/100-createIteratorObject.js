export default function createIteratorObject(report) {
  // Get an array of all the department keys in the report object
  const departments = Object.keys(report.allEmployees);
  // Set the starting department and employee index
  let currentDepartment = 0;
  let currentEmployee = 0;

  // Return an object with a next method
  return {
    next() {
      // If all departments have been iterated over, return done as true
      if (currentDepartment >= departments.length) {
        return {
          done: true
        }
      }

      // Get the current department and employee
      const department = departments[currentDepartment];
      const employee = report.allEmployees[department][currentEmployee];

      // If all employees in the current department have been iterated over
      // move to the next department and reset the employee index
      if (currentEmployee >= report.allEmployees[department].length - 1) {
        currentDepartment++;
        currentEmployee = 0;
      } else {
        currentEmployee++;
      }

      // Return the current department and employee and done as false
      return {
        value: {
          department,
          employee
        },
        done: false
      }
    }
  }
}
