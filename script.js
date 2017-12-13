function setup(){
    let canvas = document.querySelector("canvas");
    let drawing = document.querySelector("div#drawing");
    canvas.id = "canvas0";
    drawing.appendChild(canvas);

    resizeCanvas(600, 400);

}

function draw(){
    background("#FFFFFF");
}