class Human {
  constructor() {
    this.step = 0;
    this.item = [];
    this.current = 30;
    this.battery1 = false;
    this.buttonMoveUp = $("#moveUp");
    this.buttonMoveDown = $("#moveDown");
    this.buttonMoveLeft = $("#moveLeft");
    this.buttonMoveRight = $("#moveRight");
    
  }
  setStep(step) {
    this.step = step;
  }
}
