function radialPen(){
    this.name = "Radial Pen";
    this.desc = "The Radial Pen is a most respectable instrument; consistent with a little flair and an excellent Venn diagram artist. Press 'C' to clear.";

    this.w = 0;
    this.h = 0;
    this.grow = true;

    background(255);

    this.Display = function(){
        colorMode(RGB,255,255,255,100);
        background(255,1);
        noFill();
        stroke(0);
        if(this.w>100){this.grow = false;}
        else if(this.w<0){this.grow = true;}
        if(this.grow){
            this.w+=.5;
            this.h+=.5;
        }
        else if(!this.grow){
            this.w-=.5;
            this.h-=.5;
        }
        ellipse(mouseX,mouseY,this.w,this.h);
    }

    this.keyTyped = function(){
        if(key.toLowerCase()=='c'){
            background(255);
        }
    }
}