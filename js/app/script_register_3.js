////// Registro 3 - Contacto y Contraseña

// #region Verificación de campos

// #region email
const emailRegisterInput = document.getElementById("email-register-input");
const errorMessageEmailRegisterInput = document.getElementById("error-message-email-register-input");
let goodEmailRegister = false;

emailRegisterInput.addEventListener('input', verificarEmailRegisterInput);
emailRegisterInput.addEventListener('blur', verificarEmailRegisterInput);

function verificarEmailRegisterInput() {
    const emailValido = emailRegisterInput.validity.valid;

    if (emailRegisterInput.value.length > 0 & emailValido) {
        errorMessageEmailRegisterInput.style.display = "none";
        emailRegisterInput.style.boxShadow = "0 0 0 0.2px black"
        goodEmailRegister = true;
        verificarCamposRegisterTwo();
    } else if (emailRegisterInput.value.length > 0) {
        goodEmailRegister = false;
        verificarCamposRegisterTwo();
        errorMessageEmailRegisterInput.textContent = "¡Revisa bien! Ingresa un correo válido."
        errorMessageEmailRegisterInput.style.display = "inline";
        emailRegisterInput.style.boxShadow = "0 0 0 0.4px red"
    } else if (emailRegisterInput.value.length == 0) {
        goodEmailRegister = false;
        errorMessageEmailRegisterInput.textContent = "Por favor, ingresa tu correo electrónico."
        errorMessageEmailRegisterInput.style.display = "inline";
        emailRegisterInput.style.boxShadow = "0 0 0 0.4px red"
    }
}
// #endregion

// #region Número telefónico
const phoneNumberInput = document.getElementById("phone-number-input");
const errorMessagePhoneNumberInput = document.getElementById("error-message-phone-number-input");

phoneNumberInput.addEventListener('input', verificarPhoneNumberInput);
phoneNumberInput.addEventListener('blur', verificarPhoneNumberInput);
phoneNumberInput.addEventListener('keydown', verificarPhoneNumberInput);
let goodPhoneNumber = false;

function verificarPhoneNumberInput() {
    if (phoneNumberInput.value.length >= 9) {
        errorMessagePhoneNumberInput.style.display = "none"
        phoneNumberInput.style.boxShadow = "0 0 0 0.2px black"
        goodPhoneNumber = true;
        verificarCamposRegisterTwo();
    } else {
        errorMessagePhoneNumberInput.style.display = "inline"
        errorMessagePhoneNumberInput.textContent = "Mínimo 9 dígitos"
        phoneNumberInput.style.boxShadow = "0 0 0 0.4px red"
        goodPhoneNumber = false;
        verificarCamposRegisterTwo();
    }
}
// #endregion

// #region Contraseñas
const passwordRegisterInput = document.getElementById("password-register-input");
const alterPassword1 = document.getElementById("alter-password-1");
const errorMessagePasswordRegisterInput = document.getElementById("error-message-password-register-input")
const inputPasswordRegisterContainer = document.getElementById("input-password-register-container");
let inConfirmInput = false; //Para que se ejecute la verificación si se ha interactuado con password confirm
let goodRegisterPassword = false;

passwordRegisterInput.addEventListener('input', verificarPasswordRegisterInput);
passwordRegisterInput.addEventListener('blur', verificarPasswordRegisterInput);

function verificarPasswordRegisterInput() {
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordPattern.test(passwordRegisterInput.value)) {
        goodRegisterPassword = false;
        verificarCamposRegisterTwo();
        errorMessagePasswordRegisterInput.style.display = 'inline';
        inputPasswordRegisterContainer.style.boxShadow = "0 0 0 0.4px red"
        alterPassword1.style.color = "red"
        if (passwordRegisterInput.value.length == 0) {
            errorMessagePasswordRegisterInput.textContent = 'Debe ingresar una contraseña.';
        } else {
            errorMessagePasswordRegisterInput.textContent = 'Recuerda usar una contraseña segura.';
            if (inConfirmInput) verificarPasswordConfirmInput();
        }
    } else {
        goodRegisterPassword = true;
        verificarCamposRegisterTwo();
        errorMessagePasswordRegisterInput.style.display = 'none';
        inputPasswordRegisterContainer.style.boxShadow = "0 0 0 0.2px black"
        alterPassword1.style.color = "rgb(0, 118, 106, 0.75)"
        if (inConfirmInput) verificarPasswordConfirmInput();
    }
}

const alterPassword2 = document.getElementById("alter-password-2");
const passwordConfirmInput = document.getElementById("password-confirm-input");
const inputPasswordConfirmContainer = document.getElementById("input-password-confirm-container");
const errorMessagePasswordConfirmInput = document.getElementById("error-message-password-confirm-input")
let goodConfirmPassword = false;

passwordConfirmInput.addEventListener('input', verificarPasswordConfirmInput);
passwordConfirmInput.addEventListener('blur', verificarPasswordConfirmInput);

function verificarPasswordConfirmInput() {
    inConfirmInput = true;

    if (passwordRegisterInput.value == passwordConfirmInput.value && passwordConfirmInput.value.length != 0) {
        errorMessagePasswordConfirmInput.style.display = 'none';
        inputPasswordConfirmContainer.style.boxShadow = "0 0 0 0.2px black"
        alterPassword2.style.color = "rgb(0, 118, 106, 0.75)"
        goodConfirmPassword = true;
        verificarCamposRegisterTwo();
    } else {
        errorMessagePasswordConfirmInput.style.display = 'inline';
        inputPasswordConfirmContainer.style.boxShadow = "0 0 0 0.4px red"
        alterPassword2.style.color = "red"
        if (passwordConfirmInput.value.length == 0) {
            errorMessagePasswordConfirmInput.textContent = 'Ingrese de nuevo la contraseña.';
        } else {
            errorMessagePasswordConfirmInput.textContent = '¡Revisa bien! Las contraseñas deben coincidir.';
        }
        goodConfirmPassword = false;
        verificarCamposRegisterTwo();
    }
}

// #endregion

// Función principal
const distritoSelectInput = document.getElementById("distrito-select-input");

distritoSelectInput.addEventListener("change", () => {
    verificarCamposRegisterTwo();
    if (distritoSelectInput.value != 0) {
        distritoSelectInput.style.color = "black";
    }
})

continueButton2 = document.getElementById("continue-button-2");

function verificarCamposRegisterTwo() {
    if (departamentoSelectInput.value != 0 && provinciaSelectInput.value != 0 && distritoSelectInput.value != 0 && goodConfirmPassword && goodPhoneNumber && goodRegisterPassword && goodEmailRegister) {
        continueButton2.disabled = false;
        continueButton2.classList.add('enabled');
    } else {
        continueButton2.disabled = true;
        continueButton2.classList.remove('enabled');
    }
}

// #endregion

// #region Alternar información de password inputs
alterPassword1.addEventListener('click', () => {
    const isPassword = passwordRegisterInput.type === 'password';
    passwordRegisterInput.type = isPassword ? 'text' : 'password';

    alterPassword1.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
});

alterPassword2.addEventListener('click', () => {
    const isPassword = passwordConfirmInput.type === 'password';
    passwordConfirmInput.type = isPassword ? 'text' : 'password';

    alterPassword2.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
});
// #endregion