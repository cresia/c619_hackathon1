$(document).ready(initializeApp);
var player1;
var random;
var current = 3;

var arrayBigleftRight1 = [];
var arrayBigLeftRight2 = [];


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
  var buttonMoveUp = $("#moveUp");
  var buttonMoveDown = $("#moveDown")
  $(".sideList").append(buttonMoveUp);
  buttonMoveUp.click(displayPosition);
  buttonMoveDown.click(displayPositionDown)
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

// function displayPosition() {
//   $("body").append($(".human").hide());
//   var human = $(".human").css("display", "inline");
//   switch(current){

//     case 11:
//       $(position[current]).append(human);
//       human.off("click");
//       current = 12;
//       break;
//     case 12:
//       $(position[current]).append(human);
//       current = 13;
//       break;
//     case 13:
//       $(position[current]).append(human);
//       current = 14;
//       break;
//     case 14:
//       $(position[current]).append(human);
//       current = 15;
//       break;
//     case 9:
//       $(position[current]).append(human);
//       current = 18;
//       break;
//     case 18:
//       $(position[current]).append(human);
//       current = 16;
//       break;
//     case 16:
//       $(position[current]).append(human);
//       current = 0;
//       break;
//     case 0:
//       $(position[current]).append(human);
//       current = 1;
//       break;
//     case 7:
//       $(position[current]).append(human);
//       current = 6;
//       break;
//     case 6:
//       $(position[current]).append(human);
//       current = 5;
//       break;
//     case 5:
//       $(position[current]).append(human);
//       current = 4;
//       break;
//     case 4:
//       $(position[current]).append(human);
//       current = 3;
//       break;


    // case 19:
    //   $(position[current]).append(human);
    //   buttonMoveUp.off("click");
  }
  // var human = $(".human").css("display","inline");
  // console.log(human);
  // $(position[current]).append(human);
}



// function displayPositionDown() {
//   $("body").append($(".human").hide());
//   var human = $(".human").css("display", "inline");
//   switch (current) {

//     case 12:
//       $(position[current]).append(human);
//       human.off("click");
//       current = 11;
//       break;
//     case 13:
//       $(position[current]).append(human);
//       current = 12;
//       break;
//     case 14:
//       $(position[current]).append(human);
//       current = 13;
//       break;
//     case 15:
//       $(position[current]).append(human);
//       current = 14;
//       break;
//     case 18:
//       $(position[current]).append(human);
//       current = 9;
//       break;
//     case 16:
//       $(position[current]).append(human);
//       current = 18;
//       break;
//     case 0:
//       $(position[current]).append(human);
//       current = 16;
//       break;
//     case 1:
//       $(position[current]).append(human);
//       current = 0;
//       break;
//     case 6:
//       $(position[current]).append(human);
//       current = 7;
//       break;
//     case 5:
//       $(position[current]).append(human);
//       current = 6;
//       break;
//     case 4:
//       $(position[current]).append(human);
//       current = 5;
//       break;
//     case 3:
//       $(position[current]).append(human);
//       current = 4;
//       break;

    // case 19:
    //   $(position[current]).append(human);
    //   buttonMoveUp.off("click");
 //}
  // var human = $(".human").css("display","inline");
  // console.log(human);
  // $(position[current]).append(human);
//}
