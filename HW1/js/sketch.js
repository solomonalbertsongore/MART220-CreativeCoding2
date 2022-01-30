var xPos = 1; 
var ySpeed = 1; 
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
    
  // fill (25, 176, 34); 
  // square(40, 40, 150); 

  // circle(100, 90, 75); 
  // circle(250, 90, 75); 
  // circle(400, 90, 75); 
  

  for (var i = 0; i < 5; i++)
  {
    //spawnMeteor(); 
  }

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


  
  // Player placeholder
  square(185, 800, 100); 

  // Text
  text('MEATiors', 20, 30);
  text('Solomon Albertson-Gore', 350, 925); 

}

function spawnMeteor()
{ 

  ellipse(xPos, ySpeed, 75, 75);
  ySpeed = ySpeed * 1.02; 

  // supposed to destroy object when it goes below screen. 
  // Haven't figured it out quite yet. 
  if(ySpeed >= 1000)
  {
    xPos = 0; 
    ySpeed = 0; 
  }

}
