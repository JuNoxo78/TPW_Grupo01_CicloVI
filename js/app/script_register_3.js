const volverOp3 = document.getElementById("volverOp3");

volverOp3.addEventListener("click", () => {
    registerForm3.style.display = "none"
    registerHeader3.style.display = "none"
    registerForm2.style.display = "flex"
    registerHeader2.style.display = "flex"
})

const emailRegisterInput = document.getElementById("email-register-input");

const errorMessageEmailRegisterInput = document.getElementById("error-message-email-register-input");

function verificarCamposRegisterTwo() {
    const emailValido = emailRegisterInput.validity.valid;

    if (emailRegisterInput.value.length > 0 & emailValido) {
        errorMessageEmailRegisterInput.style.display = "none";
        emailRegisterInput.style.boxShadow = "0 0 0 0.2px black"
    } else if (emailRegisterInput.value.length > 0) {
        errorMessageEmailRegisterInput.textContent = "¡Revisa bien! Ingresa un correo válido."
        errorMessageEmailRegisterInput.style.display = "inline";
        emailRegisterInput.style.boxShadow = "0 0 0 0.4px red"
    } else if (emailRegisterInput.value.length == 0) {
        errorMessageEmailRegisterInput.textContent = "Por favor, ingresa tu correo electrónico."
    }
}

emailRegisterInput.addEventListener('input', verificarCamposRegisterTwo);

const departamentoSelectInput = document.getElementById("departamento-select-input");
const continueButton2 = document.getElementById("continue-button-2");

departamentoSelectInput.addEventListener("change", () => {
    if (departamentoSelectInput.value == 0) {
        departamentoSelectInput.style.color = "#414141";
    } else {
        departamentoSelectInput.style.color = "black";
    }
})

const alterPassword1 = document.getElementById("alter-password-1");
const passwordRegisterInput = document.getElementById("password-register-input");

alterPassword1.addEventListener('click', () => {
    const isPassword = passwordRegisterInput.type === 'password';
    passwordRegisterInput.type = isPassword ? 'text' : 'password';

    alterPassword1.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
});

const alterPassword2 = document.getElementById("alter-password-2");
const passwordConfirmInput = document.getElementById("password-confirm-input");

alterPassword2.addEventListener('click', () => {
    const isPassword = passwordConfirmInput.type === 'password';
    passwordConfirmInput.type = isPassword ? 'text' : 'password';

    alterPassword2.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
});