const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailInput = document.getElementById("email-input")
const passwordInput = document.getElementById("password-input")
const submitBtn = document.getElementById("submit-btn")

// EMAIL - VALID, INVALID - SELF STUDY..

function formValidator() {
    const email = emailInput.value
    const password = passwordInput.value

    const isEmailValid = emailPattern.test(email);
    const isPasswordValid = passwordPattern.test(password);

    if (isEmailValid && isPasswordValid) {
        alert("email and password are valid !")
    } else if (isEmailValid) {
        alert("password not valid !");
    } else if (isPasswordValid) {
        alert("email not valid !")
    } else {
        alert("both are not valid !");
    }
}

submitBtn.addEventListener("click", formValidator)
