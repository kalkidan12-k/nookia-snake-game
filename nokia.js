const canvas =document.querySelector(".canvas");
const ctx= canvas.getContext("2d");

const scale =20;
const rows= canvas.height/scale
const columns= canvas.width/scale
document.onkeydown=changeDirection;
function changeDirection(event){
    let key=event.keyCode
    if(key==37 && d!="right"){
        d="left"
    }
    if(key==38 && d!="down"){
        d="up"
    }
    if(key==39 && d!="left"){
        d="right"
    }
    if(key==40 && d!="up"){
        d="down"
    }

}
function eatSelf(head,array){
    for(let i=0; i<array.length; i++){
        if(head.x==array[i].x && head.y==array[i].y){
            return true
        }
        else{
            return false 
        }

    }
    
}
 let food={
    x:( Math.floor(Math.random()*columns))*scale,
    y:( Math.floor(Math.random()*rows))*scale,   
};

let snake=[]
 snake[0]={
    x:( Math.floor(Math.random()*columns))*scale,
    y:( Math.floor(Math.random()*rows))*scale,   
};

let d="right"
let playGame=setInterval(draw,100);
function draw () {
ctx.clearRect(0, 0,  canvas.width, canvas.height, )
for(let i=0; i<snake.length; i++){
ctx.fillStyle="#fff"
ctx.strokeStyle="red"
ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
}
ctx.fillStyle="blue"
ctx.strokeStyle="grey"
ctx.fillRect(food.x, food.y, scale, scale);
ctx.strokeRect(food.x, food.y, scale, scale);

let snakeX=snake[0].x
let snakeY=snake[0].y
console.log(snakeX)
if (d=="left")snakeX-=scale;
if (d=="right")snakeX+=scale;
if (d=="down")snakeY+=scale;
if (d=="up")snakeY-=scale;
if(snakeX > canvas.width){
    snakeX=0;
}
if(snakeY > canvas.height){
    snakeY=0;
}
if(snakeY < 0){
    snakeY=canvas.height;
}
if(snakeX< 0){
    snakeX=canvas.width;
}

let newHead={
    x: snakeX,
    y:snakeY
}
if(snakeX==food.x && snakeY==food.y){
    food={
        x:( Math.floor(Math.random()*columns))*scale,
        y:( Math.floor(Math.random()*rows))*scale,   
    };

}
else{
    snake.pop()
}
if (eatSelf(newHead,snake)){
    clearInterval(playGame)

}

snake.unshift(newHead)
}
/*if you want draw circle

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake = [];

// Set the fill style
ctx.fillStyle = "#fff"; // White color for the circle

// Draw a circle
const centerX = 100; // X coordinate of the center
const centerY = 100; // Y coordinate of the center
const radius = 30;    // Radius of the circle

ctx.beginPath(); // Start a new path
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); // Create a circle
ctx.fill(); // Fill the circle
ctx.closePath(); // Close the path
//  if you want oval
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake = [];

// Set the fill style
ctx.fillStyle = "#fff"; // White color for the oval

// Draw an oval
const centerX = 150; // X coordinate of the center
const centerY = 100; // Y coordinate of the center
const radiusX = 50;  // Horizontal radius
const radiusY = 30;  // Vertical radius

ctx.beginPath(); // Start a new path
ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2); // Create an oval
ctx.fill(); // Fill the oval
ctx.closePath(); // Close the path*/


