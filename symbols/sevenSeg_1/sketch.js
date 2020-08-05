let vertList;
let rows = 2, cols = 2;

function setup() {
  createCanvas(720, 720);
  background(30);

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

  frameRate(5);

}


function draw() {
  background(30);
  stroke(255);
  strokeWeight(1);
  for (let i = 0; i < vertList.length; i++)
  {
    point(vertList[i].pos.x, vertList[i].pos.y);

    if (vertList[i].active)
    {
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

  for (let i = 0; i < vertList.length; i++)
  {
    vertList[i].randActive();
  }
}
