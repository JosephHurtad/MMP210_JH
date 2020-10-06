 /* Meme v1 by Joseph Hurtado */
	/* use comments to reparate shapes
	circle(0, 0, 100);
	square(0, 0, 100);
	rect(0, 0, 0, 0, 100);
	ellipse(0, 0, 100, 50);
	line(0, 0, 100, 100);
	triangle(0, 0, 100, 100, 50, 50);
	*/
var bottomText = 'GRAPE';
var Gscale = 1.25;

function preload() {
	grapeImage = loadImage('../Images/Grape.png');
}

function setup() {
	createCanvas(640, 360); // (width, height)
	imageMode(CENTER);
}

function draw() {
	background('white');

	centerX = 320;
	centerY = 180;
	//centerX = mouseX;
	//centerY = mouseY;

	//text
	textSize(80);
	fill(0);
	stroke(0);
	strokeWeight(3);
	textFont('Pixel'); //get pixaleted Font ...DOES NOT WORK
	textAlign(CENTER, CENTER);
	text(bottomText, centerX, centerY + 100);

	//image
	image(grapeImage, centerX, centerY - 50, 136 * Gscale, 162 * Gscale); //u can change size by adding 2 more variables

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
