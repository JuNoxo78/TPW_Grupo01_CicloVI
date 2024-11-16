const bodyGame = document.getElementById("body-game");

const gameContainer = document.getElementById("game-container");

const gameCloseButton = document.getElementById("game-close-button");

function closeGame() {
    window.parent.postMessage("cerrarDialog", "*");
}

gameCloseButton.addEventListener("click", () => {
    bodyGame.classList.add("body-game-out");
    closeGame();
});

function toogleGame() {
    gameContainer.classList.toggle("mostrar");
}

window.addEventListener("load", () => {
    bodyGame.classList.add("body-game-in");
    gameContainer.classList.add("game-container-in");
});
