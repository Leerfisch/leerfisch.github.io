function setup() {
    zBereich = createCanvas(300, 300);
    zBereich.position((windowWidth / 4) * 3, windowHeight / 5);

}

function draw() {
    background(100);
    textSize(18);
    fill(255);

    text("mouseIsPressed: " + mouseIsPressed, 20, 20);
    text("mouseButton: " + mouseButton, 20, 40);
    text("mouseX: " + mouseX, 20, 60);
    text("mouseY: " + mouseY, 20, 80);
    text("pmouseX: " + pmouseX, 20, 100);
    text("pmouseY: " + pmouseY, 20, 120);
    text("winMouseX: " + winMouseX, 20, 140);
    text("winMouseY: " + winMouseY, 20, 160);
    text("movedX: " + movedX, 20, 180);
    text("movedY: " + movedY, 20, 200);
    text("keyIsPressed: " + keyIsPressed, 20, 220);
    text("key: " + key, 20, 240);
    text("keyCode: " + keyCode, 20, 260);
}

function keyPressed() {
    console.log("keyPressed: " + key);
}

function keyReleased() {
    console.log("keyReleased: " + key);
}

function keyTyped() {
    console.log("keyTyped: " + key);
}

function mousePressed() {
    console.log("mousePressed");
}

function mouseReleased() {
    console.log("mouseReleased");
}

function mouseClicked() {
    console.log("mouseClicked");
}

function mouseMoved() {
    console.log("mouseMoved");
}

function mouseDragged() {
    console.log("mouseDragged");
}

function mouseWheel() {
    console.log("mouseWheel");
}