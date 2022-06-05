let playerScore = 0;
let computerScore = 0;
let ties = 0;
let choices = ['rock', 'paper', 'scissors']

function computerPlay() {
  return choices[(Math.floor(Math.random() * 3))]
}

function printScore() {
  console.log(`Player Score: ${playerScore} Computer Score: ${computerScore} with ${ties} ties`)
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

function game() {
  printScore();
  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt("'Enter Rock, Paper, or Scissors'").toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    printScore();
  }
}

game();
