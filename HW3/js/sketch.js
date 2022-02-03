var xPos = 1; 
var ySpeed = 1; 
var playerX = 185; 
var playerY = 800; 
timer = 0; 

var steak; 
var meatball; 
var player; 
function preload()
{ 
  // Load the images before the page renders for the player and store them in a variable
  steak = loadImage('./assets/imgs/steak.png'); 
  meatball = loadImage('./assets/imgs/meatballpng.png'); 
  player = loadImage('./assets/imgs/plant.png'); 
}

function setup() 
{
    var canvas = createCanvas(500, 950);

    // Resize the images to your needs 
    steak.resize(125, 125); 
    meatball.resize(125, 125); 
    player.resize(125, 125); 

    canvas.parent('canvas'); 

    button = createButton('Back'); 
    button.position(20, 925); 

}
  
function draw() 
{

  background(220);  

  if(timer >= 5)
  {
    // xPos = random(0, 500); 
    spawnMeteor(); 
    timer = 0; 
    
  }

  while (timer < 5)
  {
      // Start timer
      timer++; 
  }

  // Player movement.
  if(keyIsPressed)
    {
      if (key == 'a')
      {
        playerX--; 
      }
      else if(key == 'd')
      {
        playerX++; 
      }
    }

  // PLAYER
  image(player, playerX, playerY); 

  fill (0, 0, 0); 
  // Text
  text('MEATiors', 20, 30);
  text('Solomon Albertson-Gore', 350, 925); 

}

function spawnMeteor()
{ 

  // MEATior. Eventually change to array that calls different types of meat. 
  image(steak, xPos, ySpeed);
  ySpeed = ySpeed * 1.02; 

  // supposed to destroy object when it goes below screen. 
  // Haven't figured it out quite yet. 
  if(ySpeed >= 1000)
  {
    // Assigns random position at the top
    xPos = random(0, 500); 
    // Resets the speed. 
    ySpeed = 1; 
  }
}
