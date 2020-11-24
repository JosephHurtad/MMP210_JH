 /* Sound v1 by Joseph Hurtado */
	/* use comments to reparate shapes
	circle(0, 0, 100);
	square(0, 0, 100);
	rect(0, 0, 0, 0, 100);
	ellipse(0, 0, 100, 50);
	line(0, 0, 100, 100);
	triangle(0, 0, 100, 100, 50, 50);

	//gif stuff 0.5
	
function mousePressed () {
  saveCanvas(mycanvas,"screenshot","png");
}

	//gif stuff

	mycanvas = createCanvas(640, 360); // (width, height)

	var iteration = 0;

	if (frameCount > 200 && frameCount < 800) {
	formatted_number = FormatNumberLength(iteration-90,4);
	saveCanvas(mycanvas,"screenshot"+formatted_number,"png");

	iteration += 1;
	}
	print(frameCount);
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}
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

var rng;
var number;

var CDrate = 3;
var CSWrate = 0.2;

var mX1, mY1, mX2, mY2, mX3, mY3, mX4, mY4, mX5, mY5, mX6, mY6, mX7, mY7, mX8, mY8; 
var R1, G1, B1, R2, G2, B2, R3, G3, B3, R4, G4, B4, R5, G5, B5, R6, G6, B6, R7, G7, B7, R8, G8, B8;
var CD1, CD2, CD3, CD4, CD5, CD6, CD7, CD8;
var CSW1, CSW2, CSW3, CSW4, CSW5, CSW6, CSW7, CSW8;

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
	number = 0;
}

var centerX = 320;
var centerY = 180;

var iteration = 0;

function setup() {
	mycanvas = createCanvas(640, 360); // (width, height)
}

function draw() {

	background(255);

	//centerX = mouseX;
	//centerY = mouseY;

	//expanding circles

	noFill();


		stroke(R1, G1, B1);
		strokeWeight(CSW1);
		circle(mX1, mY1, CD1)
		CD1 += CDrate;
		CSW1 += CSWrate;

		stroke(R2, G2, B2);
		strokeWeight(CSW2);
		circle(mX2, mY2, CD2)
		CD2 += CDrate;
		CSW2 += CSWrate;

		stroke(R3, G3, B3);
		strokeWeight(CSW3);
		circle(mX3, mY3, CD3)
		CD3 += CDrate;
		CSW3 += CSWrate;

		stroke(R4, G4, B4);
		strokeWeight(CSW4);
		circle(mX4, mY4, CD4)
		CD4 += CDrate;
		CSW4 += CSWrate;

		stroke(R5, G5, B5);
		strokeWeight(CSW5);
		circle(mX5, mY5, CD5)
		CD5 += CDrate;
		CSW5 += CSWrate;

		stroke(R6, G6, B6);
		strokeWeight(CSW6);
		circle(mX6, mY6, CD6)
		CD6 += CDrate;
		CSW6 += CSWrate;

		stroke(R7, G7, B7);
		strokeWeight(CSW7);
		circle(mX7, mY7, CD7)
		CD7 += CDrate;
		CSW7 += CSWrate;

		stroke(R8, G8, B8);
		strokeWeight(CSW8);
		circle(mX8, mY8, CD8)
		CD8 += CDrate;
		CSW8 += CSWrate;

	//Center Dot
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	//point(centerX, centerY);
}

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function mousePressed() {

	number += 1;

	if (number == 1) {
		R1 = random(0, 255)
		G1 = random(0, 255)
		B1 = random(0, 255)
		mX1 = mouseX;
		mY1 = mouseY;
		CD1 = 0;
		CSW1 = 0;
	} else if (number == 2) {
		R2 = random(0, 255)
		G2 = random(0, 255)
		B2 = random(0, 255)
		mX2 = mouseX;
		mY2 = mouseY;
		CD2 = 0;
		CSW2 = 0;
	} else if (number == 3) {
		R3 = random(0, 255)
		G3 = random(0, 255)
		B3 = random(0, 255)
		mX3 = mouseX;
		mY3 = mouseY;
		CD3 = 0;
		CSW3 = 0;
	} else if (number == 4) {
		R4 = random(0, 255)
		G4 = random(0, 255)
		B4 = random(0, 255)
		mX4 = mouseX;
		mY4 = mouseY;
		CD4 = 0;
		CSW4 = 0;
	} else if (number == 5) {
		R5 = random(0, 255)
		G5 = random(0, 255)
		B5 = random(0, 255)
		mX5 = mouseX;
		mY5 = mouseY;
		CD5 = 0;
		CSW5 = 0;
	} else if (number == 6) {
		R6 = random(0, 255)
		G6 = random(0, 255)
		B6 = random(0, 255)
		mX6 = mouseX;
		mY6 = mouseY;
		CD6 = 0;
		CSW6 = 0;
	} else if (number == 7) {
		R7 = random(0, 255)
		G7 = random(0, 255)
		B7 = random(0, 255)
		mX7 = mouseX;
		mY7 = mouseY;
		CD7 = 0;
		CSW7 = 0;
	} else if (number == 8) {
		R8 = random(0, 255)
		G8 = random(0, 255)
		B8 = random(0, 255)
		mX8 = mouseX;
		mY8 = mouseY;
		CD8 = 0;
		CSW8 = 0;
	} else if (number == 9) {
		R1 = random(0, 255)
		G1 = random(0, 255)
		B1 = random(0, 255)
		mX1 = mouseX;
		mY1 = mouseY;
		CD1 = 0;
		CSW1 = 0;
		number = 1;
	}

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
