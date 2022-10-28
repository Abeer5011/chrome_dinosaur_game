class Bird {
  static bird_array = []
  static levelUp = 10
  constructor() {
    this.r = 80
    this.x = width
    this.y = height - 300
    this.vx = -8
  }

  move() {
    this.x += this.vx
  }

  static birdRandom() {
    if (random(1) < 0.003) {
      Bird.bird_array.push(new Bird())
    }
  }

  show() {
    image(biImg, this.x, this.y, this.r, this.r)

    if (this.x < 0) {
      let index = Bird.bird_array.indexOf(this)
      Bird.bird_array.splice(index, 1)
    }
  }
}
