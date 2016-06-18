var y;
var num = 16;

function setup() {

  createCanvas(640, 360);
  background(255, 237, 110);
  noStroke();

  // White bars
  fill(255);
  y = 60;
  for(var i = 0; i < num/3; i++) {
    rect(50, y, 475, 10);
    y+=50;
  }

  // Thin lines
  y = 45;
  fill(0, 141, 255);
  for(var i = 0; i < num-1; i++) {
    rect(120, y, 40, 1);
    y+= 20;
  }
}
