let playerScore = 0;
let computerScore = 0;
let userChoice = "";

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results-container")
const score = document.querySelector("#score-container")
const finalResult = document.querySelector("#final-result")
const playerSymbol = document.querySelector("#player-symbol")
const computerSymbol = document.querySelector("#computer-symbol")

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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = (button.value)
    playerSymbolContent.src = `${userChoice}.png`;
  })
});

buttons.forEach((button) => {
  button.addEventListener("click", game)
});


const resultsContent = document.createElement("div");
resultsContent.classList.add("results-content");
results.appendChild(resultsContent);

const playerSymbolContent = document.createElement("img")
const computerSymbolContent = document.createElement("img")

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    resultsContent.textContent = `It's a tie this round! You both chose ${playerSelection}!`
    playerSymbol.replaceWith(playerSymbolContent);
    computerSymbol.replaceWith(computerSymbolContent);
    return resultsContent.textContent
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    resultsContent.textContent = "You lose this round! Paper beats Rock!"
    playerSymbol.replaceWith(playerSymbolContent);
    computerSymbol.replaceWith(computerSymbolContent);
    return resultsContent.textContent
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    resultsContent.textContent = "You win this round! Rock beats scissors!"
    playerSymbol.replaceWith(playerSymbolContent);
    computerSymbol.replaceWith(computerSymbolContent);
    return resultsContent.textContent
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    resultsContent.textContent = "You win this round! Paper beats rock!"
    playerSymbol.replaceWith(playerSymbolContent);
    computerSymbol.replaceWith(computerSymbolContent);
    return resultsContent.textContent
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    resultsContent.textContent = "You lose this round! Scissors beats paper!"
    playerSymbol.replaceWith(playerSymbolContent);
    computerSymbol.replaceWith(computerSymbolContent);
    return resultsContent.textContent
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    resultsContent.textContent = "You lose this round! Rock beats scissors!"
    playerSymbol.replaceWith(playerSymbolContent);
    computerSymbol.replaceWith(computerSymbolContent);
    return resultsContent.textContent
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    resultsContent.textContent = "You win this round! Scissors beats paper!"
    playerSymbol.replaceWith(playerSymbolContent);
    computerSymbol.replaceWith(computerSymbolContent);
    return resultsContent.textContent
  }
};

const scoreContent = document.createElement("div");
scoreContent.classList.add("score-content");
score.appendChild(scoreContent);

function keepScore() {
  const playerSelection = userChoice;
  const computerSelection = getComputerChoice();
  computerSymbolContent.src = `${computerSelection}.png`
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

const finalResultContent = document.createElement("div");
finalResultContent.classList.add("final-result-content");
finalResult.appendChild(finalResultContent);

function game() {
  keepScore()
  if (playerScore == 5) {
    finalResultContent.textContent = `You are the Rock Paper Scissors champion! 
      The final score is You: ${playerScore}, Computer: ${computerScore}`
    resultsContent.textContent = "";
    scoreContent.textContent = "";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
  else if (computerScore == 5) {
    finalResultContent.textContent = `You lost, but don't worry there's always next year!
      The final score is You: ${playerScore}, Computer: ${computerScore}`
    resultsContent.textContent = "";
    scoreContent.textContent = "";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
};