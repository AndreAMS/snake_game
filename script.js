let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

let direction = "right";

snake[0] = {
  x: 8 * box,
  y: 8 * box
}

function criarBG(){
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
  for(i = 0; i< snake.length; i++){
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

document.addEventListener('keydown', update);

function update(event){
  if(event.KeyCode == 37 && direction != "right") direction = "left";
  if(event.KeyCode == 38 && direction != "down") direction = "up";
  if(event.KeyCode == 39 && direction != "left") direction = "right";
  if(event.KeyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
  if(snake[0].x > 15 * box && direction == "right") snake[0].x =0;
  if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if(snake[0].y > 15 * box && direction == "down") snake[0].x =0;  
  if(snake[0].y < 0 && direction == "left") snake[0].x = 16 * box;
  criarBG();
  criarCobrinha();
  //inicaliza posição da cobrinha
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(direction == "right") snakeX += box;
  if(direction == "left") snakeY -= box;
  if(direction == "up") snakeY -= box;
  if(direction == "down") snakeY += box;

  snake.pop();

  let newHead = {
    x: snakeX,
    Y: snakeY
  }

  snake.unshift(newHead)

}

let jogo = setInterval(iniciarJogo, 100);

