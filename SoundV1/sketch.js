 /* Sound v1 by Joseph Hurtado */
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
var sound6;// Ask prof how to keep circles from disapearing!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var sound7;
var sound8;
var sound9;

var rng;

var mX, mY, CR, CG, CB;
var CD = 0;
var CSW = 0;

function preload() {
	sound1 = loadSound('Sounds/Hit_hurt6.wav');
	sound2 = loadSound('Sounds/Random1.wav');
	sound3 = loadSound('Sounds/Default1.wav');
	sound4 = loadSound('Sounds/Default2.wav');
	sound5 = loadSound('Sounds/Blip_select17.wav');
	sound6 = loadSound('Sounds/Blip_select19.wav');
	sound7 = loadSound('Sounds/Blip_select21.wav');
	sound8 = loadSound('Sounds/Blip_select25.wav');
	sound9 = loadSound('Sounds/Blip_select28.wav');
	rng = round(random(1,9));
}

var centerX = 320;
var centerY = 180;

function setup() {
	createCanvas(640, 360); // (width, height)
}

function draw() {

	background(255);

	//centerX = mouseX;
	//centerY = mouseY;

	//expanding circle
	noFill();
	stroke(CR, CG, CB);
	strokeWeight(CSW);
	circle(mX, mY, CD)

	CD += 3;
	CSW += 0.2;

	//Center Dot
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	//point(centerX, centerY);
}


function mousePressed() {

	mX = mouseX;
	mY = mouseY;
	CD = 0;
	CSW = 0;
	CR = random(0, 255);
	CG = random(0, 255);
	CB = random(0 ,255);

	if (rng == 1) {
		sound1.play();
	} else if (rng == 2) {
		sound2.play();
	} else if (rng == 3) {
		sound3.play();
	} else if (rng == 4) {
		sound4.play();
	} else if (rng == 5) {
		sound5.play();
	} else if (rng == 6) {
		sound6.play();
	} else if (rng == 7) {
		sound7.play();
	} else if (rng == 8) {
		sound8.play();
	} else if (rng == 9) {
		sound9.play();
	}
}

function keyPressed () {
	if (keyCode == 32) {
		rng = round(random(1,9));
	}
}
