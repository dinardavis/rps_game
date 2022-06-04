let computer = ['rock', 'paper', 'scissors']

function computerPlay() {
  return computer[(Math.floor(Math.random() * 3))]
}

computerPlay();