 /* Logo v3 by Joseph Hurtado */
	/* use comments to reparate shapes
	circle(0, 0, 100);
	square(0, 0, 100);
	rect(0, 0, 0, 0, 100);
	ellipse(0, 0, 100, 50);
	line(0, 0, 100, 100);
	triangle(0, 0, 100, 100, 50, 50);
	*/
function preload() {
	grapeImage = loadImage('../Images/Grape.png');
}

var bottomText = 'GRAPE';
var shadeStart = 0;
var shadeEnd = 200;
var scaleStart = 200;
var scaleEnd = 270;
var textStart = 280;
var textEnd = 420;
var Int1Start = 500;
var rng;

var speedX = 2;
var speedY = 3;

var centerX = 320;
var centerY = 180;

function setup() {
	createCanvas(640, 360); // (width, height)
	imageMode(CENTER);
	rng = round(random(1,4));
}

function draw() {

	//centerX = mouseX;
	//centerY = mouseY;

	centerDX = centerX;
	centerDY = centerY;

	print(rng)

	//Interactivity
	if (frameCount >= Int1Start) {
		
		gScale = 0.75;

		if (rng == 1) {

			centerX += speedX;
			centerY += speedY;

		} else if (rng == 2) {

			centerX -= speedX;
			centerY += speedY;

		} else if (rng == 3) {

			centerX += speedX;
			centerY -= speedY;

		} else if (rng == 4) {

			centerX -= speedX;
			centerY -= speedY;

		} else {
			print("error, rng =! 1-4")
		}

		if (centerX > width - 70 || centerX < 0 + 75) {
			speedX *= -1;
		}

		if (centerY > height - 70 || centerY < 0 + 93) {
			speedY *= -1;
		}

		/*if (mouseIsPressed) {
			gScale = map(mouseX, 0, width, 0.001, 2, true);
			backShade = map(mouseY, 0, height, 0, 255, true);
			lineX = mouseX;
			lineY = mouseY;
			cTextX = mouseX;
			cTextY = mouseY;
			centerDX = centerX;
			centerDY = centerY;
		} else {
			backShade = 255;
			gScale = 1.25;
			lineX = -100;
			lineY = -100;
			cTextX = -100;
			cTextY = -100;
			centerDX = -100;
			centerDY = -100;
		}*/

	} else {
		len = bottomText.length;
		backShade = map(frameCount, shadeStart, shadeEnd, 0, 255, true);
		letters = map(frameCount, textStart, textEnd, 0, len, true);
		gScale = map(frameCount, scaleStart, scaleEnd, 0.001, 1.25, true);
		//lineX = -100;
		//lineY = -100;
		//cTextX = -100;
		//cTextY = -100;
		//centerDX = -100;
		//centerDY = -100;
	}

	background(backShade);

	//bottom text
	textSize(64 * gScale);
	fill(0);
	stroke(0);
	strokeWeight(3);
	textFont('Pixel');
	textAlign(CENTER, CENTER);
	text(bottomText.substring(0, letters), centerX, centerY + (80 * gScale));

	//image
	image(grapeImage, centerX, centerY - (40 * gScale), 136 * gScale, 162 * gScale);

	//lines
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	//line(0, lineY, width, lineY); // Y
	//line(lineX, 0, lineX, height); // X

	//data interactivity
	/*if (mouseX > width / 2) {
		text1X = RIGHT;
	} else {
		text1X = LEFT;
	}

	if (mouseY > height / 2) {
		text1Y = BOTTOM;
	} else {
		text1Y = TOP;
	}*/

	//data text
	fill(255, 0, 0);
	strokeWeight(0);
	textSize(29);
	//textAlign(text1X, text1Y);
	//text(" Color(" + round(backShade) + "), Size * " + round(gScale) + " ", cTextX, cTextY);

	//Center Dot
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	//point(centerDX, centerDY);
}