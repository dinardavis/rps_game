let playerScore = 0;
let computerScore = 0;
let ties = 0;
let playerPick = '';

function playerSelection(e) {
  playerPick = (e.target.classList.value);
  game();
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if(playerSelection === computerSelection) {
    return ties = ties + 1;
  } else if((playerSelection === 'rock' && computerSelection === 'scissors') 
    || (playerSelection === 'paper' && computerSelection === 'rock') 
    || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    return playerScore = playerScore + 1;
  } else if ((computerSelection === 'rock' && playerSelection === 'scissors') 
    || (computerSelection === 'paper' && playerSelection === 'rock') 
    || (computerSelection === 'scissors' && playerSelection === 'paper')) {
    return computerScore = computerScore + 1;
  }
}

function printScore() {
  console.log(`Player Score: ${playerScore} Computer Score: ${computerScore} with ${ties} tie(s)`)
}

function game() {
  const choices = ['rock', 'paper', 'scissors'];
  const computerSelection = choices[(Math.floor(Math.random() * 3))]
  playRound(playerPick, computerSelection);
  printScore();
}

let gamePieces = document.querySelectorAll(".piece");
gamePieces.forEach(gamePiece => gamePiece.addEventListener('click', playerSelection));


