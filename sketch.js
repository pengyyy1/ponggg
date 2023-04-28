var xBall = Math.floor((Math.random() * 1000) + 0);
var yBall = 50;
var xSpeed = Math.floor((Math.random() * -20) + 20);
var ySpeed = Math.floor((Math.random() * (20)) - 20);
var score = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}


function draw() {

  background(0);

  fill('white');
  rectMode(CENTER);
  rectMode(TOP);
  rect(mouseX, height/1.2, width/7, height/35);

  bounce();
  move();
  ball();
  paddle();
  reset()

  textSize((width+height)/60);
  fill('white');
  textFont("Bungee");
  text("Score: " + score, width/30, height/12);
}

function ball() {
  fill('white');
  ellipse(xBall, yBall, (width+height)/70, (width+height)/70);
}

function paddle() {
  if (((yBall/2+width/35)-(width+height)/140 >= height/1.2) && (xBall > mouseX-width/14 && xBall < mouseX+width/14)) {
    xSpeed *= -1;
    ySpeed *= -1;
    score = score+1;
  }
  else {

  }
}

function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}


function bounce() {

  if (xBall > width) {
    xSpeed *= -1;
  }

  if (xBall < 0) {
    xSpeed *= -1;
    console.log(xSpeed);
  }

  if (yBall < 10) {
    ySpeed *= -1;
  }
}

function reset() {
 if (yBall >= height/1.2+height/35) {
 ySpeed = 4;
 yBall = height/8;
 score = 0;
 xBall = Math.floor(Math.random() * 300) + 50;
 }
}
