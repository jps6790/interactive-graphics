function lightningPen(){
    this.name = "Lightning Pen";
    this.desc = "Lightning Pen description...";

    this.xOff;
    this.yOff;
    this.red = 255;
    this.green = 255;
    this.blue = 0;

    let timer = 0;

    background(0);

    this.Display = function(){
        background(0,1);
        colorMode(RGB,255,255,255,100);
        if((timer%120)==0){
            this.red+=30;
            this.green+=80;
            this.blue+=120;
        }
        this.red=this.red%255;
        this.green=this.green%255;
        this.blue=this.blue%255;
        stroke(this.red,this.green,this.blue);
        this.xOff = random(random(random(-100,-10),0),random(0,random(10,100)));
        this.yOff = random(random(random(-100,-10),0),random(0,random(10,100)));
        for(let i = 0; i < 4; i++){
            line(mouseX,mouseY,mouseX+this.xOff,mouseY+this.yOff);
            line(mouseX+this.xOff,mouseY+this.yOff,mouseX+this.xOff+(this.yOff*.4),pmouseY+this.yOff+(this.xOff*.4));
        }
        timer++;
    }

    this.keyTyped = function(){
        if(key.toLowerCase()=='c'){
            background(0);
        }
    }
}
