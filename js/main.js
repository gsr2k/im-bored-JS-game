
const mainMenu = document.getElementById("main-menu");
const gameScreen = document.getElementById("game-screen");
const aboutMenu = document.getElementById("about-menu");
const optionsMenu = document.getElementById("options-menu");

const playerForm = document.getElementById("player-form");
const playerNameInput = document.getElementById("player-name");

const aboutButton = document.getElementById("about-button");
const backButton = document.getElementById("back-button");

const optionsButton = document.getElementById("options-button");
const optionsBackButton = document.getElementById("options-back-button");
const showMessagesCheckbox = document.getElementById("show-messages");

let showInteractionMessages = true;

playerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const playerName = playerNameInput.value.trim();

    // da um check se a string é vazia
    if (playerName === "") {
        alert("Digite um nome para começar!");
        return;
    }

    mainMenu.hidden = true;
    gameScreen.hidden = false;

    startGame();

    document.getElementById("interaction-message").textContent =
        `Bem-vindo ao Reverie, ${playerName}. Explore o ambiente.`;
});

aboutButton.addEventListener("click", function () {
    mainMenu.hidden = true;
    aboutMenu.hidden = false;
});

backButton.addEventListener("click", function () {
    aboutMenu.hidden = true;
    mainMenu.hidden = false;
});

optionsButton.addEventListener("click", function () {
    mainMenu.hidden = true;
    optionsMenu.hidden = false;
});

optionsBackButton.addEventListener("click", function () {
    optionsMenu.hidden = true;
    mainMenu.hidden = false;
});

showMessagesCheckbox.addEventListener("change", function () {
    showInteractionMessages = showMessagesCheckbox.checked;

    console.log("Mostrar mensagens:", showInteractionMessages);
});
