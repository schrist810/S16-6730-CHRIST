var splash;

function setup() {
  createCanvas(720, 882);
  splash = createVideo(['boss.mp4']);
  splash.loop();
  splash.hide();
  noStroke();
  fill(99, 182, 255);
}

function draw() {
  background(255);
  splash.loadPixels();
  var stepSize = round(constrain(mouseX / 5, 10, 42));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - splash.pixels[i*8]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}
