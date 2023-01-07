Status= "";
input_text="";

function setup(){
    canvas = createCanvas(580,480);
    canvas.position(460, 255);
    video = createCapture(VIDEO);
    video.size(580,480)
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modleloaded);
    document.getElementById("Status").innerHTML = "status : Detecting object";
    input_text = documet.getElementById("input_id").value;
}

function modleloaded(){
    console.log("modelloaded");
    Status = true;
}

function draw(){
    image(video, 0, 0, 580, 480);
}