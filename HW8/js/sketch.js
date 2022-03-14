const particles = []; 

var squares = []; 
var x = 50; 
var y = 450; 
var size = 50;

var meteors; 
var meteorsString; 

var character; 
var characterX = 900; 
var characterY = 900; 

// Change this to meteors at some point. This is your p5.play group. 
var boxes; 

var sprite_sheet_idle; 
var idle_animation; 

var sprite_sheet_run; 
var run_animation; 
var run_animationX = 750; 

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

    // Create the character sprite and add animations to it. 
    character = createSprite(characterX, characterY); 
    character.addAnimation('idle', idle_animation); 
    character.addAnimation('run', run_animation);  
    
    // Creates a new group (basically an array) to hold the meteors in. 
    /*
    boxes = new Group(); 

    // Add 5 meteors to the boxes group with the falling animation. 
    for(var z = 0; z<5; z++)
    {
        var newBox = createSprite(random(100, 1000), 875); 
        newBox.addAnimation('falling', meteors); 
        newBox.addToGroup(boxes); 
    }
    */

    setInterval(timer, 1000); 
    setInterval(spawnCircle, 1000); 
    // setInterval(drawCircle, 1000); 
}

function draw()
{   
    background('grey'); 

    // Renders the sprites, and also adds player movement/collision. 
    drawSprites(); 
    // drawSprites(boxes); 
    playerMovement(); 
    // playerCollision(); 
    // drawCircle(); 

    /*
    for (var i = 0; i < circles.length; i++)
    {
        circles[floor(random(circles.length))].drawCircle();
        console.log(circles.length); 
    }
    */

    for (var i = 0; i < circles.length; i++)
    {   
        ellipse(circles[i].getX(), circles[i].getY(), circles[i].getSize());
        // circles[i].setY(y++); 
        // circles[floor(random(circles.length))].drawCircle();
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
        // Changes color every 5 seconds. 
        changeColor(); 
        timerTime = 0; 
    }
}

// Changes things to randcom color. 
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
    }
}

/*
function drawCircle()
{
        // Spawing the circle "meteors" at the top of the screen. 
        for (var i = 0; i < circles.length; i++)
        {
            circles[floor(random(circles.length))].drawCircle();
            console.log(circles.length); 
        }
}
*/

// Player movement using p5.play functions. 
function playerMovement()
{
    if(keyDown('d'))
    {
        character.changeAnimation('run'); 
        character.setSpeed(3, 0); 
        character.mirrorX(1); 
    }
    else if(keyDown('a'))
    {
        character.changeAnimation('run'); 
        character.setSpeed(-3, 0); 
        character.mirrorX(-1); 
    }
    else 
    {
        character.changeAnimation('idle'); 
        character.setSpeed(0, 0);
    }
}

// Checks for player collision against any object in the "boxes" group. 
function playerCollision()
{
    character.collide(boxes); 
}


