var xPos = []; 
var startingX = 100; 
var ySpeed = 1; 

var playerX = 185; 
var playerY = 750; 
var spawnTime = 5; 

// Variable to store font. 
let font; 

// Variables to store images
var steak; 
var meatball; 
var player; 

// Meteor array
var meats = []; 
var showImages = true; 

var windowH = window.displayHeight; 
var windowW = window.displayWidth; 

var randomMeat = []; 

function preload()
{ 
  // Load the images before the page renders for the player and store them in a variable
  steak = loadImage('./assets/imgs/steak.png'); 
  meatball = loadImage('./assets/imgs/meatballpng.png'); 
  player = loadImage('./assets/imgs/plant.png'); 
  font = loadFont('./assets/fonts/bangers.ttf'); 
}

/*
function windowResized() 
{
  resizeCanvas(windowW - 20, windowH - 20);
}
*/

function setup() 
{   

    createCanvas(displayHeight - 20, displayWidth - 100);

    for (var i = 0; i < 10; i++)
    {
      xPos[i] = random(0, 1000);
      startingX += 50;  
    }

    for (var i = 0; i < 2; i++)
    {
      randomMeat[i] = floor(random(0, meats.length));
    }

    // Set font and font size.
    textFont(font); 
    textSize(27);

    // Resize the images to your needs 
    steak.resize(125, 125);   
    meatball.resize(125, 125); 
    player.resize(125, 125); 

    button = createButton('Back'); 
    button.position(20, 925); 

    meats[0] = steak; 
    meats[1] = meatball; 

    setInterval(spawnTimer, 1000); 

}
  
function draw() 
{

  background(200);  

  // Meteor SHOULD spawn here. However right now it only appears when the timer hits 5. 
  // I think this is because the function isn't creating a different object each time, they are 
  // just always the same. Need to fix this so the function creates a new object each time (should use arrays for this). 
  
  for(var i = 0; i < meats.length; i++)
  {
    image(meats[floor(random(meats.length))], xPos[i], 100);
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
  text('MEATeors', 14, 30);
  text('Solomon Albertson-Gore', 1600, 925); 

  if(spawnTime <= 10)
  {
    text('0:' + spawnTime, 150, 30); 
  }
}

/*
function spawnMeteor()
{ 

  // MEATior. Eventually change to array that calls different types of meat. 
  //image(steak, xPos, ySpeed);

  for(var i = 0; i < xPos.length; i++)
  {
    image(meats[i], xPos[i], 200); 
  }

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
*/

function spawnTimer()
{
  if(spawnTime > 0)
    {
      spawnTime--; 
      showImages = true; 
    }
  if(spawnTime == 0)
  {
    spawnTime = 5; 
    showImages = false; 
  }
}
