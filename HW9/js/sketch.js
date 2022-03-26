var boxes = []; 
var boxX = -240; 
var boxY = -100; 
var boxZ = 0; 

function preload()
{
  for(i = 0; i < 3; i++)
  {
    boxes.push(new cubeObject(random(10, 90), random(10, 90), 90, boxX, boxY)); 
  }
}

function setup()
{
    createCanvas(1920, 1080, WEBGL) 
}

function draw()
{ 
    background(40, 70, 100); 

    // noStroke(); 
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, 0, 0, 50);
    specularMaterial(250);
    translate(-25, 0, 0);
    shininess(20);

    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    
    for(i = 0; i < 3; i++)
    {
      boxes[i].drawCube();
      boxes[i].translateCube(); 
      boxX += 5; 
    }
    pop();

    push(); 

    noStroke(); 
    
    translate(200, 200, 0); 

    rotateZ(frameCount * 0.01); 
    rotateX(frameCount * 0.01); 

    ellipsoid(30, 30, 40); 

    pop(); 
}