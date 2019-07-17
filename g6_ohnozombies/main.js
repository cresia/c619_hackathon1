$(document).ready(initializeApp);
var player1;
var random;

function initializeApp() {
  player1 = new Human();
  var buttonDice = $("<button>").addClass("dice").text("Dice").css({ "width": "30px", "height": "30px" });
  $("body").append(buttonDice);
  buttonDice.click(rollDice);
}

function rollDice(){
  random = Math.floor(Math.random() * 6 + 1);
  displayDice();
}

function displayDice() {
  var randomNumber = $("#randomNum").text(random);
  randomNumber.css({"width":"50px","height":"50px","background-color":"orange"});
  $("body").append(randomNumber);
}
