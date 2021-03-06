let particleList;
let aggregateGrid;
let pixelSize = 4;
let pixelCount =4000;
let hu = 40;

function setup() {
  createCanvas(720, 720);
  colorMode(HSB, 100);
  background(10, 40, 60);
  frameRate(20);

  particleList = new Array();
  aggregateGrid = new Array();

  //create particles
  for (let i = 0; i < pixelCount; i++)
  {
    // particleList.push(new Particle(createVector(floor(random(width / pixelSize)) * pixelSize, floor(random(height / pixelSize)) * pixelSize), pixelSize));
    particleList.push(new Particle(createVector(random(1) + width/2, random(1) + height / 2), pixelSize));
  }

  // for (let i = 0; i < width; i += pixelSize)
  // {
  //   aggregateGrid.push(createVector(i, height / 2));
  // }
  noStroke();
  // fill(hu, 40, 70);
  // for (let i = 0; i < TWO_PI; i += 0.1)
  // {
  //   aggregateGrid.push(new Aggregate(createVector(cos(i) * (width / 4) + (width / 2), sin(i) * (height / 4)+ (height / 2)), pixelSize));
  // }

  aggregateGrid.push(new Aggregate(createVector(width / 4, height /4), pixelSize));
  aggregateGrid.push(new Aggregate(createVector(width * (3 / 4), height /4), pixelSize));
  aggregateGrid.push(new Aggregate(createVector(width * (3 / 4), height * (3 / 4)), pixelSize));
  aggregateGrid.push(new Aggregate(createVector(width / 4, height * (3 / 4)), pixelSize));
  // aggregateGrid.push(new Aggregate(createVector(width / 2, height / 2), pixelSize, hu));
  // fill(hu, 40, 70);

  for (let i = 0; i < aggregateGrid.length; i++)
  {
    // circle(aggregateGrid[i].pos.x, aggregateGrid[i].pos.y, aggregateGrid[i].size);
  }

}

function draw() {
  background(0, 0, 20);
  // noStroke();
  colorMode(HSB, 100);
  // fill(0, 40, hu);

  for (let i = 0; i < aggregateGrid.length; i++)
  {
    fill(0, 0, aggregateGrid[i].hu);
    aggregateGrid[i].life -= 0.5;
    circle(aggregateGrid[i].pos.x, aggregateGrid[i].pos.y, aggregateGrid[i].size);

    if (aggregateGrid[i].life <= 1)
    {
      aggregateGrid.splice(i, 1);
      // break;
    }
  }
  fill(0, 0, 0);
  for (let i = 0; i < particleList.length; i++)
  {
    if (particleList[i].active == true)
    {

      let pos = particleList[i].pos;
      // rect(pos.x, pos.y, pixelSize, pixelSize);
      // circle(pos.x, pos.y, particleList[i].ps);
      particleList[i].move();


      for (let k = 0; k < aggregateGrid.length; k++)
      {

        // fill(aggregateGrid[k].hu, 40, 70);
        // circle(aggregateGrid[k].pos.x, aggregateGrid[k].pos.y, aggregateGrid[k].size);
        // if (aggregateGrid[k].life <= 1)
        // {
        //   aggregateGrid.splice(k, 1);
        //   break;
        // }
        // let aPos = createVector(aggregateGrid[k].x, aggregateGrid[k].y);
        if (pos.dist(aggregateGrid[k].pos) <= aggregateGrid[k].size)
        {
          aggregateGrid.push(new Aggregate(pos, pixelSize, hu));
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
      if (pixelSize > 0.5)
      {
        particleList.push(new Particle(createVector(floor(random(width / pixelSize)) * pixelSize, floor(random(height / pixelSize)) * pixelSize), pixelSize, hu));
      }
    }
  }

  // print(aggregateGrid);
  // noLoop();
}
