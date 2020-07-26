

function setup() {
  // put setup code here
  createCanvas(1480, 1480);
  frameRate(18);
  // pixelDensity(2.0);
  colorMode(HSB, 100);
  background(0, 0, 10);

  // startRecording({
  //   preset: "slower",
  //   crf: 18,
  // });
}

let ix = 7.6;
let meTime = 0;
function draw() {
  // if (ix > 14.01)
  // {
  //   noLoop();
  //   stopRecording();
  // }
  // put drawing code here
  translate(width/2, height/2);
  strokeWeight(2);

  let a = createVector(140 * cos(ix), 80 * sin(ix));
  // let a = createVector(200 * cos(ix), 20 * sin(ix));
  let b = createVector(100, 14);
  let c = createVector(0, 0);
  ix += 0.1;
  let u = findCircumcenter(a, b, c);

  // strokeWeight(5);
  // point(a.x, a.y);
  // point(b.x, b.y);
  // point(c.x, c.y);
  // point(u.x, u.y);

  strokeWeight(4);
  noFill();

  colorMode(HSB, 100);
  stroke(abs(sin(ix) * 100), 100, 100);
  circle(u.x, u.y, a.dist(u) * 2);

  // drawTri(a, b, c);

  // noLoop();
  background(0, 0, 10, 15 * sin(ix) + 5);


  // if (meTime > 360)



  // meTime += 1;
}

function drawTri(a, b, c)
{
  beginShape();
  vertex(a.x, a.y);
  vertex(b.x, b.y);
  vertex(c.x, c.y);
  endShape(CLOSE);
}

function findCircumcenter(a, b, c)
{
  let u = createVector(0, 0);

  let d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));

  u.x = (1 / d) * ((a.x ** 2 + a.y ** 2) * (b.y - c.y) + (b.x ** 2 + b.y ** 2) *
  (c.y - a.y) + (c.x ** 2 + c.y ** 2) * (a.y - b.y));

  u.y = (1 / d) * ((a.x ** 2 + a.y ** 2) * (c.x - b.x) + (b.x ** 2 + b.y ** 2) *
  (a.x - c.x) + (c.x ** 2 + c.y ** 2) * (b.x - a.x));

  return u;
}
