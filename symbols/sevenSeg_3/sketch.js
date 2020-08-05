let vertList;
let rows = 3, cols = 3;
let counter = 0;
let max;

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

  frameRate(1);

}


function draw() {
  background(30);
  stroke(255);
  strokeWeight(10);
  setActives();
  for (let i = 0; i < vertList.length; i++)
  {
    if (vertList[i].active)
    {
      point(vertList[i].pos.x, vertList[i].pos.y);
      for(let j = 0; j < vertList.length; j++)
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
