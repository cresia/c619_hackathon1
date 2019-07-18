$(document).ready(initializeApp);
var player1;
var random;
var current = 30;

var position = [
  ".pos1", ".pos2", ".pos3", ".pos4", ".pos5", ".pos6", ".pos7", ".pos8", ".pos9",
  ".pos10", ".pos12", ".pos16", ".pos18",
  ".pos19", ".pos20", ".pos21", ".pos22", ".pos23", ".pos24", ".pos25", ".pos26", ".pos27",
  ".pos28", ".pos30", ".pos32", ".pos34", ".pos36",
  ".pos37", ".pos39", ".pos40", ".pos41", ".pos42", ".pos43", ".pos45",
  ".pos46", ".pos48", ".pos50", ".pos52", ".pos54",
  ".pos55", ".pos56", ".pos57", ".pos58", ".pos59", ".pos60", ".pos61", ".pos62", ".pos63",
  ".pos64", ".pos66", ".pos70", ".pos72",
  ".pos73", ".pos74", ".pos75", ".pos76", ".pos77", ".pos78", ".pos79", ".pos80", ".pos81"

];

function initializeApp() {
  player1 = new Human();
  var buttonDice = $(".dice")
  $(".boxDice").append(buttonDice);
  buttonDice.click(rollDice);
  var buttonMoveUp = $("#moveUp");
  var buttonMoveDown = $("#moveDown");
  var buttonMoveLeft = $("#moveLeft");
  var buttonMoveRight = $("#moveRight");
  $(".sideList").append(buttonMoveUp);
  $(".sideList").append(buttonMoveDown);
  $(".sideList").append(buttonMoveLeft);
  $(".sideList").append(buttonMoveRight);
  buttonMoveUp.click(displayPositionUp);
  buttonMoveDown.click(displayPositionDown);
  buttonMoveLeft.click(displayPositionLeft);
  buttonMoveRight.click(displayPositionRight);
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

function displayPositionUp() {
  $("body").append($(".human").hide());
  var human = $(".human").css("display", "inline");

  switch (current) {
    case 52:
      $(position[current]).append(human);
      current = 48;
      break;
    case 48:
      $(position[current]).append(human);
      current = 39;
      break;
    case 39:
      $(position[current]).append(human);
      current = 34;
      break;
    case 34:
      $(position[current]).append(human);
      current = 27;
      break;
    case 27:
      $(position[current]).append(human);
      current = 22;
      break;
    case 22:
      $(position[current]).append(human);
      current = 13;
      break;
    case 13:
      $(position[current]).append(human);
      current = 9;
      break;
    case 9:
      $(position[current]).append(human);
      current = 0;
      break;
    case 0:
      $(position[current]).append(human);
      current = 0;
      break;
    case 54:
      $(position[current]).append(human);
      current = 49;
      break;
    case 49:
      $(position[current]).append(human);
      current = 41;
      break;
    case 41:
      $(position[current]).append(human);
      current = 35;
      break;
    case 35:
      $(position[current]).append(human);
      current = 28;
      break;
    case 28:
      $(position[current]).append(human);
      current = 23;
      break;

    case 23:
      $(position[current]).append(human);
      current = 15;
      break;
    case 15:
      $(position[current]).append(human);
      current = 10;
      break;
    case 10:
      $(position[current]).append(human);
      current = 2;
      break;
    case 2:
      $(position[current]).append(human);
      current = 2;
      break;
    case 43:
      $(position[current]).append(human);
      current = 36;
      break;
    case 36:
      $(position[current]).append(human);
      current = 30;
      break;
    case 30:
      $(position[current]).append(human);
      current = 24;
      break;
    case 24:
      $(position[current]).append(human);
      current = 17;
      break;
    case 17:
      $(position[current]).append(human);
      current = 17;
      break;

    case 58:
      $(position[current]).append(human);
      current = 50;
      break;
    case 50:
      $(position[current]).append(human);
      current = 45;
      break;
    case 45:
      $(position[current]).append(human);
      current = 37;
      break;
    case 37:
      $(position[current]).append(human);
      current = 32;
      break;
    case 32:
      $(position[current]).append(human);
      current = 25;
      break;
    case 25:
      $(position[current]).append(human);
      current = 19;
      break;
    case 19:
      $(position[current]).append(human);
      current = 11;
      break;
    case 11:
      $(position[current]).append(human);
      current = 6;
      break;
    case 6:
      $(position[current]).append(human);
      current = 6;
      break;


    case 60:
      $(position[current]).append(human);
      current = 51;
      break;
    case 51:
      $(position[current]).append(human);
      current = 47;
      break;
    case 47:
      $(position[current]).append(human);
      current = 38;
      break;
    case 38:
      $(position[current]).append(human);
      current = 33;
      break;
    case 33:
      $(position[current]).append(human);
      current = 26;
      break;
    case 26:
      $(position[current]).append(human);
      current = 21;
      break;
    case 21:
      $(position[current]).append(human);
      current = 12;
      break;
    case 12:
      $(position[current]).append(human);
      current = 8;
      break;
    case 8:
      $(position[current]).append(human);
      current = 8;
      break;
  }
}



function displayPositionDown() {
  $("body").append($(".human").hide());
  var human = $(".human").css("display", "inline");
  switch (current) {
    case 0:
      $(position[current]).append(human);
      current = 9;
      break;
    case 9:
      $(position[current]).append(human);
      current = 13;
      break;
    case 13:
      $(position[current]).append(human);
      current = 22;
      break;
    case 22:
      $(position[current]).append(human);
      current = 27;
      break;
    case 27:
      $(position[current]).append(human);
      current = 34;
      break;
    case 34:
      $(position[current]).append(human);
      current = 39;
      break;
    case 39:
      $(position[current]).append(human);
      current = 48;
      break;
    case 48:
      $(position[current]).append(human);
      current = 52;
      break;
    case 52:
      $(position[current]).append(human);
      current = 52;
      break;

    case 2:
      $(position[current]).append(human);
      current = 10;
      break;
    case 10:
      $(position[current]).append(human);
      current = 15;
      break;
    case 15:
      $(position[current]).append(human);
      current = 23;
      break;
    case 23:
      $(position[current]).append(human);
      current = 28;
      break;
    case 28:
      $(position[current]).append(human);
      current = 35;
      break;
    case 35:
      $(position[current]).append(human);
      current = 41;
      break;
    case 41:
      $(position[current]).append(human);
      current = 49;
      break;
    case 49:
      $(position[current]).append(human);
      current = 54;
      break;
    case 54:
      $(position[current]).append(human);
      current = 54;
      break;

    case 17:
      $(position[current]).append(human);
      current = 24;
      break;
    case 24:
      $(position[current]).append(human);
      current = 30;
      break;
    case 30:
      $(position[current]).append(human);
      current = 36;
      break;
    case 36:
      $(position[current]).append(human);
      current = 43;
      break;
    case 43:
      $(position[current]).append(human);
      current = 43;
      break;

    case 6:
      $(position[current]).append(human);
      current = 11;
      break;
    case 11:
      $(position[current]).append(human);
      current = 19;
      break;
    case 19:
      $(position[current]).append(human);
      current = 25;
      break;
    case 25:
      $(position[current]).append(human);
      current = 32;
      break;
    case 32:
      $(position[current]).append(human);
      current = 37;
      break;
    case 37:
      $(position[current]).append(human);
      current = 45;
      break;
    case 45:
      $(position[current]).append(human);
      current = 50;
      break;
    case 50:
      $(position[current]).append(human);
      current = 58;
      break;
    case 58:
      $(position[current]).append(human);
      current = 58;
      break;

    case 8:
      $(position[current]).append(human);
      current = 12;
      break;
    case 12:
      $(position[current]).append(human);
      current = 21;
      break;
    case 21:
      $(position[current]).append(human);
      current = 26;
      break;
    case 26:
      $(position[current]).append(human);
      current = 33;
      break;
    case 33:
      $(position[current]).append(human);
      current = 38;
      break;
    case 38:
      $(position[current]).append(human);
      current = 47;
      break;
    case 47:
      $(position[current]).append(human);
      current = 51;
      break;
    case 51:
      $(position[current]).append(human);
      current = 60;
      break;
    case 60:
      $(position[current]).append(human);
      current = 60;
      break;
  }
}



function displayPositionLeft() {
  $("body").append($(".human").hide());
  var human = $(".human").css("display", "inline");
  debugger;
  switch (current) {
    case 32:
      $(position[current]).append(human);
      current = 31;
      break;
    case 31:
      $(position[current]).append(human);
      current = 30;
      break;
    case 30:
      $(position[current]).append(human);
      current = 29;
      break;
    case 29:
      $(position[current]).append(human);
      current = 28;
      break;
    case 28:
      $(position[current]).append(human);
      current = 28;
      break;
    case 8:
      $(position[current]).append(human);
      current = 7;
      break;
    case 7:
      $(position[current]).append(human);
      current = 6;
      break;
    case 6:
      $(position[current]).append(human);
      current = 5;
      break;
    case 5:
      $(position[current]).append(human);
      current = 4;
      break;
    case 4:
      $(position[current]).append(human);
      current = 3;
      break;
    case 3:
      $(position[current]).append(human);
      current = 2;
      break;
    case 2:
      $(position[current]).append(human);
      current = 1;
      break;
    case 1:
      $(position[current]).append(human);
      current = 0;
      break;
    case 0:
      $(position[current]).append(human);
      current = 0;
      break;

    case 21:
      $(position[current]).append(human);
      current = 20;
      break;
    case 20:
      $(position[current]).append(human);
      current = 19;
      break;
    case 19:
      $(position[current]).append(human);
      current = 18;
      break;
    case 18:
      $(position[current]).append(human);
      current = 17;
      break;
    case 17:
      $(position[current]).append(human);
      current = 16;
      break;
    case 16:
      $(position[current]).append(human);
      current = 15;
      break;
    case 15:
      $(position[current]).append(human);
      current = 14;
      break;
    case 14:
      $(position[current]).append(human);
      current = 13;
      break;
    case 13:
      $(position[current]).append(human);
      current = 13;
      break;

    case 47:
      $(position[current]).append(human);
      current = 46;
      break;
    case 46:
      $(position[current]).append(human);
      current = 45;
      break;
    case 45:
      $(position[current]).append(human);
      current = 44;
      break;
    case 44:
      $(position[current]).append(human);
      current = 43;
      break;
    case 43:
      $(position[current]).append(human);
      current = 42;
      break;
    case 42:
      $(position[current]).append(human);
      current = 41;
      break;
    case 41:
      $(position[current]).append(human);
      current = 40;
      break;
    case 40:
      $(position[current]).append(human);
      current = 39;
      break;
    case 39:
      $(position[current]).append(human);
      current = 39;
      break;


    case 60:
      $(position[current]).append(human);
      current = 59;
      break;
    case 59:
      $(position[current]).append(human);
      current = 58;
      break;
    case 58:
      $(position[current]).append(human);
      current = 57;
      break;
    case 57:
      $(position[current]).append(human);
      current = 56;
      break;
    case 56:
      $(position[current]).append(human);
      current = 55;
      break;
    case 55:
      $(position[current]).append(human);
      current = 54;
      break;
    case 54:
      $(position[current]).append(human);
      current = 53;
      break;
    case 53:
      $(position[current]).append(human);
      current = 52;
      break;
    case 52:
      $(position[current]).append(human);
      current = 52;
      break;
  }
}



function displayPositionRight() {
  $("body").append($(".human").hide());
  var human = $(".human").css("display", "inline");
  switch (current) {
    case 0:
      $(position[current]).append(human);
      current = 1;
      break;
    case 1:
      $(position[current]).append(human);
      current = 2;
      break;
    case 2:
      $(position[current]).append(human);
      current = 3;
      break;
    case 3:
      $(position[current]).append(human);
      current = 4;
      break;
    case 4:
      $(position[current]).append(human);
      current = 5;
      break;
    case 5:
      $(position[current]).append(human);
      current = 6;
      break;
    case 6:
      $(position[current]).append(human);
      current = 7;
      break;
    case 7:
      $(position[current]).append(human);
      current = 8;
      break;
    case 8:
      $(position[current]).append(human);
      current = 8;
      break;
    case 13:
      $(position[current]).append(human);
      current = 14;
      break;
    case 14:
      $(position[current]).append(human);
      current = 15;
      break;
    case 15:
      $(position[current]).append(human);
      current = 16;
      break;
    case 16:
      $(position[current]).append(human);
      current = 17;
      break;
    case 17:
      $(position[current]).append(human);
      current = 18;
      break;

    case 18:
      $(position[current]).append(human);
      current = 19;
      break;
    case 19:
      $(position[current]).append(human);
      current = 20;
      break;
    case 20:
      $(position[current]).append(human);
      current = 21;
      break;
    case 21:
      $(position[current]).append(human);
      current = 21;
      break;
    case 28:
      $(position[current]).append(human);
      current = 29;
      break;
    case 29:
      $(position[current]).append(human);
      current = 30;
      break;
    case 30:
      $(position[current]).append(human);
      current = 31;
      break;
    case 31:
      $(position[current]).append(human);
      current = 32;
      break;
    case 32:
      $(position[current]).append(human);
      current = 32;
      break;

    case 39:
      $(position[current]).append(human);
      current = 40;
      break;
    case 40:
      $(position[current]).append(human);
      current = 41;
      break;
    case 41:
      $(position[current]).append(human);
      current = 42;
      break;
    case 42:
      $(position[current]).append(human);
      current = 43;
      break;
    case 43:
      $(position[current]).append(human);
      current = 44;
      break;
    case 44:
      $(position[current]).append(human);
      current = 45;
      break;
    case 45:
      $(position[current]).append(human);
      current = 46;
      break;
    case 46:
      $(position[current]).append(human);
      current = 47;
      break;
    case 47:
      $(position[current]).append(human);
      current = 47;
      break;


    case 52:
      $(position[current]).append(human);
      current = 53;
      break;
    case 53:
      $(position[current]).append(human);
      current = 54;
      break;
    case 54:
      $(position[current]).append(human);
      current = 55;
      break;
    case 55:
      $(position[current]).append(human);
      current = 56;
      break;
    case 56:
      $(position[current]).append(human);
      current = 57;
      break;
    case 57:
      $(position[current]).append(human);
      current = 58;
      break;
    case 58:
      $(position[current]).append(human);
      current = 59;
      break;
    case 59:
      $(position[current]).append(human);
      current = 60;
      break;
    case 60:
      $(position[current]).append(human);
      current = 60;
      break;
  }
}
