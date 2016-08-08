function setup() {
  createCanvas(800, 400);
  fill(255, 0, 0);
}
function draw() {
  background(171, 232, 200);
  fill(random(255));
  textSize(150);
  text("Stay Close",
    mouseX, mouseY, 200, 200);
}
