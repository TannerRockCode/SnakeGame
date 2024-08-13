// let directionY = 0;
// let directionX = 1;
// let snakeX = 0;
// let snakeY = 0;

//const beginGameButton = document.getElementById("beginGameBtn");
//beginGameButton.addEventListener("click", beginGame);

const gameMap = document.getElementById("game-map");
console.log(gameMap);

let snakePositions = [
  { x: 20, y: 0 },
  { x: 15, y: 0 },
  { x: 10, y: 0 },
  { x: 5, y: 0 },
  { x: 0, y: 0 },
];

let snakeSegmentSize = 5;

function draw() {
  console.log("running draw");
  gameMap.innerHTML = "";
  drawSnake();
  // const testElement = document.createElement("div");
  // testElement.className = "testElement";
  //testElement.style.gridColumn = 100;
  //testElement.style.gridRow = 100;
  //gameMap.appendChild(testElement);
}

function updateFrame() {
  console.log("Updating Frame");
  let snakeHead = snakePositions[0];
  let directionX = 1;
  let directionY = 0;
  snakeDirectionX = snakeHead.x;
  snakeDirectionY = snakeHead.y;
  snakeDirectionX += directionX * snakeSegmentSize;
  snakeDirectionY += directionY * snakeSegmentSize;

  snakePositions.unshift({ x: snakeDirectionX, y: snakeDirectionY });
  snakePositions.pop();
  draw();
}

function drawSnake() {
  snakePositions.forEach((segment) => {
    const snakeSegment = document.createElement("div");
    snakeSegment.className = "snake";
    snakeSegment.style.gridColumn = segment.x;
    snakeSegment.style.gridRow = segment.y;
    gameMap.appendChild(snakeSegment);
  });
}

// function createElement(tag, className) {
//   const element = document.createElement(tag);
//   element.className = className;
// }

setInterval(updateFrame, 10000);

// function drawSnake() {
//   snakePositions.forEach((position) => {
//     const snakeSection = createGameElement("div", "snake");
//     setPosition(snakeSection, position);
//     gameMap.appendChild(snakeSection);
//   });
// }

// function createGameElement(tag, className) {
//   const gameElement = document.createElement(tag);
//   gameElement.className = className;
// }

// function setPosition(element, position) {
//   element.style.gridColumn = position.x;
//   element.style.gridRow = position.y;
// }

// draw();

// function beginGame() {
//   let gameOver = false;
//   document.getElementById("beginGameBtn").innerHTML = "End Game";
//   document.getElementById("gameMap").style.backgroundColor = "Yellow";

//   squareSize = 5;
//   rows = 50;
//   columns = 50;

//   let snake = document.createElement("div");
//   snake.setAttribute("id", "Snake");
//   snake.setAttribute("style", "width: 500px");
//   snake.setAttribute("style", "height: 100px");
//   snake.backgroundColor = "Yellow";

//   let snakeDirectionX = 0;
//   let snakeDirectionY = 0;

//   gameMap.innerHTML = "";

//   gameMap = document.getElementById("gameMap");
//   gameMap.height = rows * squareSize;
//   gameMap.width = columns * squareSize;

//   const node = document.createElement("li");
//   const textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.body.appendChild(node);

//   setInterval(update, 10000);

//   document.addEventListener("keydown", (event) => {
//     const keyPressed = event.code;
//     if (event.code === "ArrowUp") {
//       directionY = -1;
//       directionX = 0;
//     }
//     if (keyPressed === "ArrowDown") {
//       directionY = 1;
//       directionX = 0;
//     }
//     if (keyPressed === "ArrowLeft") {
//       directionY = 0;
//       directionX = -1;
//     }
//     if (keyPressed === "ArrowRight") {
//       directionY = 0;
//       directionX = 1;
//     }
//   });

//   function update() {
//     if (gameOver == true) return;
//     context.fillStyle = "Orange";
//     context.fillRect(0, 0, gameMap.height, gameMap.width);

//     context.fillStyle = "Purple";
//     context.fillRect(199, 220, 5, 5);

//     context.fillStyle = "Green";
//     let snakeHead = snakePositions[0];
//     snakeDirectionX = snakeHead.x;
//     snakeDirectionY = snakeHead.y;
//     snakeDirectionX += directionX * 5;
//     snakeDirectionY += directionY * 5;

//     snakePositions.unshift({ x: snakeDirectionX, y: snakeDirectionY });
//     snakePositions.pop();

//     snake.backgroundColor = "blue";

//     // for (let i = 0; i < snakePositions.length; i++) {
//     //   snake.style.gridColumn = snakePositions[i].x;
//     //   snake.style.gridRow = snakePositions[i].y;
//     // }

//     document.getElementById("gameMap").appendChild(snake);

//     // for (let i = 0; i < snake.length; i++) {
//     //   context.fillRect(snake[i].x, snake[i].y, 5, 5);
//     // }

//     if (GameOverCheck(snake)) GameOver(context);
//   }

//   function GameOverCheck(snake) {
//     if (snakePositions[0].x < 0 || snakePositions[0].x > 500) return true;
//   }

//   function GameOver(context) {
//     gameOver = true;
//     console.log("Game Over");
//     context.fillStyle = "Black";
//     context.fillRect(0, 0, gameMap.height, gameMap.width);
//   }
// }
