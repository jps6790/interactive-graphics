let canDraw = false;
let tool;

function setup(){
    let canvas = document.querySelector("canvas");
    let drawing = document.querySelector("div#drawing");
    canvas.id = "canvas";
    drawing.appendChild(canvas);

    resizeCanvas(600, 400);

    if(document.title.toLowerCase() == "lightning pen"){
        tool = new lightningPen();
    }
    else if(document.title.toLowerCase() == "radial pen"){
        tool = new radialPen();
    }
    else if(document.title.toLowerCase() == "speckle brush"){
        tool = new speckleBrush();
    }
    let toolName = document.querySelector("#tool-selected-name");
    toolName.innerHTML = tool.name;
    let toolDesc = document.querySelector("#tool-selected-desc");
    toolDesc.innerHTML = tool.desc;
}

window.onload = function(){
    canDraw = true;
}

function draw(){      
    if(canDraw){tool.Display();}
}

function keyTyped(){
   tool.keyTyped();
}