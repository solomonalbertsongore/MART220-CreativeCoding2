let sushi; 

function preload() 
{
  sushi = loadModel('sushi.obj', true); 
}

function setup()
{
  createCanvas(700, 700, WEBGL); 
}

function draw()
{
  background(200); 
  scale(1); 
  rotateX(90); 
  rotateY(frameCount * 0.01);
  normalMaterial(); 
  model(sushi); 
}