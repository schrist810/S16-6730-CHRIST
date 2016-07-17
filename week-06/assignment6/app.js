var xspacing = 10;
var w;
var theta = 0.0;
var amplitude = 25.0;
var period = 200.0;
var dx;
var yvalues;

function setup() {
  createCanvas(710, 400);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(170, 232, 138);
  calcWave();
  renderWave();
}

function calcWave() {

  theta += 0.07;


  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  fill(0);
  strokeWeight(2);
  stroke(232, 69, 42)
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 25, 25);
  }
}
