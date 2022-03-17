function preload()
{

}

function setup()
{
    createCanvas(1920, 1080, WEBGL) 
}

function draw()
{
    background(40, 70, 100); 

    rotateX(frameCount * .01); 
    rotateY(frameCount * .01); 
    box(100); 

}