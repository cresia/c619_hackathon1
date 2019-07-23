$(document).ready(initializeApp);

function initializeApp() {
  var player = new Human();
  var dice = new Zdice();
  var battery = []

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


  function closeModal() {
    var modalAndButton = $("#startGame")
    $(modalAndButton).hide()
  }

  var buttonCloseModal = $("#closeModal").on("click", closeModal);

  function setLocation() {
    $("[xco='" + playerLocation.xco + "'][yco='" + playerLocation.yco + "']").addClass("human");
  }

  function removeLocation() {
    $("[xco='" + playerLocation.xco + "'][yco='" + playerLocation.yco + "']").removeClass("human");
  }

  var boxDice = $(".dice");
  boxDice.append(dice.buttonDice);

  dice.buttonDice.click(function () {
    dice.rollDice();
    zombiesOnBoard();
  });

  function zombiesOnBoard() {
    for (var i = 1; i < dice.result + 8; i++) {
      var randomX = Math.floor(Math.random() * 4 + Math.random() * -4);
      if (randomX == 0) {
        randomX++;
      }
      var randomY = Math.floor(Math.random() * 4 + Math.random() * -4);
      if (randomY == 0) {
        randomY++;
      }
      var zombieAppear = $("[xco=" + randomX + "][yco=" + randomY + "]").addClass('zombie');
      $(".location").append(zombieAppear);
    }
  }

  function moveLeft() {
    var checkX = $("[yco='" + (playerLocation.yco) + "'][xco='" + (playerLocation.xco - 1) + "']").hasClass("hidden");
    if (playerLocation.xco > -4 && checkX === false) {
      removeLocation(playerLocation.yco);
      removeLocation(playerLocation.xco);
      playerLocation.xco -= 1;
      setLocation(playerLocation.xco);
      if (checkBattery() === true) {
        battery.push("battery");
        removeBattery();
      }
      winCondition();
      checkZombie();
    }
  }

  function moveRight() {
    var checkX = $("[yco='" + (playerLocation.yco) + "'][xco='" + (playerLocation.xco + 1) + "']").hasClass("hidden");
    if (playerLocation.xco < 4 && checkX === false) {
      removeLocation(playerLocation.xco);
      removeLocation(playerLocation.yco);
      playerLocation.xco += 1;
      setLocation(playerLocation.xco);
      if (checkBattery() === true) {
        battery.push("battery");
        removeBattery();
      }
      winCondition();
      checkZombie();
    }
  }

  function moveUp() {
    var checkY = $("[yco='" + (playerLocation.yco + 1) + "'][xco='" + (playerLocation.xco) + "']").hasClass("hidden");
    if (playerLocation.yco < 4 && checkY === false) {
      removeLocation(playerLocation.yco);
      removeLocation(playerLocation.xco);
      playerLocation.yco += 1;
      setLocation(playerLocation.yco);
      if (checkBattery() === true) {
        battery.push("battery");
        removeBattery();
      }
      winCondition();
      checkZombie();
    }
  }

  function moveDown() {
    var checkY = $("[yco='" + (playerLocation.yco - 1) + "'][xco='" + (playerLocation.xco) + "']").hasClass("hidden");
    if (playerLocation.yco > -4 && checkY === false) {
      removeLocation(playerLocation.yco);
      removeLocation(playerLocation.xco);
      playerLocation.yco -= 1;
      setLocation(playerLocation.yco);
      if (checkBattery() === true) {
        battery.push("battery");
        removeBattery();
      }
      winCondition();
      checkZombie();
    }
  }

  function winCondition() {
    var originCheck = $("[yco='" + (playerLocation.yco) + "'][xco='" + (playerLocation.xco + "']")).hasClass("origin");
    if (battery.length === 4 && originCheck === true) {

      $(".modal-start").text("You survived the zombies!").css({ "font-size": "50px", "font-weight": "bold", "text-align": "center", "height": "20%" }).show();

       player.buttonMoveRight.off();
        player.buttonMoveLeft.off();
        player.buttonMoveDown.off();
        player.buttonMoveUp.off();
    }

  }

  function checkBattery() {
    return $("[yco='" + (playerLocation.yco) + "'][xco='" + (playerLocation.xco + "']")).hasClass("battery");
  }

  function removeBattery() {
    $("[yco='" + (playerLocation.yco) + "'][xco='" + (playerLocation.xco + "']")).removeClass("battery");
  }

  function checkZombie() {
    if ($("[yco='" + (playerLocation.yco) + "'][xco='" + (playerLocation.xco + "']")).hasClass("zombie")) {
      $("[yco='" + (playerLocation.yco) + "'][xco='" + (playerLocation.xco + "']")).css("visibility", "visible")
      var num = $("#playerLives").text();
      var playerLives = $("#playerLives").text(num - 1);
      $("#playerLives").append(playerLives);
      if ($("#playerLives").text() === "0") {
        $(".modal-start").text("The zombie nom nom on you!").css({"font-size": "50px", "font-weight": "bold", "text-align": "center", "height": "20%"}).show();
        player.buttonMoveRight.off();
        player.buttonMoveLeft.off();
        player.buttonMoveDown.off();
        player.buttonMoveUp.off();
      }
    }
  }
}
