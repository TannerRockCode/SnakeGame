// const beginGameButton = document.getElementById("beginGameBtn");

// if (beginGameButton) {
//   beginGameButton.addEventListener("click", beginGame);
// }

let directionY = 0;
let directionX = 1;
let snakeX = 0;
let snakeY = 0;

const beginGameButton = document.getElementById("beginGameBtn");
beginGameButton.addEventListener("click", beginGame);

function beginGame() {
  let gameOver = false;
  //console.log("button pressed");
  document.getElementById("beginGameBtn").innerHTML = "End Game";
  document.getElementById("gameMap").style.backgroundColor = "Yellow";

  squareSize = 5;
  rows = 50;
  columns = 50;

  let snake = [
    { x: 20, y: 0 },
    { x: 15, y: 0 },
    { x: 10, y: 0 },
    { x: 5, y: 0 },
    { x: 0, y: 0 },
  ];

  let snakeDirectionX = 0;
  let snakeDirectionY = 0;

  gameMap = document.getElementById("gameMap");
  gameMap.height = rows * squareSize;
  gameMap.width = columns * squareSize;
  context = gameMap.getContext("2d");

  setInterval(update, 1000);

  document.addEventListener("keydown", (event) => {
    const keyPressed = event.code;
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
    //console.log(keyPressed);
    //console.log("keyDown EVENT DirectionX:");
    //console.log(directionX);
    //console.log("keyDown EVENT DirectionY:");
    //console.log(directionY);
  });

  function update() {
    if (gameOver == true) return;
    context.fillStyle = "Orange";
    context.fillRect(0, 0, gameMap.height, gameMap.width);

    context.fillStyle = "Purple";
    context.fillRect(199, 220, 5, 5);

    //console.log("DirectionX:");
    //console.log(directionX);
    //console.log("DirectionY:");
    //console.log(directionY);

    //let snakeHead = snake[0];
    //directionX = 1;

    context.fillStyle = "Green";
    let snakeHead = snake[0];
    snakeDirectionX = snakeHead.x;
    snakeDirectionY = snakeHead.y;
    snakeDirectionX += directionX * 5;
    snakeDirectionY += directionY * 5;
    console.log("directionY: ");
    console.log(directionY);
    console.log("SnakeHeadY");
    console.log(snakeHead.y);
    console.log("SnakeHeadY + DirectionY:");
    console.log(snakeDirectionY);
    //console.log("SnakeX:");
    //console.log(snakeX);
    //console.log("SnakeY:");
    //console.log(snakeY);

    snake.unshift({ x: snakeDirectionX, y: snakeDirectionY });
    snake.pop();

    //console.log(snake[3].x);

    for (let i = 0; i < snake.length; i++) {
      //console.log("Snake X:");
      //console.log(snake[i].x);
      //console.log("Snake Y:");
      //console.log(snake[i].y);
      context.fillRect(snake[i].x, snake[i].y, 5, 5);
    }

    if (GameOverCheck(snake)) GameOver(context);

    //context.fillRect(snakeX, snakeY, 5, 5);
  }

  function GameOverCheck(snake) {
    if (snake[0].x < 0 || snake[0].x > 500) return true;
  }

  function GameOver(context) {
    gameOver = true;
    console.log("Game Over");
    context.fillStyle = "Black";
    context.fillRect(0, 0, gameMap.height, gameMap.width);
  }

  //generateSnakeFood();
}

// function generateSnakeFood() {
//   foodBlockX = 100;
//   foodBlockY = 125;
// }
