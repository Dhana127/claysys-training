"use strict";
document.getElementById("submit-button").addEventListener("click", function () {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var roleSelect = document.querySelector("select"); // grab the dropdown
    var role = roleSelect.value;
    if (!email || !password || !role) {
        alert("Please fill in all fields.");
        return;
    }
    // Store user info in localStorage
    var loggedInUser = {
        email: email,
        password: password,
        role: role
    };
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    // Redirect based on role
    if (role === "Admin") {
        window.location.href = "admin-user-management.html";
    }
    else {
        window.location.href = "dashboard.html";
    }
});
