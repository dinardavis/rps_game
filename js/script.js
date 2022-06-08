let playerScore = 0;
let computerScore = 0;
let ties = 0;
let playerPick = '';

const winnerMessage = document.querySelector('.winner-message');
const computerPickDiv = document.querySelector('.computer-pick');
const computerPickText = document.querySelector('.computer-pick-text');
const mainHeader = document.querySelector('.main-header');
const gameBoard = document.querySelector('.game-board');
const mainContainer = document.querySelector('.main-container');
const scoreboard = document.createElement('div');
const score = document.createElement('p');
mainContainer.appendChild(scoreboard);
scoreboard.appendChild(score);
score.innerHTML = `Player Score: ${playerScore} <br>Computer Score: ${computerScore}</br> Tie(s): ${ties}`;

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

function displayComputerSelection(computerChoice) {
  computerPickDiv.style.visibility = "visible";
  computerPickText.textContent = `The Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`
}

function printScore() {
  score.innerHTML = `Player Score: ${playerScore} <br>Computer Score: ${computerScore}</br> Tie(s): ${ties}`;
}

function checkForWinner() {
  if(playerScore === 5) {
    const playerWins = document.createElement('h1');
    playerWins.textContent = "Congratulations, You Win!"
    winnerMessage.appendChild(playerWins);
    mainHeader.style.display = "none";
    gameBoard.style.display = "none";
    computerPickDiv.style.visibility = "hidden";
    addNewGameButton();
  } else if(computerScore === 5) {
    const computerWins = document.createElement('h1');
    computerWins.textContent = "Sorry, You Lose. Better Luck Next Time."
    winnerMessage.appendChild(computerWins);
    mainHeader.style.display = "none";
    gameBoard.style.display = "none";
    computerPickDiv.style.visibility = "hidden";
    addNewGameButton();
  }
}

function game() {
  const choices = ['rock', 'paper', 'scissors'];
  const computerSelection = choices[(Math.floor(Math.random() * 3))]
  playRound(playerPick, computerSelection);
  displayComputerSelection(computerSelection);
  printScore();
  checkForWinner();
}

function addNewGameButton()  {
  const newGameDiv = document.querySelector('.new-game-div');
  newGameDiv.style.display = "block";
}

let gamePieces = document.querySelectorAll(".piece");
gamePieces.forEach(gamePiece => gamePiece.addEventListener('click', playerSelection));

const newGameBtn = document.querySelector('.new-game-btn');
newGameBtn.addEventListener('click', () => {
  window.location.reload()});
