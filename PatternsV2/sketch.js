 /* Patterns v2 by Joseph Hurtado */
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
	formatted_number = FormatNumberLength(iteration,4);
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

}

var centerX = 320;
var centerY = 180;

var i = 70;
var s = 0;
var k1 = 10;
var k2 = k1 + i;
var k3 = k2 + i;
var k4 = k3 + i;
var k5 = k4 + i;
var k6 = k5 + i;//!!!!!!!!!!!!!!!!!!!!!!add sound and more as a final project, also do gifs as thumnails!!!!!!!!!!!!!!!!!!!!!!!!!
var k7 = k6 + i;
var k8 = k7 + i;
var k9 = k8 + i;

var p, w;
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;
var r1, g1, b1, r2, g2, b2, r3, g3, b3, r4, g4, b4, r5, g5, b5, r6, g6, b6, r7, g7, b7;

var iteration = 0;

function setup() {
	mycanvas = createCanvas(640, 360); // (width, height)
	p = 110;
	u1 = random(50, 150)
	u2 = random(50, 150)
	u3 = random(50, 150)
	u4 = random(50, 150)
	u5 = random(50, 150)
	u6 = random(50, 150)
	u7 = random(50, 150)
	r1 = random(0, 70);
	r2 = random(0, 70);
	r3 = random(0, 70);
	r4 = random(0, 70);
	r5 = random(0, 70);
	r6 = random(0, 70);
	r7 = random(0, 70);
	q1 = p * 0 + r1;
	q2 = p * 1 + r2;
	q3 = p * 2 + r3;
	q4 = p * 3 + r4;
	q5 = p * 4 + r5;
	q6 = p * 5 + r6;
	q7 = p * 6 + r7;
	w = 40;
}

function draw() {

	background('lightblue');

	//centerX = mouseX;
	//centerY = mouseY;

	s = map(mouseX, width / 6, 5 * (width / 6), 0, 15, true);

	//Buildings
	build(q1, height - 200, p, u1 * -1);
	build(q2, height - 200, p, u2 * -1);
	build(q3, height - 200, p, u3 * -1);
	build(q4, height - 200, p, u4 * -1);
	build(q5, height - 200, p, u5 * -1);
	build(q6, height - 200, p, u6 * -1);
	build(q7, height - 200, p, u7 * -1);

	q1 -= s;
	q2 -= s;
	q3 -= s;
	q4 -= s;
	q5 -= s;
	q6 -= s;
	q7 -= s;

	if (q1 < p * -1) {
		q1 = width;
		u1 = random(50, 150)
		r1 = random(0, 70);
	}
	if (q2 < p * -1) {
		q2 = width;
		u2 = random(50, 150)
		r2 = random(0, 70);
	}
	if (q3 < p * -1) {
		q3 = width;
		u3 = random(50, 150)
		r3 = random(0, 70);
	}
	if (q4 < p * -1) {
		q4 = width;
		u4 = random(50, 150)
		r4 = random(0, 70);
	}
	if (q5 < p * -1) {
		q5 = width;
		u5 = random(50, 150)
		r5 = random(0, 70);
	}
	if (q6 < p * -1) {
		q6 = width;
		u6 = random(50, 150)
		r6 = random(0, 70);
	}
	if (q7 < p * -1) {
		q7 = width;
		u7 = random(50, 150)
		r7 = random(0, 70);
	}

	

	//Side walk
	fill(74, 72, 68);
	strokeWeight(0);
	rect(0, height - 50, width, 50);
	rect(0, height - 200, width, 50);

	//Road center

	fill(20, 20, 19);
	strokeWeight(0);
	rect(0, height - 150, width, 100);

	//Side walk detail
	sideWalk(w, 10, 50);
	sideWalk(w, 150, 200);
	
	w -= s;

	//Road Lines
	noFill();
	stroke(224, 224, 56);
	strokeWeight(10);

	line(k1, height - 100, k1 + 20, height - 100)
	line(k2, height - 100, k2 + 20, height - 100)
	line(k3, height - 100, k3 + 20, height - 100)
	line(k4, height - 100, k4 + 20, height - 100)
	line(k5, height - 100, k5 + 20, height - 100)
	line(k6, height - 100, k6 + 20, height - 100)
	line(k7, height - 100, k7 + 20, height - 100)
	line(k8, height - 100, k8 + 20, height - 100)
	line(k9, height - 100, k9 + 20, height - 100)

	k1 -= s;
	k2 -= s;
	k3 -= s;
	k4 -= s;
	k5 -= s;
	k6 -= s;
	k7 -= s;
	k8 -= s;
	k9 -= s;
	
	if (k1 < -20) {
		k1 = width + 20;
	}
	if (k2 < -20) {
		k2 = width + 20;
	}
	if (k3 < -20) {
		k3 = width + 20;
	}
	if (k4 < -20) {
		k4 = width + 20;
	}
	if (k5 < -20) {
		k5 = width + 20;
	}
	if (k6 < -20) {
		k6 = width + 20;
	}
	if (k7 < -20) {
		k7 = width + 20;
	}
	if (k8 < -20) {
		k8 = width + 20;
	}
	if (k9 < -20) {
		k9 = width + 20;
	}

	//Air
	if (s > 4) {
		air(random(0, width), random(centerY - 100, centerY + 120), random(20, 25), 'white', 3);
	}
	if (s > 7) {
		air(random(0, width), random(centerY - 100, centerY + 120), random(20, 25), 'white', 3);
	}
	if (s > 9) {
		air(random(0, width), random(centerY - 100, centerY + 120), random(20, 25), 'white', 3);
	}
	if (s > 11) {
		air(random(0, width), random(centerY - 100, centerY + 120), random(20, 25), 'white', 3);
	}
	if (s > 13) {
		air(random(0, width), random(centerY - 100, centerY + 120), random(20, 25), 'white', 3);
	}
	if (s > 14) {
		air(random(0, width), random(centerY - 100, centerY + 120), random(20, 25), 'white', 3);
	}



	//Bar
	strokeWeight(10);
	stroke(0);
	fill(0);
	rect(width / 6, height - 35, 4 * (width / 6), 20, 20);
	strokeWeight(10);
	stroke(255);
	noFill();
	rect(width / 6, height - 35, 4 * (width / 6), 20, 20);
	strokeWeight(0);
	fill(255);
	x1 = map(mouseX, width / 6, 5 * (width / 6), 0, 4, true);
	rect(width / 6, height - 35, x1 * (width / 6), 20, 20);

	//Center Dot
	noFill();
	stroke(255, 0, 0);
	strokeWeight(3);
	//point(centerX, centerY);
}

function air(x, y, l, c, s) {
	strokeWeight(s);
	stroke(c);
	noFill();
	line(x, y, x + l, y);
}

function build(x, y, w, h) {
	fill('gray');
	strokeWeight(10);
	stroke(128, 70, 55);
	rect(x, y, w, h);
	//Bricks
	for (let i = x - 5.5; i < x + w; i += 11) {
		for (let o = y; o > y + h; o -= 11) {
			fill(132, 76, 59);
			strokeWeight(0);
			rect(i, o, 10, 5);
		}
	}
	for (let i = x; i < x + w - 5.5; i += 11) {
		for (let o = y + 5.5; o > y + h; o -= 11) {
			fill(132, 76, 59);
			strokeWeight(0);
			rect(i, o, 10, 5);
		}
	}
	//Windows
	if (h < -100) {
		fill('white');
		strokeWeight(1);
		stroke('black');
		rect(x + (w / 5) * 1, y + (h / 5) * 1, w / 5, h / 5);
		rect(x + (w / 5) * 3, y + (h / 5) * 1, w / 5, h / 5);
		rect(x + (w / 5) * 1, y + (h / 5) * 3, w / 5, h / 5);
		rect(x + (w / 5) * 3, y + (h / 5) * 3, w / 5, h / 5);
		noFill();
		strokeWeight(2);
		stroke('black');
		line(x + (w / 10) * 2, y + (h / 10) * 3, x + (w / 10) * 4, y + (h / 10) * 3);
		line(x + (w / 10) * 3, y + (h / 10) * 2, x + (w / 10) * 3, y + (h / 10) * 4);
		line(x + (w / 10) * 6, y + (h / 10) * 3, x + (w / 10) * 8, y + (h / 10) * 3);
		line(x + (w / 10) * 7, y + (h / 10) * 2, x + (w / 10) * 7, y + (h / 10) * 4);
		line(x + (w / 10) * 2, y + (h / 10) * 7, x + (w / 10) * 4, y + (h / 10) * 7);
		line(x + (w / 10) * 3, y + (h / 10) * 6, x + (w / 10) * 3, y + (h / 10) * 8);
		line(x + (w / 10) * 6, y + (h / 10) * 7, x + (w / 10) * 8, y + (h / 10) * 7);
		line(x + (w / 10) * 7, y + (h / 10) * 6, x + (w / 10) * 7, y + (h / 10) * 8);
	} else if (h > -100) {
		fill('white');
		strokeWeight(1);
		stroke('black');
		rect(x + (w / 5) * 1, y + h / 3, w / 5, h / 3);
		rect(x + (w / 5) * 3, y + h / 3, w / 5, h / 3);
		noFill();
		strokeWeight(2);
		stroke('black');
		line(x + (w / 10) * 2, y + (h / 6) * 3, x + (w / 10) * 4, y + (h / 6) * 3);
		line(x + (w / 10) * 3, y + (h / 6) * 4, x + (w / 10) * 3, y + (h / 6) * 2);
		line(x + (w / 10) * 6, y + (h / 6) * 3, x + (w / 10) * 8, y + (h / 6) * 3);
		line(x + (w / 10) * 7, y + (h / 6) * 4, x + (w / 10) * 7, y + (h / 6) * 2);
	}

}

function sideWalk(x, y, y2) {
	strokeWeight(3);
	stroke(48, 47, 45);
	noFill();
	for(let i = x; i <= width; i += 40) {
		for (let o = y; o <= y2; o += 10) {
			line(i, height - 200, i, height - 150);
			line(i, height, i, height - 50);
			line(0, height - o, width, height - o);
		}
	}
}