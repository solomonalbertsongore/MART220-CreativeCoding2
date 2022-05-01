var mainColor = 255;
var meteors = []; 
var imgNum = 1; 

function preload()
{
    for(i = 0; i < 10; i++)
    {
        meteors[i] = loadImage('./meteors/boulder_' + imgNum + '.png')
        imgNum = imgNum + 1; 
    }
}

function setup() {
    createCanvas(500, 500);
    background(0);
    frameRate(25);
    noStroke();
    rectMode(CENTER);
}
function draw() {

    // circle(random(width), random(height), size);

    for(i = 0; i < 10; i++)
    {
        image(meteors[i], random(0, 500), random(0, 500)); 
    }

    /*
    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; // 255 0 255 0 255 0 ..
    }
    */
    saveFrames("meteors",".png",1,25);

    if (frameCount > 25) { // 1 second * 25 fps = 25
        noLoop();
    }
}