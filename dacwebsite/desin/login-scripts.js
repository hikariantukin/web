function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the user exists in local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful!");
        // Redirect to the movie recommendation page or perform other actions
        window.location.href = "indexx.html";
    } else {
        alert("Login failed. Check your username and password.");
    }
}

function showCreateAccountForm() {
    document.querySelector('.login-form-container').style.display = 'none';
    document.querySelector('.create-account-form-container').style.display = 'block';
}

function showLoginForm() {
    document.querySelector('.create-account-form-container').style.display = 'none';
    document.querySelector('.login-form-container').style.display = 'block';
}

function createAccount() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Check if the username already exists
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = storedUsers.find(u => u.username === newUsername);

    if (existingUser) {
        alert("Username already exists. Please choose a different one.");
    } else {
        // Save the new user to local storage
        const newUser = { username: newUsername, password: newPassword };
        storedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));
        alert("Account created successfully!");
        // Redirect to the login page or perform other actions
        showLoginForm();
    }
}