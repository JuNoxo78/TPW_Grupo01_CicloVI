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

const nombreCompleto = document.getElementById("nombre-completo");
const dniPNumber = document.getElementById("dni-p-number");
const fechaPNacimiento = document.getElementById("fecha-p-nacimiento");

continueButton0.addEventListener("click", () => {
    const dniData = JSON.parse(localStorage.getItem('dniData'));
    let dniNumber = document.getElementById("numberDocInput").value;

    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    const usuarioEncontrado = usuariosRegistrados.find(usuario =>
        usuario.numberDocument === numberDocInput.value
    );

    if (dniData) {
        if (dniData.numero == dniNumber) {
            if (usuarioEncontrado) {
                window.parent.postMessage(usuarioEncontrado, "*")
            } else {
                const fecha = new Date(fechaNacInput.value);

                const dia = String(fecha.getDate() + 1).padStart(2, '0');
                const mes = String(fecha.getMonth() + 1).padStart(2, '0');
                const year = String(fecha.getFullYear());

                const fechaNacFormat = `${dia}/${mes}/${year}`;
                fechaPNacimiento.textContent = fechaNacFormat;

                nombreCompleto.textContent = dniData.nombre_completo;
                dniPNumber.textContent = dniData.numero;

                localStorage.setItem('iframeRegisterVisible', '2'); // Guardar estado
                localStorage.setItem('currentIndex', '1'); // Guardar estado
                currentIndex = 1;

                registerForm1.style.display = "none";
                registerForm2.style.display = "flex";
            }
        } else {
            if (usuarioEncontrado) {
                window.parent.postMessage(usuarioEncontrado, "*")
            } else {
                traerDatos();
            }
        }
    } else {
        traerDatos();
    }
})

const form1 = document.getElementById("form-1");

form1.addEventListener("submit", e => {
    e.preventDefault();

    const data = Object.fromEntries(
        new FormData(e.target)
    )

    localStorage.setItem('registerCacheData', JSON.stringify(data));
})

async function traerDatos() {
    let dniNumber = document.getElementById("numberDocInput").value;

    // Formatear fecha de nacimiento
    const fecha = new Date(fechaNacInput.value);

    const dia = String(fecha.getDate() + 1).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const year = String(fecha.getFullYear());

    const fechaNacFormat = `${dia}/${mes}/${year}`;
    fechaPNacimiento.textContent = fechaNacFormat;

    // Obtener data
    try {
        // Realizar la solicitud y esperar los datos
        window.parent.postMessage("Pantalla de carga on", "*");

        const respuesta = await fetch(`https://apiperu.dev/api/dni/${dniNumber}?api_token=2ae781ed1b88c4e3b8ca9a4fb2bebcfd524bfe231f0934780508a68b9a1b0f47`);
        const datos = await respuesta.json();

        // Actualizar contenido con los datos obtenidos
        if (datos.success) {
            window.parent.postMessage("Pantalla de carga off", "*");

            nombreCompleto.textContent = datos.data.nombre_completo;
            dniPNumber.textContent = datos.data.numero;

            localStorage.setItem('dniData', JSON.stringify(datos.data)); // Guardar datos del API
            localStorage.setItem('iframeRegisterVisible', '2'); // Guardar estado
            localStorage.setItem('currentIndex', '1'); // Guardar estado
            currentIndex = 1;

            registerForm1.style.display = "none";
            registerForm2.style.display = "flex";
        } else {
            form1.reset();
            window.parent.postMessage("Pantalla de carga off", "*");

            window.parent.postMessage("Abrir bad advice register", "*");
        }
    } catch (error) {
        form1.reset();
        window.parent.postMessage("Pantalla de carga off", "*");

        window.parent.postMessage("Abrir bad advice register", "*");
    }
}