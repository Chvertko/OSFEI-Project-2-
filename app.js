// Select DOM elements
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const playAgainBtn = document.getElementById("play-again");
// Initialize scores
let userScoreCount = 0;
let computerScoreCount = 0;
// Computer choice function
function getComputerChoice() {
    const choices = ["scissors", "paper", "rock"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
// Game function
function game(userChoice) {
    const computerChoice = getComputerChoice();
    const userCondition = userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper"
    const computerCondition = computerChoice === "rock" && userChoice === "scissors" || computerChoice === "paper" && userChoice === "rock" || computerChoice === "scissors" && userChoice === "paper"
    // Update user choice display
    userChoiceDisplay.innerHTML = `<img src="/${userChoice}.png" alt="${userChoice}" width="150px" height="150px">`;
  
    // Update computer choice display
    computerChoiceDisplay.innerHTML = `<img src="/${computerChoice}.png" alt="${computerChoice}" width="150px" height="150px">`;
  
    // Determine winner and update scores
    if (userCondition) {
      userScoreCount++;
      userScore.innerText = userScoreCount.toString();
      resultDisplay.textContent = "You win!";
    } else if (computerCondition) {
      computerScoreCount++;
      computerScore.innerText = computerScoreCount.toString();
      resultDisplay.textContent = "Computer wins!";
    } else {
      resultDisplay.textContent = "It's a tie!";
    }
}

  
// Event listeners for user choice
rock.addEventListener("click", function() {
  game("rock");
});
paper.addEventListener("click", function() {
  game("paper");
});
scissors.addEventListener("click", function() {
  game("scissors");
});

// Play again button event listener
playAgainBtn.addEventListener("click", function() {
  // Reset display
  userChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  resultDisplay.textContent = "";
  // Reset score
  userScoreCount = 0;
  computerScoreCount = 0;
  userScore.innerText = '0'
  computerScore.innerText = '0'
});
