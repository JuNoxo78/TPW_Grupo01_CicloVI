const loginButton = document.getElementById("login-button");
const contentForm = document.getElementById("contentForm")
const adviceBadLoginDialog = document.getElementById("advice-bad-login-dialog");

contentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    const usuarioEncontrado = usuariosRegistrados.find(usuario =>
        usuario.correo === emailInput.value && usuario.contraseña === passwordInput.value
    );

    window.parent.postMessage("Pantalla de carga on", "*");
    setTimeout(() => {
        window.parent.postMessage("Pantalla de carga off", "*");
        if (usuarioEncontrado) {
            alert("Inicio de sesión exitoso.");
        } else {
            adviceBadLoginDialog.showModal();
        }
    }, 1100);

})

const badLoginStayButton = document.getElementById("bad-login-stay-button");

badLoginStayButton.addEventListener("click", () => {
    adviceBadLoginDialog.close();
})

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
        mensajeErrorEmail.style.display = "inline";
        emailInput.style.boxShadow = "0 0 0 0.4px red"
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
emailInput.addEventListener('blur', verificarCamposLogin);
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

    localStorage.setItem('iframeLoginVisible', 'true'); // Guardar estado
});

const adviceRegisterDialog = document.getElementById("advice-register-dialog");
const adviceBadRegisterDialog = document.getElementById("advice-bad-register-dialog");
const loadDialog = document.getElementById("load-dialog");
const adviceRegisterUserDialog = document.getElementById("advice-register-user-dialog")
const userDialogSpan = document.getElementById("user-dialog-span");

window.addEventListener("message", (event) => {
    switch (event.data) {
        case "Volver al login":
            contentForm.reset();
            mensajeErrorEmail.style.display = "none";
            emailInput.style.boxShadow = "0 0 0 0.2px black"

            registerIframe.style.display = "none";
            loginContainer.style.display = "flex";
            localStorage.setItem('iframeLoginVisible', 'false'); // Cambiar estado para que, cuando se actualiza la página, no aparezca el register
            registerIframe.contentWindow.location.reload();
            localStorage.setItem("currentIndex", 0);
            break;
        case "Volver al login después de registro":
            registerIframe.style.display = "none";
            loginContainer.style.display = "flex";
            localStorage.setItem('iframeLoginVisible', 'false'); // Cambiar estado para que, cuando se actualiza la página, no aparezca el register
            registerIframe.contentWindow.location.reload();
            localStorage.setItem("currentIndex", 0);

            let registerCacheData = JSON.parse(localStorage.getItem('registerCacheData'));

            emailInput.value = registerCacheData.correo
            passwordInput.value = registerCacheData.contraseña
            loginButton.disabled = false;
            loginButton.classList.add('enabled');

            break;
        case "Abrir advice register":
            adviceRegisterDialog.showModal();
            break;
        case "Abrir bad advice register":
            adviceBadRegisterDialog.showModal();
            break;
        case "Pantalla de carga on":
            loadDialog.style.opacity = '1';
            loadDialog.show()
            break;
        case "Pantalla de carga off":
            loadDialog.style.transition = 'opacity 0.3s ease';
            loadDialog.style.opacity = '0';
            setTimeout(() => {
                loadDialog.close();
            }, 300);
            break;
        default:
            userDialogSpan.textContent = event.data.correo;
            adviceRegisterUserDialog.showModal();
            break;
    }
});

const outButton = document.getElementById("out-button");

const stayButton = document.getElementById("stay-button");

outButton.addEventListener("click", () => {
    registerIframe.style.display = "none";
    loginContainer.style.display = "flex";
    localStorage.setItem('iframeLoginVisible', 'false'); // Cambiar estado para que, cuando se actualiza la página, no aparezca el register

    registerIframe.contentWindow.location.reload();
    localStorage.setItem("currentIndex", 0);

    adviceRegisterDialog.close();
});

stayButton.addEventListener("click", () => {
    adviceRegisterDialog.close();
});

const badOutButton = document.getElementById("bad-out-button");
const badStayButton = document.getElementById("bad-stay-button");

badOutButton.addEventListener("click", () => {
    registerIframe.style.display = "none";
    loginContainer.style.display = "flex";
    localStorage.setItem('iframeLoginVisible', 'false'); // Cambiar estado para que, cuando se actualiza la página, no aparezca el register

    registerIframe.contentWindow.location.reload();
    localStorage.setItem("currentIndex", 0);

    adviceBadRegisterDialog.close();
})

badStayButton.addEventListener("click", () => {
    adviceBadRegisterDialog.close();
});


const userOutButton = document.getElementById("user-out-button");
const userStayButton = document.getElementById("user-stay-button");


userOutButton.addEventListener("click", () => {
    registerIframe.style.display = "none";
    loginContainer.style.display = "flex";
    localStorage.setItem('iframeLoginVisible', 'false'); // Cambiar estado para que, cuando se actualiza la página, no aparezca el register

    registerIframe.contentWindow.location.reload();
    localStorage.setItem("currentIndex", 0);

    adviceRegisterUserDialog.close();
})


userStayButton.addEventListener("click", () => {
    registerIframe.contentWindow.location.reload();
    adviceRegisterUserDialog.close();
})

// #region Guardando estado de Inicio de Sesión,o Registro
const iframeLoginVisible = localStorage.getItem('iframeLoginVisible') === 'true';

if (iframeLoginVisible) {
    loginContainer.style.display = 'none';
    registerIframe.style.display = 'flex';
} else {
    loginContainer.style.display = 'flex';
    registerIframe.style.display = 'none';
}
// #endregion