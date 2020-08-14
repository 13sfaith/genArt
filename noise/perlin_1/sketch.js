let scale = 100;

function setup() {
  createCanvas(720, 720);
  background(30);
  frameRate(20);

}

let noiseVar = 0;
function draw() {
  noStroke();
  for (let j = 0; j < width; j += width / scale)
  {
    for (let k = 0; k < height; k += height / scale)
    {
      fill(noise(j / width, k / height, noiseVar) * 200);

      rect(j, k, scale);
    }
  }

  noiseVar += 0.01;
  // noLoop();
}
