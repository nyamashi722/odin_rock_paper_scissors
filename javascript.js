function getComputerChoice() {
    let result = Math.random();
    
    if (result <= (1/3)) {
      let computerSelection = "rock";
      return computerSelection;
    } else if (result <= (2/3)) {
      let computerSelection = "paper"; 
      return computerSelection;
    } else {
      let computerSelection = "scissors";
      return computerSelection;
    }
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection == "rock" && computerSelection =="rock") {
      return "It's a tie! You both chose rock!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      return "You lose! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      return "You win! Rock beats scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      return "You win! Paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
      return "It's a tie! You both chose paper!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      return "You lose! Scissors beats paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      return "You lose! Rock beats scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      return "You win! Scissors beats paper!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
      return "It's a tie! You both chose scissors!";
    } else {
      return "Invalid input! Input either Rock, Paper or Scissors!"
    }
  }

function game() {
  for (let i = 0; i < 5; i++) {
    const choice = prompt("Please input Rock, Paper or Scissors");
    const playerSelection = choice.toLowerCase();
    const computerSelection = getComputerChoice();
    const oneRound = playRound(playerSelection, computerSelection);
    console.log(oneRound);
   
  }

}