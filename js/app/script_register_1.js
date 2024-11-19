const volverOp1 = document.getElementById("volverOp1");
const loginLink = document.getElementById("login-link");

volverOp1.addEventListener("click", () => {
    window.parent.postMessage("Volver al login", "*");
});

loginLink.addEventListener("click", () => {
    window.parent.postMessage("Abrir advice register", "*");
});

const numberDocInput = document.getElementById("numberDocInput");
const erroMessageNumberDocInput = document.getElementById("error-message-number-doc-input");
const selectInput = document.getElementById("select-input");
const fechaNacInput = document.getElementById("fechaNacInput");
const continueButton = document.getElementById("continue-button");
const terminosCheckbox = document.getElementById("terminos-checkbox");

function verificarCamposRegisterOne() {
    let goodDocNumber = false;

    if (numberDocInput.value.length == 0) {
        erroMessageNumberDocInput.style.display = "block"
        erroMessageNumberDocInput.textContent = "Ingresa el número"
        numberDocInput.style.boxShadow = "0 0 0 0.4px red"
        goodDocNumber = false;
        switch (selectInput.value) {
            case "DNI":
                numberDocInput.type = "number"
                break;
            case "CE":
                numberDocInput.type = "text"
                break;
            case "PAS":
                numberDocInput.type = "text"
                break;
        }
    } else {
        switch (selectInput.value) {
            case "DNI":
                if (numberDocInput.value.length == 8) {
                    erroMessageNumberDocInput.style.display = "none"
                    numberDocInput.style.boxShadow = "0 0 0 0.2px black"
                    goodDocNumber = true;
                } else {
                    erroMessageNumberDocInput.style.display = "block"
                    erroMessageNumberDocInput.textContent = "Son 8 dígitos"
                    numberDocInput.style.boxShadow = "0 0 0 0.4px red"
                    goodDocNumber = false;
                }
                break;
            default:
                numberDocInput.type = "text";
                if (numberDocInput.value.length >= 4) {
                    erroMessageNumberDocInput.style.display = "none"
                    numberDocInput.style.boxShadow = "0 0 0 0.2px black"
                    goodDocNumber = true;
                } else {
                    erroMessageNumberDocInput.style.display = "block"
                    erroMessageNumberDocInput.textContent = "Mínimo 4 dígitos"
                    numberDocInput.style.boxShadow = "0 0 0 0.4px red"
                    goodDocNumber = false;
                }
                break;
        }
    }

    if (fechaNacInput.value && numberDocInput.value && goodDocNumber && terminosCheckbox.checked) {
        continueButton.disabled = false;
        continueButton.classList.add('enabled');
    } else {
        continueButton.disabled = true;
        continueButton.classList.remove('enabled');
    }
}

numberDocInput.addEventListener('keydown', verificarCamposRegisterOne);

numberDocInput.addEventListener('input', verificarCamposRegisterOne);

selectInput.addEventListener("change", () => {
    numberDocInput.value = "";
    erroMessageNumberDocInput.style.display = "none"
    numberDocInput.style.boxShadow = "0 0 0 0.2px black"
    continueButton.disabled = true;
    continueButton.classList.remove('enabled');
})

fechaNacInput.addEventListener("change", verificarCamposRegisterOne);

terminosCheckbox.addEventListener("change", verificarCamposRegisterOne);

const registerForm1 = document.getElementById("register-form-1");
const registerForm2 = document.getElementById("register-form-2");
const registerHeader1 = document.getElementById("registerHeader1")
const registerHeader2 = document.getElementById("registerHeader2");

continueButton.addEventListener("click", () => {
    registerForm1.style.display = "none"
    registerForm2.style.display = "flex"
    registerHeader1.style.display = "none"
    registerHeader2.style.display = "flex"
})