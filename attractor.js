class Attractor {
  constructor(x, y, mass, size) {
    this.pos = new Vector(x, y);
    this.mass = mass;
    this.r = size;
    this.g = 6.67 * Math.pow(10, -29);
  }

  attract(m) {
    let force = Vector.sub(this.pos, m.pos);
    // let dist = Math.max(force.mag(), 1);
    let dist = Math.max(Math.min(25, force.mag()), 5);
    let strength = (this.g * this.mass * m.mass) / (dist * dist);
    force.setMag(strength);
    return force;
  }

  display() {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fill();
    ctx.stroke();
  }
}
