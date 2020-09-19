 /* Self Portrait v1 by Joseph Hurtado */
	/* use comments to reparate shapes
	circle(0, 0, 100);
	square(0, 0, 100);
	rect(0, 0, 0, 0, 100);
	ellipse(0, 0, 100, 50);
	line(0, 0, 100, 100);
	triangle(0, 0, 100, 100, 50, 50);
	*/


var WholeheadX = 320;
var WholeheadY = 190;

var HeadR = 198;
var HeadG = 150;
var HeadB = 102;

var EyesR = 255;
var EyesG = 255;
var EyesB = 255;

var MouthR = 0;
var MouthG = 0;
var MouthB = 0;

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background ('white');

	//WholeheadX = mouseX
	//WholeheadY = mouseY

	//Wholehead
	//head
	stroke('black')
	fill(HeadR, HeadG, HeadB);
	strokeWeight(4);
	ellipse(WholeheadX, WholeheadY, 210, 310);
	//eyes
	stroke('black');
	fill(EyesR, EyesG, EyesB);
	strokeWeight(2);
	ellipse(WholeheadX - 60, WholeheadY - 30, 90, 40);
	ellipse(WholeheadX + 60, WholeheadY - 30, 90, 40);
	line(WholeheadX - 15, WholeheadY - 30, WholeheadX + 15, WholeheadY - 30);
	//mouth
	stroke('black');
	fill(MouthR, MouthG, MouthB);
	strokeWeight(6);
	line(WholeheadX - 50, WholeheadY + 60, WholeheadX + 50, WholeheadY + 80);
	//hair
	noFill();
	stroke('black')
	strokeWeight(3);
	arc(WholeheadX,      WholeheadY - 105, 55, 100, PI, PI + HALF_PI);
	arc(WholeheadX - 5,  WholeheadY - 99, 60, 110,  PI, PI + HALF_PI);
	arc(WholeheadX - 10, WholeheadY - 93, 65, 120,  PI, PI + HALF_PI);
	arc(WholeheadX - 15, WholeheadY - 87, 70, 130,  PI, PI + HALF_PI);
	arc(WholeheadX - 20, WholeheadY - 81, 75, 140,  PI, PI + HALF_PI);
	arc(WholeheadX - 25, WholeheadY - 75, 80, 150,  PI, PI + HALF_PI);
	arc(WholeheadX - 30, WholeheadY - 69, 85, 160,  PI, PI + HALF_PI);
	arc(WholeheadX - 35, WholeheadY - 63, 90, 170,  PI, PI + HALF_PI);
	arc(WholeheadX - 40, WholeheadY - 57, 95, 180,  PI, PI + HALF_PI);
	arc(WholeheadX - 45, WholeheadY - 51, 100, 190, PI, PI + HALF_PI);
	arc(WholeheadX - 50, WholeheadY - 45, 105, 200, PI, PI + HALF_PI);
	arc(WholeheadX - 55, WholeheadY - 39, 110, 210, PI, PI + HALF_PI);
	arc(WholeheadX - 60, WholeheadY - 33, 115, 220, PI, PI + HALF_PI);

	arc(WholeheadX,      WholeheadY - 105, 55, 100, PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 5,  WholeheadY - 99, 60, 110,  PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 10, WholeheadY - 93, 65, 120,  PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 15, WholeheadY - 87, 70, 130,  PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 20, WholeheadY - 81, 75, 140,  PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 25, WholeheadY - 75, 80, 150,  PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 30, WholeheadY - 69, 85, 160,  PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 35, WholeheadY - 63, 90, 170,  PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 40, WholeheadY - 57, 95, 180,  PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 45, WholeheadY - 51, 100, 190, PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 50, WholeheadY - 45, 105, 200, PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 55, WholeheadY - 39, 110, 210, PI + HALF_PI, TWO_PI);
	arc(WholeheadX + 60, WholeheadY - 33, 115, 220, PI + HALF_PI, TWO_PI);

	//center point of Wholehead
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	//point(WholeheadX, WholeheadY)
}