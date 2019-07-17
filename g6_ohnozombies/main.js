$(document).ready(initializeApp);
var player1;
var random;

function initializeApp() {
  player1 = new Human();
  var buttonDice = $("<button>").addClass("dice").text("Dice").css({ "width": "30px", "height": "30px" });
  buttonDice.on("click",rollDice);
  console.log(buttonDice.on("click", rollDice));
  buttonDice.text(random);
  $("body").append(buttonDice);
}

function rollDice(){
  random = Math.floor(Math.random() * 6 + 1);
  return random;
}
