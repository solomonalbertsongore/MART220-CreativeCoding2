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
        x += 50; 
        y += 50; 
         size -= 5; 
    }

    setInterval(timer, 1000); 
}

function draw()
{   
    background('grey'); 

    changeColor();

    for (var i = 0; i < 25; i++)
    { 
        squares[i].drawSquare(); 
    }

    console.log(timerTime); 
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
        timerTime = 0; 
    }
}

function changeColor() 
{
    fill (random(0, 255), random(0, 255), random(0, 255));
}

