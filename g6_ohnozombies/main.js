$(document).ready(initializeApp);

function initializeApp() {
  var player = new Human();
  var dice = new Zdice();

  var playerLocation = { xco: 0, yco: 0 };

  var mainCards = $(".mainCards");
  mainCards.append(player.buttonMoveUp);
  mainCards.append(player.buttonMoveDown);
  mainCards.append(player.buttonMoveLeft);
  mainCards.append(player.buttonMoveRight);

  $("[yco='" + playerLocation.xco + "'][xco='" + playerLocation.xco + "']").addClass("human");
  player.buttonMoveRight.click(moveRight);
  player.buttonMoveLeft.click(moveLeft);
  player.buttonMoveDown.click(moveDown);
  player.buttonMoveUp.click(moveUp);

  function setLocation() {
    $("[xco='" + playerLocation.xco + "'][yco='" + playerLocation.yco + "']").addClass("human");
  }

  function removeLocation() {
    $("[xco='" + playerLocation.xco + "'][yco='" + playerLocation.yco + "']").removeClass("human");
  }

  var boxDice = $(".boxDice");
  boxDice.append(dice.buttonDice);

  dice.buttonDice.click(function() {
    dice.rollDice();
    zombiesOnBoard();
  });

  function zombiesOnBoard(){
    console.log("Zombies are coming!!!!");
    var zombieArray = [];
    for (var i = 0; i < dice.result; i++){
      var zombie = new Zombie();
      zombieArray.push(zombie);
    }
    console.log(zombieArray);
  }

  function moveLeft() {
    var checkX = $("[yco='" + (playerLocation.yco) + "'][xco='" + (playerLocation.xco - 1) + "']").hasClass("hidden");
    if (playerLocation.xco > -4 && checkX === false) {
      removeLocation(playerLocation.yco);
      removeLocation(playerLocation.xco);
      playerLocation.xco -= 1;
      setLocation(playerLocation.xco);
    }
  }

  function moveRight() {
    var checkX = $("[yco='" + (playerLocation.yco) + "'][xco='" + (playerLocation.xco + 1) + "']").hasClass("hidden");
    if (playerLocation.xco < 4 && checkX === false) {
      removeLocation(playerLocation.xco);
      removeLocation(playerLocation.yco);
      playerLocation.xco += 1;
      setLocation(playerLocation.xco);
    }
  }

  function moveUp() {
    var checkY = $("[yco='" + (playerLocation.yco + 1) + "'][xco='" + (playerLocation.xco) + "']").hasClass("hidden");
    if (playerLocation.yco < 4 && checkY === false) {
      removeLocation(playerLocation.yco);
      removeLocation(playerLocation.xco);
      playerLocation.yco += 1;
      setLocation(playerLocation.yco);
    }
  }

  function moveDown() {
    var checkY = $("[yco='" + (playerLocation.yco - 1) + "'][xco='" + (playerLocation.xco) + "']").hasClass("hidden");
    if (playerLocation.yco > -4 && checkY === false) {
      removeLocation(playerLocation.yco);
      removeLocation(playerLocation.xco);
      playerLocation.yco -= 1;
      setLocation(playerLocation.yco);
    }
  }
}
