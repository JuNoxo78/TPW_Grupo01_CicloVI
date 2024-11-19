const loginButton = document.getElementById("login-button");

const emailInput = document.getElementById("emailInput");

const passwordInput = document.getElementById("passwordInput");

const mensajeErrorEmail = document.getElementById("mensaje-error-email");

// Función que verifica si el botón debe habilitarse
function verificarCamposLogin() {
    const emailValido = emailInput.validity.valid; // Verifica si el email es válido
    const passwordLleno = passwordInput.value.trim() !== ''; // Verifica si la contraseña no está vacía

    if (emailInput.value.length > 0 & emailValido) {
        mensajeErrorEmail.style.display = "none";
        emailInput.style.boxShadow = "0 0 0 0.2px black"
    } else if (emailInput.value.length > 0) {
        mensajeErrorEmail.textContent = "¡Revisa bien! Ingresa un correo válido."
        mensajeErrorEmail.style.display = "inline";
        emailInput.style.boxShadow = "0 0 0 0.4px red"
    } else if (emailInput.value.length == 0) {
        mensajeErrorEmail.textContent = "Por favor, ingresa tu correo electrónico."
    }

    if (emailValido && passwordLleno) {
        loginButton.disabled = false;
        loginButton.classList.add('enabled');
    } else {
        loginButton.disabled = true;
        loginButton.classList.remove('enabled');
    }
}

emailInput.addEventListener('input', verificarCamposLogin);
passwordInput.addEventListener('input', verificarCamposLogin);

const alterPassword = document.getElementById("alter-password");

alterPassword.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    alterPassword.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
});

const registroLink = document.getElementById("registro-link");
const registerIframe = document.getElementById("register-iframe")
const loginContainer = document.getElementById("login-container");

registroLink.addEventListener("click", () => {
    registerIframe.style.display = "block";
    loginContainer.style.display = "none";
});

const adviceRegisterDialog = document.getElementById("advice-register-dialog");

window.addEventListener("message", (event) => {
    switch (event.data) {
        case "Volver al login":
            registerIframe.style.display = "none";
            loginContainer.style.display = "flex";
            break;
        case "Abrir advice register":
            adviceRegisterDialog.showModal();
            break;
        default:
            break;
    }
});

const outButton = document.getElementById("out-button");

const stayButton = document.getElementById("stay-button");

outButton.addEventListener("click", () => {
    registerIframe.style.display = "none";
    loginContainer.style.display = "flex";
    adviceRegisterDialog.close();
    registerIframe.contentWindow.postMessage("Actualiza registro, despues de volver al login", "*");
});

stayButton.addEventListener("click", () => {
    adviceRegisterDialog.close();
});
