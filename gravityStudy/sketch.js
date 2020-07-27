/*
Name: Spencer Faith
Date: 7/25/2020
Purpose: Utilizing newtons universal law of Gravity
this project serves as a creative application of the
equation.
Sources:
- Info on the equation: https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation
- Inspiration for the project: https://natureofcode.com/book/chapter-2-forces/
*/

let particleList;
let planetList;
function setup() {
  colorMode(HSB);
  createCanvas(1080, 1080);
  background(45, 50, 75);

  //initalize our particle classes
  particleList = [makeParticle()];
  for (let i = 0; i < 40; i++)
  {
    particleList.push(makeParticle());
  }


  planetList = [new Planet(createVector(width / 4, height * 3 /4), 25)];
  planetList.push(new Planet(createVector(width * 3 / 4, height / 4), 25));
  planetList.push(new Planet(createVector(width / 4, height /4), 25));
  planetList.push(new Planet(createVector(width * 3 / 4, height * 3 / 4), 25));

  stroke(255);
  strokeWeight(20);
  // point(planetList[0].pos.x, planetList[0].pos.y);
   // particleList.push(new Particle(createVector(random(width), random(height)), createVector(0.03, 0.05), 10))
  // particleList[0].calcVel(particleList[1]);
  // particleList[1].calcVel(particleList[0]);
}

function draw() {
  // background(0, 0, 0);
  strokeWeight(20);
  // point(planetList[0].pos.x, planetList[0].pos.y);
  for (let j = 0; j < particleList.length; j++)
  {
    for (let k = 0; k < particleList.length; k++)
    {
      if (j != k)
      {
        particleList[j].calcVel(particleList[k]);
      }
    }

    for (let q = 0; q < planetList.length; q++)
    {
      stroke(0, 0, 255);
      // point(planetList[q].pos.x, planetList[q].pos.y);
      particleList[j].calcVel(planetList[q]);
    }
  }

  for (let i = 0; i < particleList.length; i++)
  {
    // stroke(map(particleList[i].pos.x, 0, width, 0, 360), 100, 255, 0.1);
    stroke(5, 40, map(particleList[i].pos.dist(createVector(width / 2, height / 2)), 0, width / 2, 100, 0), 0.1);

    strokeWeight(particleList[i].mass);
    particleList[i].moveParticle();
    point(particleList[i].pos.x, particleList[i].pos.y);
    // strokeWeight(1);
    // stroke(255, 0, 0);
    // line(particleList[i].pos.x, particleList[i].pos.y,
      // particleList[i].pos.x + (particleList[i].vel.x * 100), particleList[i].pos.y + (particleList[i].vel.y * 100));
  }

}

function makeParticle()
{
  return new Particle(createVector(random(width), random(height)), createVector(random(2) - 1, random(2) - 1), random(8));
}
