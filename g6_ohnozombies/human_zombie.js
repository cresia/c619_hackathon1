class Human {
  constructor() {
    this.step = 0;
    this.item = [];
    this.battery1 = false;
    this.turn = false;
    this.current = 30;
  }
  setStep(step) {
    this.step = step;
  }
}

class Zombie {
  constructor() {
    this.step = 0;
    this.color = "white";
  }
  setStep(step) {
    this.step = step;
  }
  getStep() {
    return this.step;
  }
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}
