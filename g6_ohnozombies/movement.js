function displayPositionUp() {
  switch (current) {
    case 52:
      current = 48;
      break;
    case 48:
      current = 39;
      break;
    case 39:
      current = 34;
      break;
    case 34:
      current = 27;
      break;
    case 27:
      current = 22;
      break;
    case 22:
      current = 13;
      break;
    case 13:
      current = 9;
      break;
    case 9:
      current = 0;
      break;
    case 0:
      current = 0;
      break;
    case 54:
      current = 49;
      break;
    case 49:
      current = 41;
      break;
    case 41:
      current = 35;
      break;
    case 35:
      current = 28;
      break;
    case 28:
      current = 23;
      break;
    case 23:
      current = 15;
      break;
    case 15:
      current = 10;
      break;
    case 10:
      current = 2;
      break;
    case 2:
      current = 2;
      break;
    case 43:
      current = 36;
      break;
    case 36:
      current = 30;
      break;
    case 30:
      current = 24;
      break;
    case 24:
      current = 17;
      break;
    case 17:
      current = 17;
      break;
    case 58:
      current = 50;
      break;
    case 50:
      current = 45;
      break;
    case 45:
      current = 37;
      break;
    case 37:
      current = 32;
      break;
    case 32:
      current = 25;
      break;
    case 25:
      current = 19;
      break;
    case 19:
      current = 11;
      break;
    case 11:
      current = 6;
      break;
    case 6:
      current = 6;
      break;
    case 60:
      current = 51;
      break;
    case 51:
      current = 47;
      break;
    case 47:
      current = 38;
      break;
    case 38:
      current = 33;
      break;
    case 33:
      current = 26;
      break;
    case 26:
      current = 21;
      break;
    case 21:
      current = 12;
      break;
    case 12:
      current = 8;
      break;
    case 8:
      current = 8;
      break;
  }
  $(".human").remove();
  var human = $("<img>").addClass("human lost");
  $(position[current]).append(human);
}

function displayPositionDown() {
  switch (current) {
    case 0:
      current = 9;
      break;
    case 9:
      current = 13;
      break;
    case 13:
      current = 22;
      break;
    case 22:
      current = 27;
      break;
    case 27:
      current = 34;
      break;
    case 34:
      current = 39;
      break;
    case 39:
      current = 48;
      break;
    case 48:
      current = 52;
      break;
    case 52:
      current = 52;
      break;
    case 2:
      current = 10;
      break;
    case 10:
      current = 15;
      break;
    case 15:
      current = 23;
      break;
    case 23:
      current = 28;
      break;
    case 28:
      current = 35;
      break;
    case 35:
      current = 41;
      break;
    case 41:
      current = 49;
      break;
    case 49:
      current = 54;
      break;
    case 54:
      current = 54;
      break;
    case 17:
      current = 24;
      break;
    case 24:
      current = 30;
      break;
    case 30:
      current = 36;
      break;
    case 36:
      current = 43;
      break;
    case 43:
      current = 43;
      break;
    case 6:
      current = 11;
      break;
    case 11:
      current = 19;
      break;
    case 19:
      current = 25;
      break;
    case 25:
      current = 32;
      break;
    case 32:
      current = 37;
      break;
    case 37:
      current = 45;
      break;
    case 45:
      current = 50;
      break;
    case 50:
      current = 58;
      break;
    case 58:
      current = 58;
      break;
    case 8:
      current = 12;
      break;
    case 12:
      current = 21;
      break;
    case 21:
      current = 26;
      break;
    case 26:
      current = 33;
      break;
    case 33:
      current = 38;
      break;
    case 38:
      current = 47;
      break;
    case 47:
      current = 51;
      break;
    case 51:
      current = 60;
      break;
    case 60:
      current = 60;
      break;
  }
  $(".human").remove();
  var human = $("<img>").addClass("human lost");
  $(position[current]).append(human);
}

function displayPositionLeft() {
  switch (current) {
    case 32:
      current = 31;
      break;
    case 31:
      current = 30;
      break;
    case 30:
      current = 29;
      break;
    case 29:
      current = 28;
      break;
    case 28:
      current = 28;
      break;
    case 8:
      current = 7;
      break;
    case 7:
      current = 6;
      break;
    case 6:
      current = 5;
      break;
    case 5:
      current = 4;
      break;
    case 4:
      current = 3;
      break;
    case 3:
      current = 2;
      break;
    case 2:
      current = 1;
      break;
    case 1:
      current = 0;
      break;
    case 0:
      current = 0;
      break;
    case 21:
      current = 20;
      break;
    case 20:
      current = 19;
      break;
    case 19:
      current = 18;
      break;
    case 18:
      current = 17;
      break;
    case 17:
      current = 16;
      break;
    case 16:
      current = 15;
      break;
    case 15:
      current = 14;
      break;
    case 14:
      current = 13;
      break;
    case 13:
      current = 13;
      break;
    case 47:
      current = 46;
      break;
    case 46:
      current = 45;
      break;
    case 45:
      current = 44;
      break;
    case 44:
      current = 43;
      break;
    case 43:
      current = 42;
      break;
    case 42:
      current = 41;
      break;
    case 41:
      current = 40;
      break;
    case 40:
      current = 39;
      break;
    case 39:
      current = 39;
      break;
    case 60:
      current = 59;
      break;
    case 59:
      current = 58;
      break;
    case 58:
      current = 57;
      break;
    case 57:
      current = 56;
      break;
    case 56:
      current = 55;
      break;
    case 55:
      current = 54;
      break;
    case 54:
      current = 53;
      break;
    case 53:
      current = 52;
      break;
    case 52:
      current = 52;
      break;
  }
  $(".human").remove();
  var human = $("<img>").addClass("human lost");
  $(position[current]).append(human);
}

function displayPositionRight() {
  switch (current) {
    case 0:
      current = 1;
      break;
    case 1:
      current = 2;
      break;
    case 2:
      current = 3;
      break;
    case 3:
      current = 4;
      break;
    case 4:
      current = 5;
      break;
    case 5:
      current = 6;
      break;
    case 6:
      current = 7;
      break;
    case 7:
      current = 8;
      break;
    case 8:
      current = 8;
      break;
    case 13:
      current = 14;
      break;
    case 14:
      current = 15;
      break;
    case 15:
      current = 16;
      break;
    case 16:
      current = 17;
      break;
    case 17:
      current = 18;
      break;
    case 18:
      current = 19;
      break;
    case 19:
      current = 20;
      break;
    case 20:
      current = 21;
      break;
    case 21:
      current = 21;
      break;
    case 28:
      current = 29;
      break;
    case 29:
      current = 30;
      break;
    case 30:
      current = 31;
      break;
    case 31:
      current = 32;
      break;
    case 32:
      current = 32;
      break;
    case 39:
      current = 40;
      break;
    case 40:
      current = 41;
      break;
    case 41:
      current = 42;
      break;
    case 42:
      current = 43;
      break;
    case 43:
      current = 44;
      break;
    case 44:
      current = 45;
      break;
    case 45:
      current = 46;
      break;
    case 46:
      current = 47;
      break;
    case 47:
      current = 47;
      break;
    case 52:
      current = 53;
      break;
    case 53:
      current = 54;
      break;
    case 54:
      current = 55;
      break;
    case 55:
      current = 56;
      break;
    case 56:
      current = 57;
      break;
    case 57:
      current = 58;
      break;
    case 58:
      current = 59;
      break;
    case 59:
      current = 60;
      break;
    case 60:
      current = 60;
      break;
  }
  $(".human").remove();
  var human = $("<img>").addClass("human lost");
  $(position[current]).append(human)
}
