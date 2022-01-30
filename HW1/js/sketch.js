var xPos = 1; 
var ySpeed = 1; 
var playerX = 185; 
timer = 0; 

function setup() 
{
    var canvas = createCanvas(500, 950);

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

  // Player color
  fill (255, 0, 255); 
  // Player placeholder
  square(playerX, 800, 100); 

  fill (0, 0, 0); 
  // Text
  text('MEATiors', 20, 30);
  text('Solomon Albertson-Gore', 350, 925); 

}

function spawnMeteor()
{ 

  // Meteor color
  fill (0, 0, 0); 
  ellipse(xPos, ySpeed, 75, 75);
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
