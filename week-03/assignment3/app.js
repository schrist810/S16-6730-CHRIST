var sourceText = "Nothing stays the same   Prepare yourself for changes   Such is life today";
var curIndex = 0;
function setup() {
  createCanvas(400, 400);
  frameRate(4.5);
}
function draw() {
  background(21, 150, 67);
  fill(255);
  textSize(144);
  textAlign(CENTER, CENTER);
  text(
    sourceText.substring(curIndex, curIndex+1),
    width/2, height/2);
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }
}
