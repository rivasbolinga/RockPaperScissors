'use script';

const results = document.querySelector('.score-text');
let scorePlayer = 0;
let scoreCompu = 0;
const scorePlayerN = document.querySelector('.score-n-player');
const scoreCompuN = document.querySelector('.score-n-compu');
const scissorsBtn = document.querySelector('.scissors');
const paperBtn = document.querySelector('.paper');
const rockBtn = document.querySelector('.rock');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const modalText = document.querySelector('.modal-text');

// generate a random choice from the computer

function compuChoice() {
  const choices = ['paper', 'scissors', 'rock'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomSelection = choices[randomIndex];
  return randomSelection;
}

// restart Game

function restartgame() {
  scoreCompu = 0;
  scorePlayer = 0;
  scorePlayerN.textContent = 0;
  scoreCompuN.textContent = 0;
  results.textContent = '';
}

// open modal

const openModal = function () {
  modal.classList.add('active');
  overlay.classList.add('active');
};

// close modal

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  restartgame();
});

// One Round

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    results.textContent = 'Drow!!Try again';
  } if (playerSelection === 'rock' && computerSelection === 'scissors') {
    results.textContent = 'YOU WIN';
    scorePlayer += 1;
    scorePlayerN.textContent = scorePlayer;
  } if (playerSelection === 'rock' && computerSelection === 'paper') {
    results.textContent = 'Sorry! You have lost, try again!!';
    scoreCompu += 1;
    scoreCompuN.textContent = scoreCompu;
  } if (playerSelection === 'scissors' && computerSelection === 'paper') {
    results.textContent = 'YOU WIN';
    scorePlayer += 1;
    scorePlayerN.textContent = scorePlayer;
  } if (playerSelection === 'scissors' && computerSelection === 'rock') {
    results.textContent = 'Sorry! You have lost, try again!!';
    scoreCompu += 1;
    scoreCompuN.textContent = scoreCompu;
  } if (playerSelection === 'paper' && computerSelection === 'scissors') {
    results.textContent = 'Sorry! You have lost, try again!!';
    scoreCompu += 1;
    scoreCompuN.textContent = scoreCompu;
  } if (playerSelection === 'paper' && computerSelection === 'rock') {
    results.textContent = 'YOU WIN';
    scorePlayer += 1;
    scorePlayerN.textContent = scorePlayer;
  }
}
// GAME: score until 5

function game(playerSelection, computerSelection) {
  playRound(playerSelection, computerSelection);
  if (scoreCompu === 5) {
    openModal();
    modalText.textContent = 'Sorry, The Machine has riched 5 points.YOU HAVE LOST';
  } if (scorePlayer === 5) {
    openModal();
    modalText.textContent = 'CONGRATULATIONS!!You have riched 5 points. YOU HAVE WIN!!';
  }
}
// Players choice function

const playerChoice = function (choice) {
  const computerSelection = compuChoice();
  game(choice, computerSelection);
};

// Add event to weapon buttons

scissorsBtn.addEventListener('click', () => playerChoice('scissors'));
paperBtn.addEventListener('click', () => playerChoice('paper'));
rockBtn.addEventListener('click', () => playerChoice('rock'));
