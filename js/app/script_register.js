//// Guardar estado de register
const registerForms = document.querySelectorAll(".register-form");
const volverOp = document.getElementById("volverOp");
let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;

// Función para actualizar la visibilidad de los divs
function updateDivs() {
    registerForms.forEach((div, index) => {
        div.style.display = index === currentIndex ? "flex" : "none";
    });
    localStorage.setItem("currentIndex", currentIndex);
}

// Manejador para el botón "Seguir"
registerForms.forEach((registerForm, index) => {
    const nextButton = registerForm.querySelector("button")

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            if (index < registerForms.length - 1) {
                currentIndex++;
                updateDivs();
            }
        });
    }
})

// Manejador para el botón "Volver"
volverOp.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateDivs();
    } else {
        window.parent.postMessage("Volver al login", "*");
        registerIframe.contentWindow.location.reload();
    }
});


// Inicializar los divs según el estado guardado
updateDivs();