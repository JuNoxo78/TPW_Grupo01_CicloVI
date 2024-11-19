const volverOp2 = document.getElementById("volverOp2");

volverOp2.addEventListener("click", () => {
    registerForm2.style.display = "none"
    registerHeader2.style.display = "none"
    registerHeader1.style.display = "flex"
    registerForm1.style.display = "flex"
});

const selectSexInput = document.getElementById("select-sex-input");
const continueButton1 = document.getElementById("continue-button-1");

selectSexInput.addEventListener("change", () => {
    if (selectSexInput.value == "Femenino" || selectSexInput.value == "Masculino") {
        selectSexInput.style.color = "black";
        continueButton1.disabled = false;
        continueButton1.classList.add('enabled');
    } else {
        selectSexInput.style.color = "#414141";
        continueButton1.disabled = true;
        continueButton1.classList.remove('enabled');
    }
})

const registerForm3 = document.getElementById("register-form-3");
const registerHeader3 = document.getElementById("registerHeader3");

continueButton1.addEventListener("click", () => {
    registerForm2.style.display = "none"
    registerHeader2.style.display = "none"
    registerHeader3.style.display = "flex"
    registerForm3.style.display = "flex"
})