const botonSesion = document.getElementById("botonSesion")

botonSesion.addEventListener("click", () => {
    localStorage.setItem('iframeLoginVisible', 'false');
    localStorage.setItem("currentIndex", 0);
})