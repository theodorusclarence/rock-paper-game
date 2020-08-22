const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
    rock: { name: "Rock", defeats: "scissors" },
    paper: { name: "Paper", defeats: "rock" },
    scissors: { name: "Scissors", defeats: "paper" },
};

let computerChoice = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// Reset selected icons
function resetSelected() {
    allGameIcons.forEach((icon) => {
        icon.classList.remove("selected");
    });
}

function resetAll() {
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    computerScoreEl.textContent = computerScoreNumber;
    playerChoiceEl.textContent = "";
    computerChoiceEl.textContent = "";
    resultText.textContent = "Pick your move!";
    resetSelected();
}

function computerRandomChoice() {
    const choiceNumber = Math.floor(Math.random() * 3) + 1;

    if (choiceNumber === 1) {
        computerChoice = "rock";
    } else if (choiceNumber === 2) {
        computerChoice = "paper";
    } else if (choiceNumber === 3) {
        computerChoice = "scissors";
    }
}

function displayComputerChoice() {
    switch (computerChoice) {
        case "rock":
            computerRock.classList.add("selected");
            computerChoiceEl.textContent = " --- Rock";
            break;

        case "paper":
            computerPaper.classList.add("selected");
            computerChoiceEl.textContent = " --- Paper";
            break;

        case "scissors":
            computerScissors.classList.add("selected");
            computerChoiceEl.textContent = " --- Scissors";
            break;

        default:
            break;
    }
}

function updateScore(playerChoice) {
    console.log(playerChoice);
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie";
    } else {
        const choice = choices[playerChoice];
        if (choice.defeats === computerChoice) {
            resultText.textContent = "You Win!";
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber;
        } else {
            resultText.textContent = "You Lose";
            computerScoreNumber++;
            computerScoreEl.textContent = computerScoreNumber;
        }
    }
}

// Call functions to reset turns
function checkResult(playerChoice) {
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

// Passing player selection and styling actions
function select(playerChoice) {
    checkResult(playerChoice);

    switch (playerChoice) {
        case "rock":
            playerRock.classList.add("selected");
            playerChoiceEl.textContent = " --- Rock";
            break;

        case "paper":
            playerPaper.classList.add("selected");
            playerChoiceEl.textContent = " --- Paper";
            break;

        case "scissors":
            playerScissors.classList.add("selected");
            playerChoiceEl.textContent = " --- Scissors";
            break;

        default:
            break;
    }
}

resetAll();
