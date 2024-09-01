const form = document.querySelector("formContainer"),
      emailField = form.querySelector("#email"),
      passwordField = form.querySelector("#password");

// Dummy user credentials (Replace these with actual sign-up data or store/retrieve from a database in a real application)
const storedEmail = "user@example.com";
const storedPassword = "Password@123";

// Email Validation
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        email.classList.add("invalid");
        return false;
    }
    emailField.classList.remove("invalid");
    return true;
}

// Password Validation
function validatePassword() {
    const passPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

    if (!password.value.match(passPattern)) {
        password.classList.add("invalid");
        return false;
    }
    password.classList.remove("invalid");
    return true;
}

// Login Validation
function validateLogin() {
    if (email.value === storedEmail && password.value === storedPassword) {
        console.log("Login successful!");
        // Redirect or show a success message
        location.href = "homepage.html"; // Example redirect after successful login
    } else {
        console.log("Login failed! Invalid email or password.");
        alert("Invalid email or password. Please try again.");
    }
}

// Form Submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isEmailValid = checkEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        validateLogin();
    }
});