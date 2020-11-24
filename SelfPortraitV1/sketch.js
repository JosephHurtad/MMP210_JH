/* Self Portrait v1 by Joseph Hurtado */
	/* use comments to reparate shapes
	circle(0, 0, 100);
	square(0, 0, 100);
	rect(0, 0, 0, 0, 100);
	ellipse(0, 0, 100, 50);
	line(0, 0, 100, 100);
	triangle(0, 0, 100, 100, 50, 50);
	*/

function setup() {
	mycanvas = createCanvas(640, 360);
}

function draw() {
	background ('white');
	//head
	fill(198, 150, 102);
	strokeWeight(4);
	ellipse(320, 190, 210, 310);
	//eyes
	fill('white');
	strokeWeight(2);
	ellipse(260, 160, 90, 40);
	ellipse(380, 160, 90, 40);
	line(305, 160, 335, 160);
	//mouth
	fill('black');
	strokeWeight(6);
	line(270, 250, 370, 270);
	//hair
	noFill();
	strokeWeight(3);
	arc(320, 85, 55, 100, PI, PI + HALF_PI);
	arc(315, 91, 60, 110, PI, PI + HALF_PI);
	arc(310, 97, 65, 120, PI, PI + HALF_PI);
	arc(305, 103, 70, 130, PI, PI + HALF_PI);
	arc(300, 109, 75, 140, PI, PI + HALF_PI);
	arc(295, 115, 80, 150, PI, PI + HALF_PI);
	arc(290, 121, 85, 160, PI, PI + HALF_PI);
	arc(285, 127, 90, 170, PI, PI + HALF_PI);
	arc(280, 133, 95, 180, PI, PI + HALF_PI);
	arc(275, 139, 100, 190, PI, PI + HALF_PI);
	arc(270, 145, 105, 200, PI, PI + HALF_PI);
	arc(265, 151, 110, 210, PI, PI + HALF_PI);
	arc(260, 157, 115, 220, PI, PI + HALF_PI);

	arc(320, 85, 55, 100, PI + HALF_PI, TWO_PI);
	arc(325, 91, 60, 110, PI + HALF_PI, TWO_PI);
	arc(330, 97, 65, 120, PI + HALF_PI, TWO_PI);
	arc(335, 103, 70, 130, PI + HALF_PI, TWO_PI);
	arc(340, 109, 75, 140, PI + HALF_PI, TWO_PI);
	arc(345, 115, 80, 150, PI + HALF_PI, TWO_PI);
	arc(350, 121, 85, 160, PI + HALF_PI, TWO_PI);
	arc(355, 127, 90, 170, PI + HALF_PI, TWO_PI);
	arc(360, 133, 95, 180, PI + HALF_PI, TWO_PI);
	arc(365, 139, 100, 190, PI + HALF_PI, TWO_PI);
	arc(370, 145, 105, 200, PI + HALF_PI, TWO_PI);
	arc(375, 151, 110, 210, PI + HALF_PI, TWO_PI);
	arc(380, 157, 115, 220, PI + HALF_PI, TWO_PI);
}