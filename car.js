class Car {
  static car_array = []
  static vx = -8

  constructor() {
    this.r = 80
    this.x = width
    this.y = height - 70
  }

  static setLevel(count) {
    let levels = count % Car.levelUp

    levels
  }

  move() {
    this.x += Car.vx
  }

  static carsRandom() {
    if (random(1) < 0.005) {
      this.car_array.push(new Car())
    }
  }

  show() {
    image(cImg, this.x, this.y, this.r, this.r)

    if (this.x < 0) {
      let index = Car.car_array.indexOf(this)
      Car.car_array.splice(index, 1)
    }
  }
}
