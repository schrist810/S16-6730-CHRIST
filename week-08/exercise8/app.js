var img;

function preload() {
  img = loadImage("coolcat.jpg")
}

function setup() {
  var c = createCanvas(800, 500)
  c.parent('containter')

  image(img, 0, 0, 800, 500)
}

function draw() {

}
