var xPos = 1; 
var ySpeed = 1; 
var playerX = 185; 
var playerY = 750; 
var spawnTime = 5; 

let font; 

var steak; 
var meatball; 
var player; 

var meats = []; 

var bgColor = 100; 
var windowH; 
var windowW; 

var r = 0;
var b = 0;
var g = 0;

function preload()
{ 
  // Load the images before the page renders for the player and store them in a variable
  steak = loadImage('./assets/imgs/steak.png'); 
  meatball = loadImage('./assets/imgs/meatballpng.png'); 
  player = loadImage('./assets/imgs/plant.png'); 
  font = loadFont('./assets/fonts/bangers.ttf'); 
  
  i = random(0, meats.length);
}

function setup() 
{ 
    xPos = random(0, 1000); 

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

  background(bgColor);  

  if(spawnTime == 5)
  {
    spawnMeteor(); 
  } 

  // Player movement.
  if(keyIsPressed)
    {
      if (key == 'a')
      {
        playerX = playerX - 5; 
      }
      else if(key == 'd')
      {
        playerX = playerX + 5; 
      }
    }

  // PLAYER
  image(player, playerX, playerY); 

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
  //image(steak, xPos, ySpeed);
  
  image(meats[1], xPos, ySpeed); 
  image(meats[0], xPos + 300, ySpeed); 
  ySpeed = ySpeed * random(1, 1.02); 
  
  // supposed to destroy object when it goes below screen. 
  // Haven't figured it out quite yet. 
  if(ySpeed >= 1000)
  {
    // Assigns random position at the top
    xPos = random(0, 1900); 
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
    spawnTime = 5; 
  }
}

function changeColor()
{
  for(var i = 0; i < 5; i++)
  {
    r += 50; 
    g += 50; 
    b += 50; 
  }
}
