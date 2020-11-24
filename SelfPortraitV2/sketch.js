 /* Self Portrait v2 by Joseph Hurtado */
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

var wholeHeadX = 320;
var wholeHeadY = 190;

var P = 1;

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

var iteration = 0;

function setup() {
	mycanvas = createCanvas(640, 360); // (width, height)
}

function draw() {
	background ('white');

	wholeHeadX = mouseX;
	wholeHeadY = mouseY;

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
	strokeWeight(3);
	arc(wholeHeadX,      wholeHeadY - 105, arcWidth1,  arcHeight1,  PI, PI + HALF_PI);
	arc(wholeHeadX - 5,  wholeHeadY - 99,  arcWidth2,  arcHeight2,  PI, PI + HALF_PI);
	arc(wholeHeadX - 10, wholeHeadY - 93,  arcWidth3,  arcHeight3,  PI, PI + HALF_PI);
	arc(wholeHeadX - 15, wholeHeadY - 87,  arcWidth4,  arcHeight4,  PI, PI + HALF_PI);
	arc(wholeHeadX - 20, wholeHeadY - 81,  arcWidth5,  arcHeight5,  PI, PI + HALF_PI);
	arc(wholeHeadX - 25, wholeHeadY - 75,  arcWidth6,  arcHeight6,  PI, PI + HALF_PI);
	arc(wholeHeadX - 30, wholeHeadY - 69,  arcWidth7,  arcHeight7,  PI, PI + HALF_PI);
	arc(wholeHeadX - 35, wholeHeadY - 63,  arcWidth8,  arcHeight8,  PI, PI + HALF_PI);
	arc(wholeHeadX - 40, wholeHeadY - 57,  arcWidth9,  arcHeight9,  PI, PI + HALF_PI);
	arc(wholeHeadX - 45, wholeHeadY - 51,  arcWidth10, arcHeight10, PI, PI + HALF_PI);
	arc(wholeHeadX - 50, wholeHeadY - 45,  arcWidth11, arcHeight11, PI, PI + HALF_PI);
	arc(wholeHeadX - 55, wholeHeadY - 39,  arcWidth12, arcHeight12, PI, PI + HALF_PI);
	arc(wholeHeadX - 60, wholeHeadY - 33,  arcWidth13, arcHeight13, PI, PI + HALF_PI);

	arc(wholeHeadX,      wholeHeadY - 105, arcWidth1,  arcHeight1,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 5,  wholeHeadY - 99,  arcWidth2,  arcHeight2,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 10, wholeHeadY - 93,  arcWidth3,  arcHeight3,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 15, wholeHeadY - 87,  arcWidth4,  arcHeight4,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 20, wholeHeadY - 81,  arcWidth5,  arcHeight5,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 25, wholeHeadY - 75,  arcWidth6,  arcHeight6,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 30, wholeHeadY - 69,  arcWidth7,  arcHeight7,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 35, wholeHeadY - 63,  arcWidth8,  arcHeight8,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 40, wholeHeadY - 57,  arcWidth9,  arcHeight9,  PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 45, wholeHeadY - 51,  arcWidth10, arcHeight10, PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 50, wholeHeadY - 45,  arcWidth11, arcHeight11, PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 55, wholeHeadY - 39,  arcWidth12, arcHeight12, PI + HALF_PI, TWO_PI);
	arc(wholeHeadX + 60, wholeHeadY - 33,  arcWidth13, arcHeight13, PI + HALF_PI, TWO_PI);

	//center point of Wholehead
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	point(wholeHeadX, wholeHeadY)
}