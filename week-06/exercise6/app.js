var pos;

function setup() {
  createCanvas(500, 500)
  angleMode(DEGREES)

  pos = 0.0
  inc = 3.0

}

function draw() {

  clear()
  translate(width/2, height/2)
  var mySinVal = sin(pos)

  amplified = mySinVal * 50

  for (x = 0; x <= 360; x = x + 10) {
    fill(45, 82, 150);
    ellipse(amplified, 200, amplified, amplified)
    rotate(x)
  }

  pos = pos + inc
}
