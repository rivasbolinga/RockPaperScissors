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
  results.textContent = "The computer riched 5 points, You have lost the match";
   restartgame()
 }  if(scorePlayer === 5 ){
  results.textContent = "You have riched 5 points!!! YOU WIN THE MATCH";
   restartgame()
 }

 }

 function restartgame(){
  scoreCompu = scorePlayer = 0;
  scorePlayerN.textContent = 0;
  scoreCompuN.textContent = 0;
}


