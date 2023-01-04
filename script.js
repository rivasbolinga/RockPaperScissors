'use script'

const results = document.querySelector('.score-text');
const player = document.querySelector('.player');
const compu = document.querySelector('.compu');
let scorePlayer = 0;
let scoreCompu = 0;
const scorePlayerN = document.querySelector('.score-n-player');
const scoreCompuN = document.querySelector('.score-n-compu');
const buttonsContainer = document.querySelector('.buttons');
const scissorsBtn = document.querySelector('.scissors');
const paperBtn = document.querySelector('.paper');
const rockBtn = document.querySelector('.rock');
const modal = document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const modalText = document.querySelector('.modal-text')
//Add event to weapon buttons

scissorsBtn.addEventListener('click', ()=> playerChoice('scissors'));
paperBtn.addEventListener('click', ()=> playerChoice('paper'));
rockBtn.addEventListener('click', ()=> playerChoice('rock'));

// Players choice function

const playerChoice = function(choice) {
  const computerSelection = compuChoice();
  game(choice, computerSelection);
}

//generate a random choice from the computer
function compuChoice (){
  const choices = ["paper","scissors","rock"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let randomSelection = choices[randomIndex];
  return randomSelection;
}

// Round

function playRound(playerSelection, computerSelection) {


if(playerSelection  === computerSelection){
  results.textContent = "Drow!!Try again";
} if (playerSelection === "rock" && computerSelection === "scissors"){
  results.textContent = "YOU WIN";
  scorePlayer++;
  scorePlayerN.textContent = scorePlayer;
} if (playerSelection === "rock" && computerSelection === "paper"){
  results.textContent = "Sorry! You have lost, try again!!";
  scoreCompu++;
  scoreCompuN.textContent = scoreCompu;
} if (playerSelection === "scissors" && computerSelection === "paper"){
  results.textContent = "YOU WIN";
  scorePlayer++;
  scorePlayerN.textContent = scorePlayer;
} if (playerSelection === "scissors" && computerSelection === "rock"){
  results.textContent = "Sorry! You have lost, try again!!";
  scoreCompu++;
  scoreCompuN.textContent = scoreCompu;
} if (playerSelection === "paper" && computerSelection === "scissors"){
  results.textContent = "Sorry! You have lost, try again!!";
  scoreCompu++;
  scoreCompuN.textContent = scoreCompu;
} if (playerSelection === "paper" && computerSelection === "rock"){
  results.textContent = "YOU WIN";
  scorePlayer++;
  scorePlayerN.textContent = scorePlayer;
}
}



//score until 5
function game(playerSelection, computerSelection){
 playRound(playerSelection,computerSelection);
 if(scoreCompu === 5 ){
  openModal();
  modalText.textContent = 'Sorry, The Machine has riched 5 points.YOU HAVE LOST'
   
 }  if(scorePlayer === 5 ){
  openModal();
  modalText.textContent = 'CONGRATULATIONS!!You have riched 5 points. YOU HAVE WIN!!'
 }

 }

 function restartgame(){
  scoreCompu = scorePlayer = 0;
  scorePlayerN.textContent = 0;
  scoreCompuN.textContent = 0;
  results.textContent = "";
}

//open modal
const openModal = function () {
  modal.classList.add('active');
  overlay.classList.add('active');
}

//close modal

closeModal.addEventListener('click', function() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  restartgame()
})