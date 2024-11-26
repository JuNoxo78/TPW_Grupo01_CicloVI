const selectSexInput = document.getElementById("select-sex-input");
const continueButton1 = document.getElementById("continue-button-1");

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