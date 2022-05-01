function setup() {
    let img = createImage(800, 600); // same as new p5.Image(800, 600);
    img.loadPixels();
    createCanvas(800, 600);
    background(0);
    
    // color stripe loops, referenced from p5 website. 
    // GREEN & BLUE
    for (let i = 0; i < img.width; i++) 
    {
        for (let j = 0; j < img.height - 300; j++) 
        {
          img.set(i, j, color(0, 200, 102, (i % img.width) * .5));
        }
        for (let z = 0; z < img.height - 450; z++) 
        {
            img.set(i, z, color(0, 90, 102, (i % img.width) * .5));
        }
    }
    // RED
    for (let i = 0; i < img.height; i++) 
    {
        for (let j = 0; j < img.width - 700; j++) 
        {
          img.set(i, j, color(255, 100, 102, (i % img.width) * .5));
        }
    }
      img.updatePixels();
      image(img, 17, 17);
      image(img, 34, 34);

    // helper for writing color to array
    function writeColor(image, x, y, red, green, blue, alpha) 
    {
        let index = (x + y * width) * 4;
        image.pixels[index] = red;
        image.pixels[index + 1] = green;
        image.pixels[index + 2] = blue;
        image.pixels[index + 3] = alpha;
    }
  
    // draw upper border line
    for(y = 0; y < 5; y++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 255, 70, 200, 255);
      }
    }
  
    // draw a bottom border line
    y = img.height - 1;
    for(let i = 0; i < 5; i++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 255, 70, 200, 255);
      }
      y--;
    }
  
    img.updatePixels();
    image(img, 0, 0);
    
    textSize(32);
    text('STAG', 700, 40);
  }