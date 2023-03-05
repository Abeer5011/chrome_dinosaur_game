let dino
let dImg
let cImg
let bImg
let biImg
let coImg
let count = 0

let button
let fontsize = 30
function preload() {
  dImg = loadImage("img/dino.png")
  cImg = loadImage("img/car.png")
  bImg = loadImage("img/street.jpg")
  biImg = loadImage("img/bird.png")
  coImg = loadImage("img/cloud.png")
}

function setup() {
  createCanvas(800, 450)
  dino = new Dino()
  textAlign(CENTER)
  textSize(fontsize)
  button = createButton("try again")
  button.position(width / 2 - 25, height / 2.5)
  button.mousePressed(gameRestart)
  button.hide()
}
function keyPressed() {
  if (key === " ") {
    dino.jump()
  }
}

function draw() {
  background(bImg)
  gameOn()
  text(parseInt(count / 60), 30, 35)

  Cloud.cloudRandom()
  Cloud.cloud_array.forEach(cl => {
    cl.move()
    cl.show()
  })
}

function gameOn() {
  count += 1

  Car.carsRandom()
  Car.car_array.forEach(c => {
    c.move()
    c.show()

    if (dino.hits(c)) {
      gameOver()
    }
  })

  dino.show()
  dino.move()
  let n = 10
  if (count / 60 >= n) {
    Bird.bird_array.forEach(bird => {
      bird.show()
      bird.move()
      if (dino.hits(bird)) {
        gameOver()
      }
    })
    Bird.birdRandom()
  }
  let levels = [30, 50, 70, 100, 120]
  for (let i = 0; i < levels.length; i++) {
    if (count / 60 === levels[i]) {
      Bird.levelUp += 10
    }
  }
}

function gameOver() {
  noLoop()
  text("Game Over", width / 2, height / 6)
  text("Your Level is:", width / 2, height / 4)
  text(parseInt(Bird.levelUp), width / 2, height / 3)
  button.show()
}

function gameRestart() {
  count = 0
  Cloud.cloud_array = []
  Car.car_array = []
  Bird.levelUp = 10
  button.hide()
  loop()
}
