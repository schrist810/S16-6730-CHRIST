var rows = 9;
var cols = 12;
var circleDiameter = 20;
var distanceX = 30;
var distanceY = 30;
function setup()
{
createCanvas(400,300);
background(32, 232, 154);
stroke(150);
for (var r = 1; r<= rows; r++) {
for (var c = 1; c <= cols; c++) {
ellipse(c*distanceX, r*distanceY, circleDiameter, circleDiameter);
}
}
}
