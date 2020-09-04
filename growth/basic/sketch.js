let fungi;
let scale = 100;

function setup() {
  createCanvas(720, 720);
  background(20);

  // for (let i = 0; i < TWO_PI; i += (TWO_PI / 10))
  // {
  //   points.push(createVector(cos(i) * scale + (width / 2), sin(i) * scale + (height / 2)));
  // }

  fungi = new Fungi(scale);

  noFill();
  stroke(255);

  frameRate(10);
}


function draw() {
  background(20);

  fungi.display();
  fungi.move();
  // fungi.grow();
  // print('hello');
  // noLoop();
}
