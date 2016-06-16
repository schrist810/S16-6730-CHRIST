var a = 200;
var b = 40;
var c = 30;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);
  fill(252, 108, 133);
  noStroke();

for (var i = 0; i < 11; i++) {
    ellipse(a + (b * i), c, 30, 30);
  }
}
