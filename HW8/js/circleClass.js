class circleClass 
{
    constructor(x, y, size)
    {
        this.x = x; 
        this.y = y; 
        this.size = size; 
    }

    getX()
    {
        return this.x; 
    }
    
    setX(x)
    {
       this.x = x;  
    }
    
    getY()
    {
        return this.y; 
    }

    setY(y)
    {
        this.y = y; 
    }

    getSize()
    {
        return this.y; 
    }

    drawCircle()
    {   
        //draw()
        //{
            circle(this.x, this.y, this.size);
        //}
    }
}