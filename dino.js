class Dino {
  constructor() {
    this.r = 100
    this.x = 50
    this.y = height - 100
    this.vy = 0
    this.gravity = 2
  }
  jump() {
    if (this.y == height - 100) {
      this.vy = -35
    }
  }

  hits(cars) {
    let x1 = this.x + this.r * 0.5
    let y1 = this.y + this.r * 0.5
    let x2 = cars.x + cars.r * 0.5
    let y2 = cars.y + cars.r * 0.5
    return collideCircleCircle(x1, y1, this.r, x2, y2, cars.r)
  }

  move() {
    this.y += this.vy
    this.vy += this.gravity
    this.y = constrain(this.y, 0, height - 100)
  }
  show() {
    image(dImg, this.x, this.y, this.r, this.r)
  }
}
