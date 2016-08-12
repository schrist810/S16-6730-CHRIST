var sourceText = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var words = sourceText.split(" ");
function setup() {
  createCanvas(800, 600);
  noLoop();
  var button = createButton("stir");
  button.mousePressed(resetSketch);
  button.position(250, 35);
}
function resetSketch (){
    background(260, 133, 125);
    textSize(150);
    textAlign(CENTER, CENTER);
    for (var i = 0; i < words.length; i++) {
      fill(random(255, 133, 125));
      text(words[i], random(width), random(height));
    }

}
function draw() {
  background(255, 133, 125);
  textSize(150);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < words.length; i++) {
    fill(random(255, 133, 125));
    text(words[i], random(width), random(height));
  }
}
