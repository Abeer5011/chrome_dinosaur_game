class Cloud {
  static cloud_array = []
  constructor() {
    this.r = 50
    this.x = width
    this.y = height - 450
    this.vx = -4
  }

  move() {
    this.x += this.vx
  }
  static cloudRandom() {
    if (random(1) < 0.01) {
      Cloud.cloud_array.push(new Cloud())
    }
  }

  show() {
    image(coImg, this.x, this.y, this.r, this.r)

    if (this.x < 0) {
      let index = Cloud.cloud_array.indexOf(this)
      Cloud.cloud_array.splice(index, 1)
    }
  }
}
