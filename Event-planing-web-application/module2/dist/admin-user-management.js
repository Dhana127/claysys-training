"use strict";
var userForm = document.getElementById('add-user-form');
var userTableBody = document.getElementById('user-table-body');
function loadUsers() {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser.username == (undefined || null)) {
        loggedInUser.username = loggedInUser.email;
    }
    // Check if loggedInUser exists and is not already in users
    if (loggedInUser) {
        var exists = users.some(function (user) { return user.email === loggedInUser.email; });
        if (!exists) {
            users.push(loggedInUser);
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
    userTableBody.innerHTML = '';
    users.forEach(function (user, index) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(user.username, "</td>\n      <td>").concat(user.email, "</td>\n      <td>").concat(user.role, "</td>\n      <td>\n        <button onclick=\"deleteUser(").concat(index, ")\">Delete</button>\n      </td>\n    ");
        userTableBody.appendChild(row);
    });
}
function deleteUser(index) {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
}
userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var newUser = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        role: document.getElementById('role').value
    };
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    userForm.reset();
    loadUsers();
});
window.onload = loadUsers;
