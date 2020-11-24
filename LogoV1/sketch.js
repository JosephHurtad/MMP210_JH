 /* Meme v1 by Joseph Hurtado */
	/* use comments to reparate shapes
	circle(0, 0, 100);
	square(0, 0, 100);
	rect(0, 0, 0, 0, 100);
	ellipse(0, 0, 100, 50);
	line(0, 0, 100, 100);
	triangle(0, 0, 100, 100, 50, 50);

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

function preload() {
	grapeImage = loadImage('../Images/Grape.png');
}

var bottomText = 'GRAPE';
var Gscale = 1.25;
//var textStart = 200;
//var textEnd = 340;

function setup() {
	mycanvas = createCanvas(640, 360); // (width, height)
	imageMode(CENTER);
}

function draw() {

//	var len = bottomText.length;
//	var backShade = map(frameCount, 0, textStart, 0, 255);
//	var letters = map(frameCount, textStart, textEnd, 0, len);
	
	background(255);

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