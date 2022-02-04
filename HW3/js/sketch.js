var xPos = 1; 
var ySpeed = 1; 
var playerX = 185; 
var playerY = 750; 
var spawnTime = 10; 

let font; 

var steak; 
var meatball; 
var player; 

var meats = []; 

var windowH; 
var windowW; 

function preload()
{ 
  // Load the images before the page renders for the player and store them in a variable
  steak = loadImage('./assets/imgs/steak.png'); 
  meatball = loadImage('./assets/imgs/meatballpng.png'); 
  player = loadImage('./assets/imgs/plant.png'); 
  font = loadFont('./assets/fonts/bangers.ttf'); 
}

function setup() 
{
    var canvas = createCanvas(displayWidth, displayHeight);

    var windowH = window.displayHeight; 
    var windowW = window.displayWidth; 



    textFont(font); 
    textSize(27);

    // Resize the images to your needs 
    steak.resize(125, 125); 
    meatball.resize(125, 125); 
    player.resize(125, 125); 

    canvas.parent('canvas'); 

    button = createButton('Back'); 
    button.position(20, 925); 

    meats[0] = steak; 
    meats[1] = meatball; 
    /*
    meats[0] = image(steak, xPos, ySpeed);
    meats[1] = image(meatball, xPos, ySpeed);
    */

    setInterval(spawnTimer, 1000); 
}
  
function draw() 
{

  background(225);  
  
  if(spawnTime == 0)
  {
    spawnTime = 10; 

    i = random(0, 2); 
    image(meats[i], xPos, ySpeed); 
    ySpeed = ySpeed * 1.02; 

    if(ySpeed >= 1000)
    {
      // Assigns random position at the top
      xPos = random(0, 500); 
      // Resets the speed. 
      ySpeed = 1; 
    }
  }
  
  i = 1; 
  image(meats[i], 200, 250);

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
  text('MEATiors', 14, 30);
  text('Solomon Albertson-Gore', 1600, 925); 

  if(spawnTime <= 10)
  {
    text('0:' + spawnTime, 250, 250); 
  }
}

function spawnMeteor()
{ 

  // MEATior. Eventually change to array that calls different types of meat. 
  // image(steak, xPos, ySpeed);
  if (spawnTime == 10) 
  {
    i = 1; 
    image(meats[i], xPos, ySpeed); 
    ySpeed = ySpeed * 1.02; 
  }

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

function spawnTimer()
{
  if(spawnTime > 0)
    {
      spawnTime--; 
    }
  if(spawnTime == 0)
  {
    spawnTime = 10; 
  }
}
