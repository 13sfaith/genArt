class Vert
{
  constructor(pos)
  {
    this.pos = pos;
    this.active = random(1) > 0.5;
  }

  randActive()
  {
    this.active = random(1) > 0.5;
  }
}
