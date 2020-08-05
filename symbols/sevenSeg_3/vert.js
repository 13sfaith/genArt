class Vert
{
  constructor(pos)
  {
    this.pos = pos;
    this.active = false;
  }

  randActive()
  {
    this.active = random(1) > 0.5;
  }
}
