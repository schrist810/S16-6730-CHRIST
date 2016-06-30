function setup() {
  createCanvas(1240, 860);
}

function draw() {

  setTimeout(function(){if (mouseIsPressed) {
    fill(12, 232, 144);
  } else {
    fill(12, 170, 232);
    noStroke();
  }
  ellipse(mouseX, mouseY, 10, 10);
}, 3000)
}
