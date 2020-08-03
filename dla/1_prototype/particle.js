class Particle
{
  constructor(pos, ps)
  {
    this.pos = pos;
    this.ps = ps;
    this.active = true;
  }

  move()
  {
    let mv = createVector(floor(random(-1, 2)) * this.ps, floor(random(-1, 2)) * this.ps);

    if (this.pos.x > width)
    {
      mv.x *= -1;
    }
    if (this.pos.x < 0)
    {
      mv.x *= 1;
    }
    if (this.pos.y < 0)
    {
      mv.y *= 1;
    }
    if (this.pos.y > height)
    {
      mv.y *= -1;
    }

    this.pos.add(mv);

    // return mv;
  }

  set(val)
  {
    this.pos.add(val);
  }

  deactivate()
  {
    this.active = false;
  }
}
