const usuarioEnLogin = JSON.parse(localStorage.getItem("ultimoLogin"))

const nombreUsuario = document.getElementById("nombre-usuario")

nombreUsuario.textContent = usuarioEnLogin.nombre

// Selección de los elementos
const userMenu = document.getElementById("user-menu");
const userSelection = document.getElementById("user-selection");
const iframe = document.querySelector('iframe'); // Asegúrate de que tu iframe tenga un selector válido

// Mostrar el menú al hacer clic en el elemento de selección
userSelection.addEventListener('click', (event) => {
    userMenu.style.display = 'block';
    event.stopPropagation(); // Evitar que el clic en el botón cierre el menú
});

// Ocultar el menú al hacer clic fuera
document.addEventListener('click', (event) => {
    if (!userMenu.contains(event.target) && event.target !== userSelection) {
        userMenu.style.display = 'none';
    }
});

iframe.addEventListener('mouseenter', () => {
    userMenu.style.display = 'none';
});