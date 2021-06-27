noseX = 0;
noseY = 0;

function preload(){
   clown_nose = loadImage("https://i.postimg.cc/9MGZGxTK/red-nose.png");
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);

poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    console.log("nose x = "+ noseX);
    console.log("nose y = " + noseY);
    noseX = results[0].pose.nose.x-160;
    noseY = results[0].pose.nose.y-115;

    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot(){
    save("photo.jpeg");
}