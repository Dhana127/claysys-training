document.getElementById("submit-button").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const roleSelect = document.querySelector("select"); // grab the dropdown
    const role = roleSelect.value;

    if (!email || !password || !role) {
      alert("Please fill in all fields.");
      return;
    }

    // Store user info in localStorage
    const loggedInUser = {
      email,
      role
    };
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    // Redirect based on role
    if (role === "Admin") {
      window.location.href = "admin-user-management.html";
    } else {
      window.location.href = "dashboard.html";
    }
  });