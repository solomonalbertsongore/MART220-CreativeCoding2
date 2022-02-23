class imageClass
{
    constructor(path, x, y)
    {
        this.path = path; 
        this.x = x; 
        this.y = y; 
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage; 
        // myImage.resize(125, 125); 
    }
    getX()
    {
        return this.x; 
    }
    getY()
    {
        return this.y; 
    }
}