function setup() {
  createCanvas(800, 400);
}
function draw() {
  background(170, 209, 255);
  strokeWeight(2);
  fill(124, 182, 255 + sin(frameCount*0.03) * 35);
  textSize(12 + (mouseX / width)*72);
  text("Just breathe....", 50, 200);
}
