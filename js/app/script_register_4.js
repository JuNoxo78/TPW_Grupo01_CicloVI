const successfulLoginLink = document.getElementById("successful-login-link");

successfulLoginLink.addEventListener("click", () => {
    window.parent.postMessage("Volver al login después de registro", "*");
})

window.addEventListener("load", () => {
    if (currentIndex == 3) {
        volverOp.style.display = "none"
    }
})