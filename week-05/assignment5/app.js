var song;

function preload() {

  song = loadSound('hiphop.wav');
}

function setup() {
  createCanvas(710, 400);

  song.loop();
}

function draw() {
  background(159, 244, 255);

  var volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  song.amp(volume);


  var speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);

  stroke(159, 244, 255);
  fill(38, 82, 150);
  ellipse(mouseX, 100, 90, 90);
  stroke(159, 244, 255);
  fill(112, 170, 232);
  ellipse(100, mouseY, 50, 50);
}
