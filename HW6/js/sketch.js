var squares = []; 
var x = 50; 
var y = 50; 
var size = 50; 
var timerTime = 0; 

function setup()
{
    createCanvas(displayWidth - 30, displayHeight - 140);

    for(i = 0; i < 100; i++)
    {
        squares.push(new squareClass(x, y, size));
        x += 5; 
        y += 5; 
        size += 5; 
    }

    setInterval(changeColor, 1000); 
}

function draw()
{   
    background('grey'); 

    fill('red');

    for (var i = 0; i < 75; i++)
    { 
        squares[i].drawSquare(); 
    }
}

function timer() 
{
    if (timerTime >= 5)
    {
        timerTime++; 
        changeColor(); 
    }
    else 
    {
        timerTime = 0; 
    }
}

function changeColor() 
{
    fill (random(0, 255), random(0, 255), random(0, 255));
}

