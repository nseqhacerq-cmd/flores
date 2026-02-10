let angle = 0;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);

  stroke(255, 220, 0);
  strokeWeight(2);
  noFill();

  let r = 250;
  let x = r * cos(angle);
  let y = r * sin(angle);

  line(0, 0, x, y);

  angle += 0.05;

  if (angle > TWO_PI * 6) {
    noLoop();
  }
}
