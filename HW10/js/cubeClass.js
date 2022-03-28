class cubeObject 
{
    constructor(boxWidth, boxHeight, boxDepth, boxX, boxY)
    {
        this.boxWidth = boxWidth; 
        this.boxHeight = boxHeight; 
        this.boxDepth = boxDepth; 
        this.boxX = boxX; 
        this.boxY = boxY; 
        this.boxZ = boxZ; 
    }
    
    drawCube()
    {
        box(this.boxWidth, this.boxHeight, this.boxDepth); 
    }

    translateCube()
    {
        translate(this.boxX, this.boxY); 
    }
}