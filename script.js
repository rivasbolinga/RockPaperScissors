'use script'


//generate a random choise from the computer
function selectCoice (){
  const choices = ["paper","scissors","rock"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let randomSelection = choices[randomIndex];
  return randomSelection;
}
//plyer Selection with prompt




const results = document.querySelector('.results');
const player = document.querySelector('.player');
const compu = document.querySelector('.compu');
let scorePlayer = 0;
let scoreCompu = 0;
const scorePlayerN = document.querySelector('.score-n-player');
const scoreCompuN = document.querySelector('.score-n-compu');

// Round

function playRound(playerSelection, computerSelectione) {

const computerSelection = selectCoice();

if(playerSelection  === computerSelection){
  results.textContent = "Drow!!Try again";
} if (playerSelection === "rock" && computerSelection === "scissors"){
  results.textContent = "YOU WIN";
  scorePlayer++;
  scorePlayerN.textContent = scorePlayer;
  player.textContent = scorePlayer;
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

function restartgame(){
  scoreCompu = scorePlayer = 0;
  scorePlayerN.textContent = 0;
  scoreCompuN.textContent = 0;
}

//score until 5
function game(playerSelection, computerSelectione){
 playRound(playerSelection,);
 if(scoreCompu === 5 ){
  results.textContent = "The computer riched 5 points, You have lost the match";
   restartgame()
 }  if(scorePlayer === 5 ){
  results.textContent = "You have riched 5 points!!! YOU WIN THE MATCH";
   restartgame()
 }

 }


const scissorsBtn = document.querySelector('.scissors');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');

function playRock(){
  game("rock");
}
function playPaper(){
  game("paper");
}
function playScissors(){
  game("scissors");
}
rockBtn.addEventListener('click', playRock);
paperBtn.addEventListener('click', playPaper);
scissorsBtn.addEventListener('click', playScissors);