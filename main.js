song = "";

function preload(){
    song = loadSound("music.mp3");
}
scoreRightWrist =0;
scoreLeftWrist =0;

rightWristX =0;
rightWristY =0;

leftWristX =0;
leftWristY =0;

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poseNet Is Initialized');
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
rightWristX =results[0].pose.rightWrist.x;
rightWristY =results[0].pose.rightWrist.y;
console.log("rightWristx="+ rightWristX+"rightWristy="+ rightWristY)

leftWristX =results[0].pose.leftWrist.x;
leftWristY =results[0].pose.leftWrist.y;
console.log("leftWristx="+ leftWristX+ "leftWristy="+ leftWristY)
    }
}
function draw(){
    image(video,0,0,600,500);
    fill("#FF0080");
    stroke("#FF0080");
}