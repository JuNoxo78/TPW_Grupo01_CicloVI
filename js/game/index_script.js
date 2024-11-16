const gameDialog = document.getElementById("game-dialog");

const gameButton = document.getElementById("game-button");

function openGame() {
    gameDialog.show();
    document.querySelector("body").style.overflowY = "hidden";
}

gameButton.addEventListener("click", openGame);

window.addEventListener("message", (event) => {
    if (event.data === "cerrarDialog") {
        gameDialog.close();
        document.querySelector("body").style.overflowY = "auto";
    }
});