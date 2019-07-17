class Human {
  constructor() {
    this.step = 0;
    this.item = [];
  }
  setStep(step){
    this.step = step;
  }
  getStep(){
    return this.step;
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
