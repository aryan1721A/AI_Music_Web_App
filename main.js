song="";
song1="";
rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";
function setup(){
    video=createCapture(VIDEO);
    video.hide();

    canvas=createCanvas(600,500);
    canvas.center();
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on("pose",gotPoses);
}

function modalLoaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left Wrist X = "+leftWristX+"Left Wrist Y = "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right Wrist X = "+rightWristX+"Right Wrist Y = "+rightWristY)
    }
}
function preload(){
    song=loadSound("despacito.mp3");
    song1=loadSound("hartypotter.mp3");
}
function draw(){
    image(video,0,0,600,500)
}
