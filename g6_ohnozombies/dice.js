class Zdice {
  constructor(){
    this.buttonDice = $(".dice");
    this.result = 0;
  }
  rollDice() {
    var random = Math.floor(Math.random() * 6 + 1);
    this.result = random;
    var setZombieNum = $(".zombieNum").text(random)
    $(".zombieNum").append(setZombieNum);
  }
  showMessage(){
    console.log("helloooooooo");
  }
}
