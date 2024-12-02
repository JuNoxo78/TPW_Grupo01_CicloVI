const selectSexInput = document.getElementById("select-sex-input");
const continueButton1 = document.getElementById("continue-button-1");

continueButton1.addEventListener("click", () => {
    localStorage.setItem('currentIndex', '2'); // Guardar estado
    currentIndex = 2;

    registerForm2.style.display = "none";
    registerForm3.style.display = "flex";
})

selectSexInput.addEventListener("change", () => {
    if (selectSexInput.value == "Femenino" || selectSexInput.value == "Masculino") {
        selectSexInput.style.color = "black";
        continueButton1.disabled = false;
        continueButton1.classList.add('enabled');
    } else {
        continueButton1.disabled = true;
        continueButton1.classList.remove('enabled');
    }
})

const registerForm3 = document.getElementById("register-form-3");

window.addEventListener("load", () => {
    const dniData = JSON.parse(localStorage.getItem('dniData'));
    const registerCacheData = JSON.parse(localStorage.getItem('registerCacheData'));

    nombreCompleto.textContent = dniData.nombre_completo;
    dniPNumber.textContent = dniData.numero;

    const fecha = new Date(registerCacheData.fechaNacimiento);

    const dia = String(fecha.getDate() + 1).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const year = String(fecha.getFullYear());

    const fechaNacFormat = `${dia}/${mes}/${year}`;

    fechaPNacimiento.textContent = fechaNacFormat;
})

/* #region Añadiendo datos a registerCacheData - Form 2 */
const form2 = document.getElementById("form-2");

form2.addEventListener("submit", e => {
    e.preventDefault();

    const data = Object.fromEntries(
        new FormData(e.target)
    )

    let registerCacheData = JSON.parse(localStorage.getItem('registerCacheData'));

    registerCacheData.sexo = data.sexo;
    registerCacheData.nombre = nombreCompleto.textContent;

    localStorage.setItem('registerCacheData', JSON.stringify(registerCacheData));
})
/* #endregion */