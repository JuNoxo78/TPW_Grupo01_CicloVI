const bottomAdvice = document.getElementById("bottom-advice");

const gameMenu = document.getElementById("game-menu");

const playButton = document.getElementById("play-button");

const backButton = document.createElement('img');
backButton.src = "../../img/game/backArrow3.png"
backButton.id = "backButton";
backButton.className = "volumenBackButtons";

playButton.addEventListener("click", () => {
    gameMenu.remove();
    bottomAdvice.remove();
    gameContainer.appendChild(backButton);
});

backButton.addEventListener("click", () => {
    backButton.remove();
    gameContainer.appendChild(gameMenu);
    gameContainer.appendChild(bottomAdvice);
    gameContainer.appendChild(instructionsOne);
});

/* const adviceInsOne = document.createElement('div');
adviceInsOne.id = "advice-ins-one"
adviceInsOne.appendChild("<p>sdif</p>")

const instructionsOne = document.createElement('div');
instructionsOne.id = "instructions-one";
instructionsOne.appendChild(adviceInsOne);
 */