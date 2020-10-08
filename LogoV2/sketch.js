 /* Meme v1 by Joseph Hurtado */
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
var textStart = 280;
var textEnd = 420;
var scaleStart = 200;
var scaleEnd = 270;

function setup() {
	createCanvas(640, 360); // (width, height)
	imageMode(CENTER);
}

function draw() {

	var len = bottomText.length;
	var backShade = map(frameCount, shadeStart, shadeEnd, 0, 255, true);
	var letters = map(frameCount, textStart, textEnd, 0, len, true);
	var gScale = map(frameCount, scaleStart, scaleEnd, 0.001, 1.25, true);

	background(backShade);

	centerX = 320;
	centerY = 180;
	//centerX = mouseX;
	//centerY = mouseY;

	//text
	textSize(80);
	fill(0);
	stroke(0);
	strokeWeight(3);
	textFont('Pixel');
	textAlign(CENTER, CENTER);
	text(bottomText.substring(0, letters), centerX, centerY + 100);

	//image
	image(grapeImage, centerX, centerY - 50, 136 * gScale, 162 * gScale);

	//nothing
	noFill();
	stroke(0, 0, 0);
	strokeWeight(3);
	line();

	//Center Dot
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	//point(centerX, centerY)

}
