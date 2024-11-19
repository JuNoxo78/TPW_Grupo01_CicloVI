const bodyGame = document.getElementById("body-game");

const gameContainer = document.getElementById("game-container");

const gameCloseButton = document.getElementById("game-close-button");
const inGameCloseButton = document.getElementById("in-game-close-button");

function closeGame() {
    window.parent.postMessage("cerrarDialog", "*");
    location.reload(); // Al cerrar, se reinicia, para actualizar efectos
}

gameCloseButton.addEventListener("click", () => {
    bodyGame.classList.remove('body-game-in');
    bodyGame.classList.add("body-game-out");
    gameContainer.classList.remove("game-container-in");
    gameContainer.classList.add("game-container-out");
    setTimeout(() => {
        closeGame();
    }, 400);
});

inGameCloseButton.addEventListener("click", () => {
    bodyGame.classList.remove('body-game-in');
    bodyGame.classList.add("body-game-out");
    gameContainer.classList.remove("game-container-in");
    gameContainer.classList.add("game-container-out");
    setTimeout(() => {
        closeGame();
    }, 400);
});

function toogleGame() {
    gameContainer.classList.toggle("mostrar");
}

window.addEventListener("load", () => {
    bodyGame.classList.remove("body-game-out");
    bodyGame.classList.add("body-game-in");
    gameContainer.classList.add("game-container-in");
    gameContainer.classList.remove("game-container-out");
});
