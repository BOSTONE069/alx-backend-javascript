export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Onyango",
  age: 22,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Otieno",
  age: 25,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.setAttribute("id", "student-table");

for (const student of studentsList) {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.innerHTML = student.firstName;
  const locationCell = row.insertCell();
  locationCell.innerHTML = student.location;
}

document.body.appendChild(table);
