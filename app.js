var scores, activePlayer, roundScore, gamePlaying, prevRoll
init();

document.querySelector(".btn-roll").addEventListener("click", rollDice);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  prevRoll= 0;
  // document.querySelector('#current-'+ activepPlayer).textContent = dice
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
}

function rollDice() {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    if(prevRoll==6 && dice ==6)
    {
      nextPlayer()
    }
    prevRoll = dice
    var check = prevRoll==dice
    var diceRoll = document.querySelector(".dice");
    diceRoll.style.display = "block";
    diceRoll.src = "dice-" + dice + ".png";

    if (dice !== 1 || !check ) {
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
}

document.querySelector(".btn-hold").addEventListener("click", addScore);

function addScore() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
      var input = document.querySelector('.txt-score').value
      var winningScore =100;
      if(input)
      {
        winningScore = input
      }

    if (scores[activePlayer] >= winningScore) {
      gamePlaying = false;
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      nextPlayer();
    }
  }
}

function nextPlayer() {
  document.querySelector("#current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0; prevRoll=0
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceRoll.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);
