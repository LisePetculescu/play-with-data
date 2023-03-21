"use-strict";

const harry = {
  firstName: "Harry",
  //   middleName: "James",
  lastName: "Potter",
};

const hermione = {
  firstName: "Hermione",
  //   middleName: "Jean",
  lastName: "Granger",
};

const ron = {
  firstName: "Ron",
  //   middleName: "Bilius",
  lastName: "Weasley",
};

console.log(harry);
console.log(hermione);
console.log(ron);

// console.log(harry.lastName);

// harry.firstName = "Potty";

// const chosenOne = harry;
// chosenOne.firstName = "(The chosen one)";

// console.log(harry);

function addStudent(student) {
  const newStudent = /*html*/ `
    <li> 
    ${student.firstName} ${student.middleName}, ${student.lastName}
    </li>`;

  document
    .querySelector("#students")
    .insertAdjacentHTML("beforeEnd", newStudent);
}

function showStudent(student) {
  document.querySelector("#firstName").textContent = student.firstName;
  document.querySelector("#middleName").textContent = student.middleName;
  document.querySelector("#lastName").textContent = student.lastName;
}

harry.middleName = "James";
ron.middleName = "Bilius";
hermione.middleName = "Jean";

// showStudent(ron);
addStudent(ron);
addStudent(harry);
addStudent(hermione);
