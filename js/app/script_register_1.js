const loginLink = document.querySelectorAll(".login-link");

loginLink.forEach((link) => {
    link.addEventListener("click", () => {
        window.parent.postMessage("Abrir advice register", "*");
    });
});

const numberDocInput = document.getElementById("numberDocInput");
const erroMessageNumberDocInput = document.getElementById("error-message-number-doc-input");
const selectInput = document.getElementById("select-input");
const fechaNacInput = document.getElementById("fechaNacInput");
const continueButton0 = document.getElementById("continue-button-0");
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
        continueButton0.disabled = false;
        continueButton0.classList.add('enabled');
    } else {
        continueButton0.disabled = true;
        continueButton0.classList.remove('enabled');
    }
}

numberDocInput.addEventListener('keydown', verificarCamposRegisterOne);

numberDocInput.addEventListener('blur', verificarCamposRegisterOne);

numberDocInput.addEventListener('input', verificarCamposRegisterOne);

selectInput.addEventListener("change", () => {
    numberDocInput.value = "";
    erroMessageNumberDocInput.style.display = "none"
    numberDocInput.style.boxShadow = "0 0 0 0.2px black"
    continueButton0.disabled = true;
    continueButton0.classList.remove('enabled');
})

fechaNacInput.addEventListener("change", verificarCamposRegisterOne);

terminosCheckbox.addEventListener("change", verificarCamposRegisterOne);

const registerForm1 = document.getElementById("register-form-1");
const registerForm2 = document.getElementById("register-form-2");

continueButton0.addEventListener("click", () => {
    localStorage.setItem('iframeRegisterVisible', '2'); // Guardar estado

    registerForm1.style.display = "none"
    registerForm2.style.display = "flex"
})