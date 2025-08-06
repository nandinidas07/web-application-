const form = document.getElementById("employeeForm");
const message = document.getElementById("message");
const employeeList = document.getElementById("employeeList");
let employees = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const address = document.getElementById("address").value.trim();
  const department = document.getElementById("department").value.trim();
  const salary = document.getElementById("salary").value.trim();
  const maritalStatus = document.getElementById("maritalStatus").value;
  const profession = document.getElementById("profession").value.trim();
  const profilePic = document.getElementById("profilePic").value.trim();

  if (!name || !age || !address || !department || !salary || !maritalStatus || !profession || !profilePic) {
    showMessage("Please fill in all fields!", "red");
    return;
  }

  const employee = { name, age, address, department, salary, maritalStatus, profession, profilePic };
  employees.push(employee);
  form.reset();
  showMessage("Employee added successfully!", "green");
  renderEmployees();
});

function renderEmployees() {
  employeeList.innerHTML = "";
  employees.forEach((emp, index) => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <img src="${emp.profilePic}" alt="${emp.name}" />
      <h3>${emp.name}</h3>
      <p>Age: ${emp.age}</p>
      <p>Address: ${emp.address}</p>
      <p>Department: ${emp.department}</p>
      <p>Salary: ₹${emp.salary}</p>
      <p>Status: ${emp.maritalStatus}</p>
      <p>Profession: ${emp.profession}</p>
      <button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button>
    `;
    employeeList.appendChild(card);
  });
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  renderEmployees();
  showMessage("Employee deleted.", "orange");
}

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
  setTimeout(() => message.textContent = "", 3000);
}
