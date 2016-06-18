function setup() {

  createCanvas(720, 360);
  background(0, 182, 255);
  noStroke();

  var gridSize = 15;

  for (var x = gridSize; x <= width - gridSize; x += gridSize) {
    for (var y = gridSize; y <= height - gridSize; y += gridSize) {
      noStroke();
      fill(255);
      rect(x-1, y-1, 3, 3);
      stroke(0, 141, 235);
      line(x, y, width/1, height/1);
    }
  }

}
