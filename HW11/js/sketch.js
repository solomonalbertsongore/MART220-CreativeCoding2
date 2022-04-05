let sushi; 
let chopstick; 
let bamboo; 
let font; 

var chopstickSS = []; 
var sushis = []; 

var translateX = 0; 
var translateY = 0; 
var translateZ = -500; 

function preload() 
{
  font = loadFont('RobotoMono-Regular.ttf'); 
  sushi = loadModel('sushi.obj', true);
  chopstick = loadModel('chopsticks.obj', true); 
  bamboo = loadImage('bamboo-texture.jpg', true); 
  salmon = loadImage('salmon.jpg', true); 
}

function setup()
{
  createCanvas(700, 700, WEBGL); 
  textFont(font); 
  textSize(20); 

  for (i = 0; i < 5; i++)
  {
    chopstickSS[i] = new Chopstick(chopstick, bamboo, random(-650, 650), random(-650, 650), 0, 1); 
    sushis[i] = new Sushi(sushi, salmon, random(-650, 650), random(-650, 650), 100, .5); 

  }
  
}

function draw()
{
  background('black'); 

  fill('white'); 
  text('Solomon Albertson-Gore', 60, 300); 
  text('Sushi', -325, -305); 

  push();
  translate(translateX, translateY, translateZ); 
  rotateX(frameCount * 0.01); 
  rotateY(frameCount * 0.01); 
  // chopstickSS[1].drawChopstick(); 
  for(i = 0; i < 5; i++)
  {
    chopstickSS[i].drawChopstick();
    sushis[i].drawSushi();  
  }
  pop(); 
}

function mouseClicked() 
{
  translateX = random(-400, 400); 
  translateY = random(-400, 400); 
  translateZ = random(-500, 10); 
}