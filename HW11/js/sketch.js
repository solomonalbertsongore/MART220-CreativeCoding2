let sushi; 
let chopstick; 
let bamboo; 

function preload() 
{
  sushi = loadModel('sushi.obj', true);
  chopstick = loadModel('chopsticks.obj', true); 
  bamboo = loadImage('bamboo-texture.jpg', true); 
}

function setup()
{
  createCanvas(700, 700, WEBGL); 
}

function draw()
{
  background('black'); 

  push(); 
  scale(1); 
  rotateX(90); 
  rotateY(frameCount * 0.01);
  normalMaterial(); 
  model(sushi); 
  pop(); 

  push(); 
  translate(250, 250, 0); 
  scale(2); 
  // rotateX(90); 
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  normalMaterial(); 
  texture(bamboo); 
  model(chopstick); 
  pop(); 
}