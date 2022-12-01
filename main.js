function preload(){
}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video,0,0,640,480);
    fill("red");
    stroke("red");
    circle(30,30,60);
    circle(30,450,60);
    circle(610,30,60);
    circle(610,450,60);
    fill("green");
    stroke("green");
    square(60,20,520,20);
    square(60,440,520,20);
    square(20,60,20,360);
    square(600,60,20,360);
}

function take_snapshot(){
    save('student_name.png');
}
