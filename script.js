'use script'


//generate a random choise from the computer
function selectCoice (){
  const choices = ["paper","scissors","rock"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let randomSelection = choices[randomIndex];
  return randomSelection;
}
//plyer Selection with prompt





//Play once

function playRound(playerSelectionE, computerSelectione) {
const choice = prompt("Si, fu, mi");
const playerSelection = choice.toLowerCase()
const computerSelection = selectCoice();

if(playerSelection  === computerSelection){
  console.log("drow")
} if (playerSelection === "rock" && computerSelection === "scissors"){
  console.log("You win");
} if (playerSelection === "rock" && computerSelection === "paper"){
  console.log("You have lost");
} if (playerSelection === "scissors" && computerSelection === "paper"){
  console.log("You won");
} if (playerSelection === "scissors" && computerSelection === "rock"){
  console.log("You have lost");
} if (playerSelection === "paper" && computerSelection === "scissors"){
  console.log("You have lost");
} if (playerSelection === "paper" && computerSelection === "rock"){
  console.log("You win");
}
}


function game(){
 
  for(let i=0; i<5; i++){
    playRound();
  }
}
game();