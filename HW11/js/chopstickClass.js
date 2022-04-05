class Chopstick
{
    constructor(cModel, cTexture, cX, cY, cZ, cScale)
    {   
        this.cModel = cModel; 
        this.cTexture = cTexture; 
        this.cX = cX;   
        this.cY = cY; 
        this.cZ = cZ; 
        this.cScale = cScale; 
    }

    drawChopstick()
    {
        translate(this.cX, this.cY, this.cZ); 
        scale(this.cScale); 
        texture(this.cTexture); 
        model(this.cModel);
    }
}