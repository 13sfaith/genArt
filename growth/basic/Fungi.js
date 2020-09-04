class Fungi
{
  constructor(scale)
  {
    this.points = [];
    this.totalPoints = 10;
    for (let i = 0; i < TWO_PI; i += (TWO_PI / this.totalPoints))
    {
      this.points.push(createVector(cos(i) * scale + (width / 2), sin(i) * scale + (height / 2), 1));
    }

    this.distance = 2;
  }

  display()
  {
    stroke(255);

    strokeWeight(1);
    beginShape();
    for (let i = 0; i < this.points.length; i++)
    {
      vertex(this.points[i].x, this.points[i].y);
    }
    endShape(CLOSE);

    strokeWeight(5);
    // point(this.points[0].x, this.points[0].y);
  }

  move()
  {
    let amt = 0.1;
    let dif;
    let prev, post, cur, mid;

    for (let i = 0; i < this.points.length; i++)
    {
      // print(this.points[i].mag());
      cur = this.points[i];
      prev = (i === 0 ? this.points[this.points.length - 1] : this.points[i - 1]);
      post = this.points[(i + 1) % this.points.length];
      mid = createVector((prev.x + post.x) /  2, (prev.y + post.y) / 2);

      point(mid.x, mid.y);

      if (mid.mag() > cur.mag())
      {
        dif = p5.Vector.sub(mid, cur);
        this.points[i].add(dif.mult(createVector(amt, amt)));
      }
      else
      {
        dif = p5.Vector.sub(cur, mid);
        this.points[i].sub(dif.mult(createVector(amt, amt)));
      }


    }

    // let slp = createVector(this.points[1].x - this.points[0].x, this.points[1].y - this.points[0].y);
    // slp.add(createVector(this.points[9].x - this.points[0].x, this.points[9].y - this.points[0].y));
    // // print(dot/mag);
    //
    // this.points[0].x += (amt * slp.x);
    // this.points[0].y += (amt * slp.y);
  }

}
