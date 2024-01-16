class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  mult(n) {
    this.x *= n;
    this.y *= n;
  }

  div(n) {
    this.x /= n;
    this.y /= n;
  }

  static add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static sub(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }

  static mult(v, n) {
    return new Vector(v.x * n, v.y * n);
  }

  static div(v, n) {
    return n == 0 ? v : new Vector(v.x / n, v.y / n);
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    let m = this.mag();
    if (m > 0) this.div(m);
  }

  setMag(n) {
    this.normalize();
    this.mult(n);
  }

  limit(max) {
    if (this.mag() > max) this.setMag(max);
  }

  copy() {
    return new Vector(this.x, this.y);
  }
}
