//Ball Malerei
let zBereich;
let r = 255;
let g = 80;
let b = 0;
zaehler = 1;

function setup() {
  //createCanvas(800, 600);
  //background(0); Ohne background() = "transparent"!!
  zBereich = createCanvas(windowWidth, windowHeight);
  //windowWidth und windowHeight sind die Werte des Browserfensters und
  //werden von dort (API) abgefragt
  zBereich.position(0, 0); //Links oben
  zBereich.style('z-index', '-1'); // Verschiebung auf der z-Achse


}

function draw() {
  noStroke();
  fill(mouseX, 255 - mouseY, mouseY - mouseX, 20);
  circle(mouseX, mouseY, sin(millis() / 2000) * 50 + 30);
}

function mousePressed() {
  background(0);
}