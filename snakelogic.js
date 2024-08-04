// const beginGameButton = document.getElementById("beginGameBtn");

// if (beginGameButton) {
//   beginGameButton.addEventListener("click", beginGame);
// }

let directionY = 0;
let directionX = 0;
let snakeX = 0;
let snakeY = 0;

const beginGameButton = document.getElementById("beginGameBtn");
beginGameButton.addEventListener("click", beginGame);

function beginGame() {
  console.log("button pressed");
  document.getElementById("beginGameBtn").innerHTML = "End Game";
  document.getElementById("gameMap").style.backgroundColor = "Yellow";

  squareSize = 5;
  rows = 50;
  columns = 50;

  let snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ];

  gameMap = document.getElementById("gameMap");
  gameMap.height = rows * squareSize;
  gameMap.width = columns * squareSize;
  context = gameMap.getContext("2d");

  setInterval(update, 100);

  document.addEventListener("keydown", (event) => {
    const keyPressed = event.code;
    console.log("Key Down Detected");
    console.log(keyPressed);
    if (event.code === "ArrowUp") {
      directionY = -1;
      directionX = 0;
    }
    if (keyPressed === "ArrowDown") {
      directionY = 1;
      directionX = 0;
    }
    if (keyPressed === "ArrowLeft") {
      directionY = 0;
      directionX = -1;
    }
    if (keyPressed === "ArrowRight") {
      directionY = 0;
      directionX = 1;
    }
    console.log(keyPressed);
    console.log("keyDown EVENT DirectionX:");
    console.log(directionX);
    console.log("keyDown EVENT DirectionY:");
    console.log(directionY);
  });

  function update() {
    context.fillStyle = "Orange";
    context.fillRect(0, 0, gameMap.height, gameMap.width);

    context.fillStyle = "Purple";
    context.fillRect(199, 220, 5, 5);

    console.log("DirectionX:");
    console.log(directionX);
    console.log("DirectionY:");
    console.log(directionY);

    context.fillStyle = "Green";
    snakeX += squareSize * directionX;
    snakeY += squareSize * directionY;
    console.log("SnakeX:");
    console.log(snakeX);
    console.log("SnakeY:");
    console.log(snakeY);

    context.fillRect(snakeX, snakeY, 5, 5);
  }

  //generateSnakeFood();
}

// function generateSnakeFood() {
//   foodBlockX = 100;
//   foodBlockY = 125;
// }
