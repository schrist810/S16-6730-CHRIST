function setup() {
  createCanvas(1240, 860);
}

var myVar;

function myFunction() {
    myVar = setInterval(alertFunc, 5000);
}

function alertFunc() {
  alert("5 seconds have passed");


}
