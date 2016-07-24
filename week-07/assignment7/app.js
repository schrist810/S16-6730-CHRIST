var xspacing = 10;
var w;
var theta = 0.0;
var amplitude = 25.0;
var period = 200.0;
var dx;
var yvalues;

var totalPts = 600;
var steps = totalPts + 1;

function setup() {
  createCanvas(710, 400);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(232, 213, 146);
  calcWave();
  renderWave();
  var rand = 0;
  for  (var i = 2; i < steps; i++) {
    point( (width/steps) * i, (height/2) + random(-rand, rand) );
    rand += random(-30, 30);
  }
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
