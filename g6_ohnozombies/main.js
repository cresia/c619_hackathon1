$(document).ready(initializeApp);
var player1;
var random;

function initializeApp() {
  // player1 = new Human();
  var buttonDice = $(".dice")
  $(".boxDice").append(buttonDice);
  buttonDice.click(rollDice);
}

function rollDice(){
  random = Math.floor(Math.random() * 6 + 1);
  displayDice();
}

function displayDice() {
  var randomNumber = $("#randomNum").text(random);
  $("#randomNum").append(randomNumber);
}
