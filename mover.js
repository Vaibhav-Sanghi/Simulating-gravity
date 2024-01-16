class Mover {
  constructor(x, y, mass, size) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(5, 0);
    this.acc = new Vector(0, 0);
    this.mass = mass;
    this.r = size;
  }

  applyForce(force) {
    let f = Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
    ctx.fill();
  }

  wrap(width, height) {
    // TO BOUNCE AT THE BOUNDARIES:
    if (this.pos.x > width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }

    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    } else if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }
  }
}
