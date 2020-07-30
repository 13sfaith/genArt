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

let planetCount = 3;

let particleList;
let planetList = new Array();
function setup() {
  colorMode(HSB);
  createCanvas(1080, 1080);
  background(45, 50, 75);

  //initalize our particle classes
  particleList = new Array();
  for (let i = 0; i < planetCount; i++)
  {
    particleList.push(makeParticle());
  }

  planetList.push(new Planet(createVector(width / 2, height / 2), 15));


  //recording junk
  frameRate(60);

}

let dt = 0;

function draw() {
  background(45 + dt, 50, 75, 0.2);
  dt += 0.1;
  strokeWeight(10);
  // point(planetList[0].pos.x, planetList[0].pos.y);
  for (let j = 0; j < particleList.length; j++)
  {
    // beginShape();
    // stroke(45 + 360, 50, 20, 1);
    // vertex(particleList[j].pos.x, particleList[j].pos.y);
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
    particleList[j].moveParticle();
    // vertex(particleList[j].pos.x, particleList[j].pos.y);
    // endShape();
  }
  stroke(45 + 360, 50, 20, 1);
  for (let i = 0; i < particleList.length; i++)
  {
    beginShape();
    vertex(particleList[i].pos.x, particleList[i].pos.y);
    vertex(particleList[(i+1) % particleList.length].pos.x, particleList[(i+1) % particleList.length].pos.y);
    endShape();
  }

  // beginShape();
  // for (let i = 0; i < particleList.length; i++)
  // {
  //   vertex(particleList[i].pos.x, particleList[i].pos.y);
  // }
  // endShape(CLOSE);

  // for (let i = 0; i < particleList.length; i++)
  // {
  //   // stroke(map(particleList[i].pos.x, 0, width, 0, 360), 100, 255, 0.1);
  //   // stroke(45, 40, map(particleList[i].pos.dist(createVector(width / 2, height / 2)), 0, width / 2, 100, 40), 0.5);
  //   stroke(45 + 360, 50, 20, 1);
  //   strokeWeight(particleList[i].mass);
  //   particleList[i].moveParticle();
  //   point(particleList[i].pos.x, particleList[i].pos.y);
  //   // strokeWeight(1);
  //   // stroke(255, 0, 0);
  //   // line(particleList[i].pos.x, particleList[i].pos.y,
  //     // particleList[i].pos.x + (particleList[i].vel.x * 100), particleList[i].pos.y + (particleList[i].vel.y * 100));
  // }

}

function makeParticle()
{
  return new Particle(createVector(random(width - width / 2) + width / 4, random(height - height / 2) + height / 4), createVector(random(2) - 1, random(2) - 1), random(10) + 5);
}
