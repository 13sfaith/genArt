let particleList;
let aggregateGrid;
let pixelSize = 20;
let pixelCount = 200;

function setup() {
  createCanvas(720, 720);
  background(0);
  frameRate(21);

  particleList = new Array();
  aggregateGrid = new Array();

  //create particles
  for (let i = 0; i < pixelCount; i++)
  {
    particleList.push(new Particle(createVector(floor(random(width / pixelSize)) * pixelSize, floor(random(height / pixelSize)) * pixelSize), pixelSize));
  }

  for (let i = 0; i < width; i += pixelSize)
  {
    aggregateGrid.push(createVector(i, height / 2));
  }

  // aggregateGrid.push(createVector(width / 2, height /2));
}


function draw() {
  background(0);

  for (let i = 0; i < aggregateGrid.length; i++)
  {
    fill(100);
    rect(aggregateGrid[i].x, aggregateGrid[i].y, pixelSize, pixelSize);
  }

  for (let i = 0; i < particleList.length; i++)
  {
    if (particleList[i].active == true)
    {

      let pos = particleList[i].pos;
      fill(255);
      rect(pos.x, pos.y, pixelSize, pixelSize);
      particleList[i].move();

      // particleList[i].set(mv);
      let coords = [createVector(pos.x + pixelSize, pos.y), createVector(pos.x + pixelSize, pos.y + pixelSize), createVector(pos.x, pos.y + pixelSize),
      createVector(pos.x - pixelSize, pos.y +  pixelSize), createVector(pos.x - pixelSize, pos.y), createVector(pos.x - pixelSize, pos.y - pixelSize),
      createVector(pos.x, pos.y - pixelSize), createVector(pos.x + pixelSize, pos.y - pixelSize)];

      for (let j = 0; j < coords.length; j++)
      {
        for (let k = 0; k < aggregateGrid.length; k++)
        {
          if (coords[j].equals(aggregateGrid[k]) && particleList[i].active == true)
          {
            aggregateGrid.push(pos);
            particleList[i].deactivate();
            // particleList.splice(i, 1);
          }
        }
      }
    }

    else
    {
      particleList.splice(i, 1);
    }
  }

  // noLoop();
}
