let vertList;
let rows = 4, cols = 5;
let counter = 0;
let max, distanceLimit;

function setup() {
  createCanvas(720, 720);
  background(30);

  max = pow(2, rows * cols);
  vertList = new Array();

  // vertList = [new Vert(createVector(width / 4, height / 4)),
  //   new Vert(createVector(width * (2 / 4), height / 4)),
  //   new Vert(createVector(width * (3 / 4), height /4))];

  for (let j = 0; j < rows; j++)
  {
    for (let k = 0; k < cols; k++)
    {
      vertList.push(new Vert(createVector(width * ((k + 1) / (cols + 1)), height * ((j + 1) / (rows + 1)))));
    }
  }

  frameRate(30);

  if (rows * cols > 4)
  {
    distanceLimit = (vertList[0].pos.dist(vertList[rows + 2].pos));
  }

}


function draw() {
  background(30);
  stroke(255);
  setActives();
  for (let i = 0; i < vertList.length; i++)
  {
    strokeWeight(10);
    if (vertList[i].active)
    {
      point(vertList[i].pos.x, vertList[i].pos.y);
      strokeWeight(5);
      for(let j = 0; j < vertList.length; j++)
      {
        if (vertList[i].pos.dist(vertList[j].pos) <= distanceLimit)
        {
          beginShape();
          vertex(vertList[i].pos.x, vertList[i].pos.y);
          if (vertList[j].active)
          {
            vertex(vertList[j].pos.x, vertList[j].pos.y);
          }
          endShape();
        }
      }
    }
  }
}

function setActives()
{
  let a = dec2bin(counter);

  while(a.length < (rows * cols))
  {
    a = "0" + a;
  }
  // print(a);

  for (let i = 0; i < vertList.length; i++)
  {
    vertList[i].active = false;
  }

  for (let i = 0; i < a.length; i++)
  {
    if (a[i] == '1')
    {
      vertList[i].active = true;
    }
  }
  counter++;

  counter = counter % max;
}

function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
