 /* Self Portrait v3 by Joseph Hurtado */
	/* use comments to reparate shapes
	circle(0, 0, 100);
	square(0, 0, 100);
	rect(0, 0, 0, 0, 100);
	ellipse(0, 0, 100, 50);
	line(0, 0, 100, 100);
	triangle(0, 0, 100, 100, 50, 50);
	*/

var headR = 198;
var headG = 150;
var headB = 102;

var eyesR = 255;
var eyesG = 255;
var eyesB = 255;

var mouthR = 0;
var mouthG = 0;
var mouthB = 0;

var headStrokeWeight = 4;
var headWidth = 210;
var headHeight = headWidth + 100;

var eyesApart = 60;
var eyesFromCenter = 30;

var eyesStrokeWeight = 2;
var eyesWidth = 90;
var eyesHeight = 40;

var eyeLineApart = 15;
var eyeLineFromCenter = 30;

var mouthStrokeWeight = 6;
var mouthWidth = 50;
var mouthHeight1 = 60;
var mouthHeight2 = 80;

var hairStrokeWeight = 3;
var arcWidth1 =  55;
var arcWidth2 =  60;
var arcWidth3 =  65;
var arcWidth4 =  70;
var arcWidth5 =  75;
var arcWidth6 =  80;
var arcWidth7 =  85;
var arcWidth8 =  90;
var arcWidth9 =  95;
var arcWidth10 = 100;
var arcWidth11 = 105;
var arcWidth12 = 110;
var arcWidth13 = 115;

var arcHeight1 =  100;
var arcHeight2 =  110;
var arcHeight3 =  120;
var arcHeight4 =  130;
var arcHeight5 =  140;
var arcHeight6 =  150;
var arcHeight7 =  160;
var arcHeight8 =  170;
var arcHeight9 =  180;
var arcHeight10 = 190;
var arcHeight11 = 200;
var arcHeight12 = 210;
var arcHeight13 = 220;

var arcW1 =  0.01;
var arcW2 =  5;
var arcW3 =  10;
var arcW4 =  15;
var arcW5 =  20;
var arcW6 =  25;
var arcW7 =  30;
var arcW8 =  35;
var arcW9 =  40;
var arcW10 = 45;
var arcW11 = 50;
var arcW12 = 55;
var arcW13 = 60;

var arcH1 =  105;
var arcH2 =  99;
var arcH3 =  93;
var arcH4 =  87;
var arcH5 =  81;
var arcH6 =  75;
var arcH7 =  69;
var arcH8 =  63;
var arcH9 =  57;
var arcH10 = 51;
var arcH11 = 45;
var arcH12 = 39;
var arcH13 = 33;

function setup() {
	createCanvas(640, 360); // (width, height)
}

function draw() {
	background ('white');

	wholeHeadX = 320;
	wholeHeadY = 180;
	//wholeHeadX = mouseX;
	//wholeHeadY = mouseY;

	//Wholehead
	//head
	stroke('black')
	fill(headR, headG, headB);
	strokeWeight(headStrokeWeight);
	ellipse(wholeHeadX, wholeHeadY, headWidth, headHeight);
	//eyes
	stroke('black');
	fill(eyesR, eyesG, eyesB);
	strokeWeight(eyesStrokeWeight);
	ellipse(wholeHeadX - eyesApart, wholeHeadY - eyesFromCenter, eyesWidth, eyesHeight);
	ellipse(wholeHeadX + eyesApart, wholeHeadY - eyesFromCenter, eyesWidth, eyesHeight);
	line(wholeHeadX - eyeLineApart, wholeHeadY - eyeLineFromCenter, wholeHeadX + eyeLineApart, wholeHeadY - eyeLineFromCenter);
	//mouth
	stroke('black');
	fill(mouthR, mouthG, mouthB);
	strokeWeight(mouthStrokeWeight);
	line(wholeHeadX - mouthWidth, wholeHeadY + mouthHeight1, wholeHeadX + mouthWidth, wholeHeadY + mouthHeight2);
	//hair
	noFill();
	stroke('black')
	strokeWeight(hairStrokeWeight);
	arc(wholeHeadX - arcW1,  wholeHeadY - arcH1, arcWidth1,  arcHeight1,  PI, PI + HALF_PI);
	arc(wholeHeadX - arcW2,  wholeHeadY - arcH2, arcWidth2,  arcHeight2,  PI, PI + HALF_PI);
	arc(wholeHeadX - arcW3,  wholeHeadY - arcH3, arcWidth3,  arcHeight3,  PI, PI + HALF_PI);
	arc(wholeHeadX - arcW4,  wholeHeadY - arcH4, arcWidth4,  arcHeight4,  PI, PI + HALF_PI);
	arc(wholeHeadX - arcW5,  wholeHeadY - arcH5, arcWidth5,  arcHeight5,  PI, PI + HALF_PI);
	arc(wholeHeadX - arcW6,  wholeHeadY - arcH6, arcWidth6,  arcHeight6,  PI, PI + HALF_PI);
	arc(wholeHeadX - arcW7,  wholeHeadY - arcH7, arcWidth7,  arcHeight7,  PI, PI + HALF_PI);
	arc(wholeHeadX - arcW8,  wholeHeadY - arcH8, arcWidth8,  arcHeight8,  PI, PI + HALF_PI);
	arc(wholeHeadX - arcW9,  wholeHeadY - arcH9, arcWidth9,  arcHeight9,  PI, PI + HALF_PI);
	arc(wholeHeadX - arcW10, wholeHeadY - arcH10, arcWidth10, arcHeight10, PI, PI + HALF_PI);
	arc(wholeHeadX - arcW11, wholeHeadY - arcH11, arcWidth11, arcHeight11, PI, PI + HALF_PI);
	arc(wholeHeadX - arcW12, wholeHeadY - arcH12, arcWidth12, arcHeight12, PI, PI + HALF_PI);
	arc(wholeHeadX - arcW13, wholeHeadY - arcH13, arcWidth13, arcHeight13, PI, PI + HALF_PI);

	arc(wholeHeadX + arcW1,  wholeHeadY - arcH1, arcWidth1,  arcHeight1,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW2,  wholeHeadY - arcH2, arcWidth2,  arcHeight2,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW3,  wholeHeadY - arcH3, arcWidth3,  arcHeight3,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW4,  wholeHeadY - arcH4, arcWidth4,  arcHeight4,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW5,  wholeHeadY - arcH5, arcWidth5,  arcHeight5,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW6,  wholeHeadY - arcH6, arcWidth6,  arcHeight6,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW7,  wholeHeadY - arcH7, arcWidth7,  arcHeight7,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW8,  wholeHeadY - arcH8, arcWidth8,  arcHeight8,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW9,  wholeHeadY - arcH9, arcWidth9,  arcHeight9,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW10, wholeHeadY - arcH10, arcWidth10, arcHeight10, PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW11, wholeHeadY - arcH11, arcWidth11, arcHeight11, PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW12, wholeHeadY - arcH12, arcWidth12, arcHeight12, PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + arcW13, wholeHeadY - arcH13, arcWidth13, arcHeight13, PI + HALF_PI, TWO_PI);

	//center point of Wholehead
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	point(wholeHeadX, wholeHeadY)

	let part = 0; // make it so if clicked, part goes up, depending on part it does diferent things.

	let p = map(mouseY, 0.1, height, 1, 0);
	p = constrain(p, 0.01, 1);
	text(round(p * 100) + "%", 10, 20);

	headStrokeWeight = 4 * p;
	headWidth = 210 * p;
	headHeight = headWidth + (100 * p);

	eyesApart =      60 * p;
	eyesFromCenter = 30 * p;

	eyesStrokeWeight = 2  * p;
	eyesWidth =        90 * p;
	eyesHeight =       40 * p;

	eyeLineApart =      15 * p;
	eyeLineFromCenter = 30 * p;

	mouthStrokeWeight = 6  * p;
	mouthWidth =        50 * p;
	mouthHeight1 =      60 * p;
	mouthHeight2 =      80 * p;

	hairStrokeWeight = 3  * p;
	arcWidth1 =        55  * p;
	arcWidth2 =        60  * p;
	arcWidth3 =        65  * p;
	arcWidth4 =        70  * p;
	arcWidth5 =        75  * p;
	arcWidth6 =        80  * p;
	arcWidth7 =        85  * p;
	arcWidth8 =        90  * p;
	arcWidth9 =        95  * p;
	arcWidth10 =       100 * p;
	arcWidth11 =       105 * p;
	arcWidth12 =       110 * p;
	arcWidth13 =       115 * p;

	arcHeight1 =  100 * p;
	arcHeight2 =  110 * p;
	arcHeight3 =  120 * p;
	arcHeight4 =  130 * p;
	arcHeight5 =  140 * p;
	arcHeight6 =  150 * p;
	arcHeight7 =  160 * p;
	arcHeight8 =  170 * p;
	arcHeight9 =  180 * p;
	arcHeight10 = 190 * p;
	arcHeight11 = 200 * p;
	arcHeight12 = 210 * p;
	arcHeight13 = 220 * p;

	arcW1 =  0.01 * p;
	arcW2 =  5    * p;
	arcW3 =  10   * p;
	arcW4 =  15   * p;
	arcW5 =  20   * p;
	arcW6 =  25   * p;
	arcW7 =  30   * p;
	arcW8 =  35   * p;
	arcW9 =  40   * p;
	arcW10 = 45   * p;
	arcW11 = 50   * p;
	arcW12 = 55   * p;
	arcW13 = 60   * p;

	arcH1 =  105 * p;
	arcH2 =  99  * p;
	arcH3 =  93  * p;
	arcH4 =  87  * p;
	arcH5 =  81  * p;
	arcH6 =  75  * p;
	arcH7 =  69  * p;
	arcH8 =  63  * p;
	arcH9 =  57  * p;
	arcH10 = 51  * p;
	arcH11 = 45  * p;
	arcH12 = 39  * p;
	arcH13 = 33  * p;

}


	