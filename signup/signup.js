const form = document.querySelector("formContainer"),
emailField = form.querySelector("#email"),
passwordField = form.querySelector("#password"),
repeatPasswordField = form.querySelector("#repeatPassword");

// Email Validation
function checkEmail() {
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (!email.value.match(emailPattern)) {
    email.classList.add("invalid");
    return false;
}
email.classList.remove("invalid");
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

// Repeat Password Validation
function validateRepeatPassword() {
if (password.value !== repeatPassword.value || repeatPassword.value === "") {
    repeatPassword.classList.add("invalid");
    return false;
}
repeatPassword.classList.remove("invalid");
return true;
}

// Form Submission
form.addEventListener("submit", (e) => {
e.preventDefault();

const isEmailValid = checkEmail();
const isPasswordValid = validatePassword();
const isRepeatPasswordValid = validateRepeatPassword();

if (isEmailValid && isPasswordValid && isRepeatPasswordValid) {
    console.log("Form submitted successfully!");
    // Example: location.href = form.getAttribute("action");
}
});

