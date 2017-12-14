function speckleBrush(){
    this.name = "Speckle Brush";
    this.desc = "The Speckle Brush creates a mesmerizing splash of vibrant spots of color that compress as they expand outward, quite paradoxically. Press 'C' to clear.";

    this.hueVal = 0;
    
    background(0);

    this.Display = function(){
        colorMode(HSB,255,100,100,100);
        noStroke();
        fill(this.hueVal,100,100);
        this.hueVal++
        if(this.hueVal>255){this.hueVal = 0;}
        this.xOff = random(-20,20);
        this.yOff = random(-20,20);
        ellipse(mouseX+this.xOff,mouseY+this.yOff,10-(abs(this.xOff)*.5),10-(abs(this.yOff)*.5));
    }

    this.keyTyped = function(){
        if(key.toLowerCase()=='c'){
            background(0);
        }
    }
}