class Particle
{
  //initalize particle with a (position / velocity / mass)
  constructor(pos, vel, mass)
  {
    this.pos = pos;
    this.vel = vel;
    this.mass = mass;

    this.grav = 1.2;
  }

  calcVel(ref)
  {


    let force = p5.Vector.sub(this.pos, ref.pos);
    let distance = force.mag();
    distance = constrain(distance, 12, 75);
    force.normalize();
    let strength = this.grav * (this.mass * ref.mass) / distance ** 2;
    force.mult(strength);
    this.vel.sub(force);

    // let distance = dist(this.pos.x, this.pos.y, ref.pos.x, ref.pos.y) ** 2
    // distance = constrain(distance, 15, 75);
    // let force = this.grav * (this.mass * ref.mass) / distance;
    // let distDif = createVector((ref.pos.x - this.pos.x), (ref.pos.y - this.pos.y));
    // this.vel.x -= force * abs(distDif.x / (distDif.x + distDif.y));
    // this.vel.y -= force * abs(distDif.y / (distDif.x + distDif.y));


  }

  moveParticle()
  {
    // print(this.vel);
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
}
