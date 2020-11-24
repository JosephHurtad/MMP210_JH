 /* Slide Show by Joseph Hurtado */
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
	patternsImage = loadImage('../Images/Building.png');
	cloudImage = loadImage('../Images/Cloud.png');
}

var centerX = 320;
var centerY = 180;

var currentSlide = 0;

var a = 255;
var b = 0;

function setup() {
	mycanvas = createCanvas(640, 360); // (width, height)
	mycanvas.drawingContext.miterLimit = 3;
}

function draw() {

	background(20, 20, 20);

	//centerX = mouseX;
	//centerY = mouseY;

	//Slides
	if (currentSlide == 0) {
		stroke(255, a);
		a -= 0.5;
		noFill();
		strokeWeight(2);
		line(width / 2, 0, width / 2, height);
		textSize(20);
		textAlign(CENTER, CENTER);
		text('CLICK HERE TO GO BACK', width * 0.25, height / 2);
		text('CLICK HERE TO GO FOWARD', width * 0.75, height / 2);

		stroke(255, b);
		if (b < 255) {
			b += 0.5;
		}
		noFill();
		strokeWeight(2);
		textSize(50);
		textAlign(CENTER, CENTER);
		text('Road Project', width * 0.5, height / 3);
		textSize(40);
		text('Slide Show', width * 0.5, (height / 3) + 50);
		textSize(30);
		text('By : Joseph Hurtado', width * 0.6, (height / 3) + 100);
	} else if (currentSlide == 1) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('My final project will be an upgraded version of my "PatternsV2" project.', (width * 0.5) - ((width - 100) / 2), height / 4, width - 100);
		imageMode(CENTER);
		image(patternsImage, width / 2, (height * 0.5) + 100, 500, 250);
	} else if (currentSlide == 2) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('You will be able to interact by sliding your mouse across the screen to change the speed of the camera', (width * 0.5) - ((width - 100) / 2), height / 3, width - 100);
	} else if (currentSlide == 3) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('WITH MORE GRAPHICS', (width * 0.5) - ((width - 100) / 2), height / 5, width - 100);
	} else if (currentSlide == 4) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('WITH MORE GRAPHICS', (width * 0.5) - ((width - 100) / 2), height * 0.2, width - 100);
		text('MORE SPRITES', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
	} else if (currentSlide == 5) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('WITH MORE GRAPHICS', (width * 0.5) - ((width - 100) / 2), height * 0.2, width - 100);
		text('MORE SPRITES', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		text('MORE CODE', (width * 0.5) - ((width - 100) / 2), height * 0.6, width - 100);
	} else if (currentSlide == 6) {
		stroke(255);
		noFill();
		strokeWeight(2.5);
		textSize(30);
		textAlign(CENTER, CENTER);
		text('WITH MORE GRAPHICS', (width * 0.5) - ((width - 100) / 2), height * 0.2, width - 100);
		text('MORE SPRITES', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		text('MORE CODE', (width * 0.5) - ((width - 100) / 2), height * 0.6, width - 100);
		text('AND A LOT MORE MOVEMENT THAN BEFORE', (width * 0.5) - ((width - 100) / 2), height * 0.8, width - 100);
	} else if (currentSlide == 7) {
		stroke(255);
		noFill();
		strokeWeight(2);
		textSize(25);
		textAlign(CENTER, CENTER);
		text('WITH CUSTOM MADE CLOUDS', (width * 0.33) - ((width - 100) / 2), height * 0.2, width - 100);
		imageMode(CENTER);
		image(cloudImage, width * 0.8, height * 0.2, 50, 50);
	} else if (currentSlide == 8) {
		stroke(255);
		noFill();
		strokeWeight(2);
		textSize(25);
		textAlign(CENTER, CENTER);
		text('WITH CUSTOM MADE CLOUDS', (width * 0.33) - ((width - 100) / 2), height * 0.2, width - 100);
		textSize(30);
		text('A COLORFUL ENVIRONMENT', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		imageMode(CENTER);
		image(cloudImage, width * 0.8, height * 0.2, 50, 50);
	} else if (currentSlide == 9) {
		stroke(255);
		noFill();
		strokeWeight(2);
		textSize(25);
		textAlign(CENTER, CENTER);
		text('WITH CUSTOM MADE CLOUDS', (width * 0.33) - ((width - 100) / 2), height * 0.2, width - 100);
		textSize(30);
		text('A COLORFUL ENVIRONMENT', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		text('A SUNSET', (width * 0.5) - ((width - 100) / 2), height * 0.6, width - 100);
		imageMode(CENTER);
		image(cloudImage, width * 0.8, height * 0.2, 50, 50);
	} else if (currentSlide == 10) {
		stroke(255);
		noFill();
		strokeWeight(2);
		textSize(25);
		textAlign(CENTER, CENTER);
		text('WITH CUSTOM MADE CLOUDS', (width * 0.33) - ((width - 100) / 2), height * 0.2, width - 100);
		textSize(30);
		text('A COLORFUL ENVIRONMENT', (width * 0.5) - ((width - 100) / 2), height * 0.4, width - 100);
		text('A SUNSET', (width * 0.5) - ((width - 100) / 2), height * 0.6, width - 100);
		text('A SUNRISE', (width * 0.5) - ((width - 100) / 2), height * 0.8, width - 100);
		imageMode(CENTER);
		image(cloudImage, width * 0.8, height * 0.2, 50, 50);
	} else if (currentSlide == 11) {
		noFill();
		strokeWeight(2);
		textSize(50);
		textAlign(CENTER, CENTER);
		text('AND SO MUCH MORE!', width * 0.5, height / 2);

	}
}

function mousePressed() {

	if (currentSlide == 0) {
		a = 255;
		b = 0;
	}

	//Foward / Back
	if (mouseX < width / 2 && currentSlide > 0) {
		currentSlide -= 1;
	} else if (mouseX > width / 2 && currentSlide < 11) {
		currentSlide += 1;
	}
}