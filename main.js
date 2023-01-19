function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

}


function draw(){
image(video,0,0,300,300);
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on("pose",got_poses);
}

function modelloaded(){
    console.log("poseNet Loaded");
}


function got_poses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x= ");
        console.log("nose y= ");
    }
}

function preload(){

}


function takesnapshot(){
save("HimanshuVyas.png");
}