var sourceText = "expand & contract";
function setup() {
  createCanvas(400, 200);
  frameRate(50);
}
function draw() {
  background(122, 122, 122);
  fill(117, 218, 229);
  textSize(40);
  textAlign(CENTER, CENTER);
  var middle = sourceText.length / 1;
  var left = middle - ((mouseX / width) * middle);
  var right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
}
