var squares = []; 
var x = 50; 
var y = 450; 
var size = 50;

var meteors; 
var meteorsString; 

var sprite_sheet_image; 
var sprite_sheet; 
var run_animation; 

var circles = []; 
var circleX = 200; 
var circleY = 70; 
var circleSize = 100;
 
var timerTime = 0; 
var spawnTime = 5; 

function preload()
{
    // Loading meteor animations so we can call it later. 
    meteorsString = loadStrings('./assets/meteorString.txt'); 
    meteors = loadAnimation('./assets/imgs/meteors/boulder_4.png', './assets/imgs/meteors/boulder_10.png'); 
    console.log('.assets/imgs/meteors/' + meteorsString); 
    
    // Loading character animations so we can call them later. 
    sprite_sheet_idle = loadSpriteSheet('./assets/imgs/character/characterIdle.png', 32, 32, 3); 
    idle_animation = loadAnimation(sprite_sheet_idle); 
    sprite_sheet_run = loadSpriteSheet('./assets/imgs/character/characterRun.png', 32, 32, 4); 
    run_animation = loadAnimation(sprite_sheet_run); 
    
}

function setup()
{
    createCanvas(displayWidth - 30, displayHeight - 140);

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

    // Calling the animations. 
    animation(meteors, 500, 500); 
    animation(idle_animation, 700, 900); 
    

    // console.log(spawnTime); 
    // console.log(floor(random(circles.length))); 

    // Spawing the circle "meteors" at the top of the screen. 
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


