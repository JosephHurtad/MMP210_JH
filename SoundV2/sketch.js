 /* Sound v2 by Joseph Hurtado */
	/* use comments to reparate shapes
	circle(0, 0, 100);
	square(0, 0, 100);
	rect(0, 0, 0, 0, 100);
	ellipse(0, 0, 100, 50);
	line(0, 0, 100, 100);
	triangle(0, 0, 100, 100, 50, 50);
	*/
var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;
var sound8;
var sound9;

function preload() {
	sound1 = loadSound('Sounds/Powerup1.wav');
	sound2 = loadSound('Sounds/Powerup2.wav');
	sound3 = loadSound('Sounds/Powerup3.wav');
	sound4 = loadSound('Sounds/Powerup4.wav');
	sound5 = loadSound('Sounds/Powerup5.wav');
	sound6 = loadSound('Sounds/Powerup6.wav');
	sound7 = loadSound('Sounds/Powerup7.wav');
	sound8 = loadSound('Sounds/Powerup8.wav');
	sound9 = loadSound('Sounds/Powerup9.wav');
}

var centerX = 320;
var centerY = 180;

function setup() {
	mycanvas = createCanvas(640, 360); // (width, height)
}

function draw() {

	background(100);

	//centerX = mouseX;
	//centerY = mouseY;

	//buttons
	musicButton(centerX - 95, centerY - 95, 90, sound2, 1);
	musicButton(centerX + 95, centerY - 95, 90, sound3, 2);
	musicButton(centerX + 95, centerY + 95, 90, sound4, 3);
	musicButton(centerX - 95, centerY + 95, 90, sound5, 4);
	musicButton(centerX - 120, centerY, 90, sound6, 5);
	musicButton(centerX + 120, centerY, 90, sound7, 6);
	musicButton(centerX, centerY - 120, 90, sound8, 7);
	musicButton(centerX, centerY + 120, 90, sound9, 8);
	musicButton(centerX, centerY, 90, sound1, 0);

	//Center Dot
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	//point(centerX, centerY);
}

function musicButton(x, y, s, sound, b) {
	stroke(0);
	strokeWeight(15);
	line(x, y, centerX, centerY);
	
	var d = dist(x, y, mouseX, mouseY);
	
	if (d < s / 2) {
		fill('blue')

		if (mouseIsPressed && !sound.isPlaying()) {
			sound.play();
			if (b == 1) {
				x = x - 15
				y = y - 15
			} else if (b == 2) {
				x = x + 15
				y = y - 15
			} else if (b == 3) {
				x = x + 15
				y = y + 15
			} else if (b == 4) {
				x = x - 15
				y = y + 15
			} else if (b == 5) {
				x = x - 15
			} else if (b == 6) {
				x = x + 15
			} else if (b == 7) {
				y = y - 15
			} else if (b == 8) {
				y = y + 15
			} else if (b == 0) {
				s = s + 20
			}
		}

	} else {
		fill(255)
	}
	stroke(0)
	strokeWeight(8);
	circle(x, y, s);
}