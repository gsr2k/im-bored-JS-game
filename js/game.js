
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

let previousTime = 0;
let gameRunning = false;

// provisorio...
function drawGame() {
    ctx.fillStyle = "#F1EFF8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#E3DDF0";
    ctx.fillRect(0, 450, canvas.width, 150);

    drawPlayer(ctx);
}

// Atualiza a lógica e desenha cada quadro
function gameLoop(currentTime) {
    if (!gameRunning) {
        return;
    }

    const deltaTime = (currentTime - previousTime) / 1000;
    previousTime = currentTime;

    updatePlayer(deltaTime);

    drawGame();

    requestAnimationFrame(gameLoop);
}

// Inicia o jogo
function startGame() {
    if (gameRunning) {
        return;
    }

    gameRunning = true;
    previousTime = 0;

    requestAnimationFrame(gameLoop);
}

function stopGame() {
    gameRunning = false;
}
