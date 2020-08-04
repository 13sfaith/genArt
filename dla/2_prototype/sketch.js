let particleList;
let aggregateGrid;
let pixelSize = 7;
let pixelCount = 7000;
let hu = 40;

function setup() {
  createCanvas(720, 720);
  colorMode(HSB, 100);
  background(10, 40, 60);
  frameRate(31);

  particleList = new Array();
  aggregateGrid = new Array();

  //create particles
  for (let i = 0; i < pixelCount; i++)
  {
    particleList.push(new Particle(createVector(floor(random(width / pixelSize)) * pixelSize, floor(random(height / pixelSize)) * pixelSize), pixelSize));
  }

  // for (let i = 0; i < width; i += pixelSize)
  // {
  //   aggregateGrid.push(createVector(i, height / 2));
  // }
  noStroke();
  fill(hu, 40, 70);
  for (let i = 0; i < TWO_PI; i += 0.1)
  {
    aggregateGrid.push(new Aggregate(createVector(cos(i) * (width / 4) + (width / 2), sin(i) * (height / 4)+ (height / 2)), pixelSize));
  }

  // aggregateGrid.push(new Aggregate(createVector(width / 4, height /4), pixelSize));
  // aggregateGrid.push(new Aggregate(createVector(width * (3 / 4), height /4), pixelSize));
  // aggregateGrid.push(new Aggregate(createVector(width * (3 / 4), height * (3 / 4)), pixelSize));
  // aggregateGrid.push(new Aggregate(createVector(width / 4, height * (3 / 4)), pixelSize));
  fill(hu, 40, 70);

  for (let i = 0; i < aggregateGrid.length; i++)
  {
    // circle(aggregateGrid[i].pos.x, aggregateGrid[i].pos.y, aggregateGrid[i].size);
  }

}

function draw() {
  // background(0);
  // noStroke();
  colorMode(HSB, 100);
  fill(0, 40, hu);

  // for (let i = 0; i < aggregateGrid.length; i++)
  // {
  //   fill(hu, 40, 70);
  //   circle(aggregateGrid[i].pos.x, aggregateGrid[i].pos.y, aggregateGrid[i].size);
  // }

  for (let i = 0; i < particleList.length; i++)
  {
    if (particleList[i].active == true)
    {

      let pos = particleList[i].pos;
      // rect(pos.x, pos.y, pixelSize, pixelSize);
      // circle(pos.x, pos.y, pixelSize);
      particleList[i].move();


      for (let k = 0; k < aggregateGrid.length; k++)
      {
        // print(pos.dist(aggregateGrid[k]));
        // print(pos);
        // let aPos = createVector(aggregateGrid[k].x, aggregateGrid[k].y);
        if (pos.dist(aggregateGrid[k].pos) <= aggregateGrid[k].size * (.9))
        {
          aggregateGrid.push(new Aggregate(pos, pixelSize));
          circle(aggregateGrid[k].pos.x, aggregateGrid[k].pos.y, aggregateGrid[k].size);
          particleList[i].deactivate();
          break;
        }
      }

    }

    else
    {
      particleList.splice(i, 1);
      pixelSize -= 0.001;
      hu += 0.01;
      if (pixelSize > 1)
      {
        particleList.push(new Particle(createVector(floor(random(width / pixelSize)) * pixelSize, floor(random(height / pixelSize)) * pixelSize), pixelSize));
      }
    }
  }

  // noLoop();
}
