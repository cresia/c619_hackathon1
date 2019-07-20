class Zombie {
  constructor() {
    this.step = 0;
  }
  random(num){
    var random = Math.floor(Math.random() * num - 1)
    return random;
  }
}
