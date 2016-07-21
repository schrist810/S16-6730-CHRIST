function setup() {
  createCanvas(800, 500);
  background(50);
}
function draw() {
  stroke(random(255), random(255), random(255), random(255));
  strokeWeight(2);
  ellipse(mouseX, mouseY, 45, 45);
  fill(random(255), random(255), random(255), random(255));

}
