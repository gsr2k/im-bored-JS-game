
const player = {
    x: 380,
    y: 280,
    width: 24,
    height: 32,
    speed: 180
};

const keys = {};

// Detectar quando uma tecla é pressionada
window.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (
        ["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key) &&
        !document.getElementById("game-screen").hidden) {
        event.preventDefault();
    }

    keys[key] = true;
});

// Detectar quando uma tecla é solta
window.addEventListener("keyup", function (event) {
    keys[event.key.toLowerCase()] = false;
});

// Atualizar a posição do personagem
function updatePlayer(deltaTime) {
    let directionX = 0;
    let directionY = 0;

    if (keys["w"] || keys["arrowup"]) {
        directionY -= 1;
    }

    if (keys["s"] || keys["arrowdown"]) {
        directionY += 1;
    }

    if (keys["a"] || keys["arrowleft"]) {
        directionX -= 1;
    }

    if (keys["d"] || keys["arrowright"]) {
        directionX += 1;
    }

    // Normalizar a direção para evitar diagonal mais rápida
    const length = Math.hypot(directionX, directionY);

    if (length > 0) {
        directionX /= length;
        directionY /= length;
    }

    // Calcular o movimento baseado no tempo
    player.x += directionX * player.speed * deltaTime;
    player.y += directionY * player.speed * deltaTime;
}


function drawPlayer(ctx) {
    ctx.fillStyle = "#B9A0FF";

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );
}

