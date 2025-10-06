const userForm = document.getElementById('add-user-form');
const userTableBody = document.getElementById('user-table-body');

function loadUsers() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  userTableBody.innerHTML = '';

  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>
        <button onclick="deleteUser(${index})">Delete</button>
      </td>
    `;
    userTableBody.appendChild(row);
  });
}

function deleteUser(index) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(users));
  loadUsers();
}

userForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const newUser = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    role: document.getElementById('role').value
  };

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  userForm.reset();
  loadUsers();
});

window.onload = loadUsers;
