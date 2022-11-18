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
};

let playerScore = 0;
let computerScore = 0;

let userChoice = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = (button.value)
  })
});

buttons.forEach((button) => {
  button.addEventListener("click", keepScore)
});

const results = document.querySelector("#results-container")

const resultsContent = document.createElement("div");
resultsContent.classList.add("results-content");

results.appendChild(resultsContent);

function playRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
      resultsContent.textContent = `It's a tie! You both chose ${playerSelection}!`
      return resultsContent.textContent
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      resultsContent.textContent = "You lose! Paper beats Rock!"
      return resultsContent.textContent
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      resultsContent.textContent = "You win! Rock beats scissors!"
      return resultsContent.textContent
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      resultsContent.textContent = "You win! Paper beats rock!"
      return resultsContent.textContent
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      resultsContent.textContent = "You lose! Scissors beats paper!"
      return resultsContent.textContent
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      resultsContent.textContent = "You lose! Rock beats scissors!"
      return resultsContent.textContent
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      resultsContent.textContent = "You win! Scissors beats paper!"
      return resultsContent.textContent
    }
  };



const score = document.querySelector("#score-container")

const scoreContent = document.createElement("div");
resultsContent.classList.add("score-content");
  
score.appendChild(scoreContent);


function keepScore() {
  const playerSelection = userChoice;
  const computerSelection = getComputerChoice();
  let oneRound = playRound(playerSelection, computerSelection)
  if (oneRound.includes("win")) {
    playerScore++;
    scoreContent.textContent = ("Player score: " + playerScore + ", " + "Computer score: " + computerScore);
    return scoreContent.textContent
  } else if (oneRound.includes("lose")) {
    computerScore++;
    scoreContent.textContent = "Player score: " + playerScore + ", " + "Computer score: " + computerScore;
    return scoreContent.textContent
  } else if (oneRound.includes("tie")) {
    scoreContent.textContent = "Player score: " + playerScore + ", " + "Computer score: " + computerScore;
    return scoreContent.textContent
  } else {
    scoreContent.textContent = "Player score: " + playerScore + ", " + "Computer score: " + computerScore;
    return scoreContent.textContent
  }
};

/*const finalResult = document.querySelector("#final-result")

const finalResultContent = document.createElement("div");
finalResultContent.classList.add("final-result-content");

results.appendChild(finalResultContent);

function game() {
  for (let i = 0; i < 5; i++) {
    keepScore();
  }
  if (playerScore > computerScore) {
    finalResultContent.textContent = (`You win the whole game! The final score is: Player: ${playerScore} Computer: ${computerScore}`);
  } else if (playerScore == computerScore) {
    finalResultContent.textContent = (`It's a tie game! The final score is: Player: ${playerScore} Computer: ${computerScore}` );
  } else {
    finalResultContent.textContent = (`You lose the whole game! The final score is: Player: ${playerScore} Computer: ${computerScore}`);
  }
};*/