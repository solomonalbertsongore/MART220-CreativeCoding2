class cubeObject 
{
    constructor(boxX, boxY, boxZ, boxSize)
    {
        this.boxX = boxX; 
        this.boxY = boxY; 
        this.boxZ = boxZ; 
        this.boxSize = boxSize; 
    }
    
    drawCube()
    {   
        box(this.boxSize); 
    }

    translateCube()
    {
        translate(this.boxX, this.boxY, this.boxZ); 
    }
}