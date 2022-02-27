var squares = []; 
var x = 50; 
var y = 450; 
var size = 50;

var circles = []; 
var circleX = 200; 
var circleY = 70; 
var circleSize = 100;
 
var timerTime = 0; 
var spawnTime = 5; 

function setup()
{
    createCanvas(displayWidth - 30, displayHeight - 140);

    for(i = 0; i < 100; i++)
    {
        squares.push(new squareClass(x, y, size));
        x += 100; 
        // y += 50; 
         size -= 5; 
    }

    for(i = 0; i < 1; i++)
    {
        circles.push(new circleClass(random(0, 1900), circleY, random(15, 75)))
    }


    setInterval(timer, 1000); 
    setInterval(spawnCircle, 1000); 
}

function draw()
{   
    background('grey'); 

    // spawnCircle(); 

    for (var i = 0; i < 20; i++)
    { 
        squares[i].drawSquare(); 
    }
    

    // console.log(spawnTime); 
    // console.log(floor(random(circles.length))); 

    for (var i = 0; i < circles.length; i++)
    {
        circles[floor(random(circles.length))].drawCircle();
        console.log(circles.length); 
    }
}

function timer() 
{
    if (timerTime < 5)
    {
        timerTime++; 
    }
    else if (timerTime >= 5)
    {
        changeColor(); 
        // spawnCircle(); 
        timerTime = 0; 
    }
}

function changeColor() 
{
    fill (random(0, 255), random(0, 255), random(0, 255));
}

function spawnCircle()
{
    if (spawnTime > 0)
    {
        spawnTime--; 
    }
    else if (spawnTime <= 0)
    {
        circles.push(new circleClass(random(0, 1900), circleY, random(15, 75)));
        spawnTime = 5; 
        // console.log("I am here"); 
    }
    // circles[floor(random(circles.length))].drawCircle();
}

