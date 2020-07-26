let coordList = new Array();

let rows = 10;
let cols = 10;
let space = 80;

function setup() {
  // put setup code here
  // createCanvas(720, 720);
  createCanvas(1080, 1080);
  frameRate(60);
  colorMode(HSB);
  background(42, 20, 80);



  for (let j = 0; j < rows; j++)
  {
    for (let k = 0; k < cols; k++)
    {
      coordList.push(createVector((j * 100) + space, (k * 100) + space));
    }
  }
}

let t = 0;
function draw() {
  // put drawing code here
  let c = color(50, 55, 100);
  stroke(c);
  strokeWeight(10);

  // rotate(PI * t);
  t += 0.01;

  // translate(width/4, height/4);

  for (let i = 0; i < coordList.length; i++)
  {
    // rotate(0.1 * t);

    coordList[i].x += randomGaussian(0, 2);
    coordList[i].y += randomGaussian(0, 1);

    // c = color(i * 3.6, 100, 105, 0.01);
    // c = color(105 + t, 100, map(coordList[i].x + coordList[i].y, 0, 1480, 0, 100), 0.01);
    // c = color(t, 50, map(coordList[i].x + coordList[i].y, 0, 1480, 0, 100), 0.01);
    // print(dist(width/2, height/2, coordList[i].x, coordList[i].y));
    c = color(t, 50, map(dist(width/2, height/2, coordList[i].x, coordList[i].y), 0, 700, 100, 0), 0.01);
    stroke(c);

    if (i + 1 % rows != 0 && i + 10 < coordList.length)
    {
      strokeWeight(1);
      beginShape();
      vertex(coordList[i].x, coordList[i].y);
      vertex(coordList[i + 10].x, coordList[i + 10].y);
      endShape();
    }

    if (i + 1 < coordList.length && i % 10 != 9)
    {
      strokeWeight(1);
      beginShape(LINES);
      vertex(coordList[i].x, coordList[i].y);
      vertex(coordList[i + 1].x, coordList[i + 1].y);
      endShape();

      // print(i, i + 1);
    }

    strokeWeight(10);
    // point(coordList[i].x, coordList[i].y);
  }
  // noLoop();
  // print(coordList[98], coordList[99]);
  // background(0, 0, 0, 0.02 * t);
}
