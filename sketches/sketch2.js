let zBereich;
let speed;
let durchmesser;
let x;
let y;
let red;
let blue;

function setup() {
    //createCanvas(800, 600);
    //background(0); Ohne background() = "transparent"!!
    zBereich = createCanvas(windowWidth / 8, windowHeight / 4);
    //windowWidth und windowHeight sind die Werte des Browserfensters und
    //werden von dort (API) abgefragt
    zBereich.position(windowWidth / 4, windowHeight / 5);
    speed = 3;
    durchmesser = 20;
    x = 10;
    y = 100;
    red = 100;
    blue = 100;

}

function draw() {
    background(100);
    textSize(10);
    text("frameCount: " + frameCount, 20, 50);
    text("Maus gedrückt? " + mouseIsPressed, 20, 20);
    if (mouseX < 200 || mouseX > 300) {
        red = 0;
    } else {
        red = 255;
    }
    if (mouseIsPressed && mouseY > 100) {
        blue = 255;
    }


    fill(red, 0, blue);
    x = x + speed;
    if (x > windowWidth / 4 || x < 0) {
        speed = speed * -1;
    }
    circle(x, y, durchmesser);

}

function mousePressed() {

}