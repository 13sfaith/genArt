class Fungi
{
  constructor(scale)
  {
    this.points = [];
    for (let i = 0; i < TWO_PI; i += (TWO_PI / 10))
    {
      this.points.push(createVector(cos(i) * scale + (width / 2), sin(i) * scale + (height / 2), 1));
    }

    this.distance = 2;
  }

  display()
  {
    stroke(255);

    beginShape();
    for (let i = 0; i < this.points.length; i++)
    {
      vertex(this.points[i].x, this.points[i].y);
    }
    endShape(CLOSE);
  }

  move()
  {


    for (let j = 1; j < this.points.length; j++)
    {
      let travel = p5.Vector.add(this.points[(j - 1)], this.points[(j + 1) % this.points.length]);
      this.points[j].add(travel);
      print(travel);
    }
  }
}
