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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
      return `It's a tie! You both chose ${playerSelection}!`
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      return "You lose! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      return "You win! Rock beats scissors!"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      return "You win! Paper beats rock!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      return "You lose! Scissors beats paper!"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      return "You lose! Rock beats scissors!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      return "You win! Scissors beats paper!"
    } else {
      return "Invalid input! Input either Rock, Paper or Scissors!"
    }
  }

function keepScore() {
  const choice = prompt("Please input Rock, Paper or Scissors");
  const playerSelection = choice.toLowerCase();
  const computerSelection = getComputerChoice();
  const oneRound = playRound(playerSelection, computerSelection);
  console.log(oneRound);
  if (oneRound.includes("win")) {
    playerScore++
    return "Player score: " + playerScore + ", " + "Computer score: " + computerScore;
  } else if (oneRound.includes("lose")) {
    computerScore++;
    return "Player score: " + playerScore + ", " + "Computer score: " + computerScore;
  } else if (oneRound.includes("tie")) {
    return "Player score: " + playerScore + ", " + "Computer score: " + computerScore;
  } else {
    return "Player score: " + playerScore + ", " + "Computer score: " + computerScore;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(keepScore());
  }
  if (playerScore > computerScore) {
    console.log(`You win the whole game! The final score is: Player - ${playerScore} Computer - ${computerScore}`);
  } else if (playerScore == computerScore) {
    console.log(`It's a tie game! The final score is: Player - ${playerScore} Computer - ${computerScore}` );
  } else {
    console.log(`You lose the whole game! The final score is: Player - ${playerScore} Computer - ${computerScore}`);
  }
}
