$(document).ready(initializeApp);
var player1;
var random;
var current = 0;
var position = [
  ".pos32",
  ".pos23",
  ".pos24",
  ".pos25",
  ".pos34",
  ".pos43",
  ".pos52",
  ".pos61",
  ".pos60",
  ".pos59",
  ".pos58",
  ".pos57",
  ".pos48",
  ".pos39",
  ".pos30",
  ".pos21",
  ".pos41",
  ".pos42",
  ".pos50",
  ".pos22",
  ".pos40"
]

function initializeApp() {
  player1 = new Human();
  var buttonDice = $(".dice")
  $(".boxDice").append(buttonDice);
  buttonDice.click(rollDice);
  var buttonMove = $("<button>").addClass("movement").text("Move").css({ "width": "30px", "height": "30px" });
  $("body").append(buttonMove);
  buttonMove.click(displayPosition);
  console.log(position.length);
}

function rollDice() {
  random = Math.floor(Math.random() * 6 + 1);
  displayDice();
}

function displayDice() {
  var randomNumber = $("#randomNum").text(random);

  $("#randomNum").append(randomNumber);
}

function displayPosition() {
  $("body").append($(".human").hide());
  var human = $(".human").css("display", "inline");
  switch(current){
    case 0:
      $(position[current]).append(human);
      current = 1;
      break;
    case 1:
      $(position[current]).append(human);
      break;
  }
  // var human = $(".human").css("display","inline");
  // console.log(human);
  // $(position[current]).append(human);
}
