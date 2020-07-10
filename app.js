/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activepPlayer, roundScore;

scores=[0,0];
roundscore = 0;
activepPlayer = 0;



// document.querySelector('#current-'+ activepPlayer).textContent = dice
document.querySelector('.dice').style.display='none'
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;



function rollDice()
{
   var dice = Math.floor(Math.random()*6)+1;
    var diceRoll = document.querySelector('.dice')
   diceRoll.style.display='block'
   diceRoll.src = 'dice-'+dice+'.png'

}

document.querySelector('.btn-roll').addEventListener("click",rollDice)

