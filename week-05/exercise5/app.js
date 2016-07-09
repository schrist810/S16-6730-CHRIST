var level;
var mySound;
var circleX = 250
var circleY = 250


function preload() {
  mySound= loadSound('beats.wav');
}

function setup () {
  createCanvas(500, 500)
  mySound.setVolume(0.1);
  mySound.play();
}

function draw() {
  level= mySoundgetLevel()
  var diameterX = level * 2500
  var diameterY = level * 2500 * random(1.5)

  ellipse(circleX, circleY, diameterX, diameterY)
}
