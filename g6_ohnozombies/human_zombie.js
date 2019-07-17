class Human {
  constructor() {
    this.step = 0;
    this.item = [];
  }
  rollDice () {
    var random = Math.floor(Math.random() * 6 + 1);
    var buttonDice = $("<button>").addClass("dice").text(random).css({"width":"30px", "height":"30px"});
    $("body").append(buttonDice);
  }
}

class Zombie {
  constructor() {
    this.step = 0;
  }
}
