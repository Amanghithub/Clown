var nose_x=10;
var nose_y=10;
var left_eye_x=0;
var left_eye_y=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/QtBGqmFY/4999-sticker-of-clown-wig-and-nose-for-ur-photos-removebg-preview.png");
//goggles=loadImage("https://i.postimg.cc/sfKJ3z1z/sunglasses-removebg-preview.png");
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    camera=createCapture(VIDEO);
    camera.size(300, 300);
    camera.hide();

    poseNet=ml5.poseNet(camera, modelLoaded);
    poseNet.on("pose",getPoses);
}

function draw(){
    image(camera,0,0,300,300);
    
    image(clown_nose,nose_x,nose_y,250,260);
    //image(goggles,left_eye_x,left_eye_y,80,60);
}

function take_snapshot(){
    save("RealgramClown.png");
}

classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("Pose net is loaded");
}

function getPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
        console.log("eye x = "+results[0].pose.leftEye.x);
        console.log("eye y = "+results[0].pose.leftEye.y);

        nose_x=results[0].pose.nose.x-120;
        nose_y=results[0].pose.nose.y-160;
        //
    }
}
