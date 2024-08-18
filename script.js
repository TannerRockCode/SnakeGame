const gameMap = document.getElementById("game-map");

let y = 0;
let x = 1;

var keyPress = "x";
console.log("Creating Game");

var gameMapHeight = gameMap.clientHeight;
var gameMapWidth = gameMap.clientWidth;

console.log(gameMapHeight);
console.log(gameMapWidth);

const ColumnCount = gameMapHeight / 10;
const RowCount = gameMapWidth / 10;

let snake = [
  { x: 20, y: 20 },
  { x: 19, y: 20 },
  { x: 18, y: 20 },
  { x: 17, y: 20 },
  { x: 16, y: 20 },
];

addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      x = -1;
      keyPress = "x";
      console.log("ArrowLeft");
      break;
    case "ArrowRight":
      x = 1;
      keyPress = "x";
      console.log("ArrowRight");
      break;
    case "ArrowUp":
      y = -1;
      keyPress = "y";
      console.log("ArrowUp");
      break;
    case "ArrowDown":
      y = 1;
      keyPress = "y";
      console.log("ArrowDown");
      break;
  }
});

function clearGameMap() {
  while (gameMap.firstChild) gameMap.removeChild(gameMap.firstChild);
}

function drawSnake() {
  snake.forEach((segment) => {
    const snakeSegment = document.createElement("div");
    snakeSegment.setAttribute("class", "snake");
    snakeSegment.style.width = 10;
    snakeSegment.style.height = 10;
    snakeSegment.style.backgroundColor = "white";
    snakeSegment.style.gridRow = segment.y;
    snakeSegment.style.gridColumn = segment.x;
    gameMap.appendChild(snakeSegment);
  });
}

function UpdateGame() {
  clearGameMap();
  UpdateSnake();
  drawSnake();
}

function UpdateSnake() {
  let snakeHead = snake[0];
  let snakeHeadNext = snakeHead;
  //if
  switch (keyPress) {
    case "x":
      snakeHeadNext = { x: snakeHead.x + x, y: snakeHead.y };
      break;
    case "y":
      snakeHeadNext = { x: snakeHead.x, y: snakeHead.y + y };
      console.log("y value:");
      console.log(y);
      console.log("snakeYUpdate");
      break;
  }
  console.log(snakeHeadNext);
  snake.unshift(snakeHeadNext);
  snake.pop();
}

setInterval(UpdateGame, 100);
