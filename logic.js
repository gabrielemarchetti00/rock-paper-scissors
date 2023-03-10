function getComputerChoice() {
    const moves = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function playRound(playerSelection, computerSelection) {
    let winner;
    //console.log(computerSelection);
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "Paper") {
                winner = "You Lose! Paper beats Rock";
                computerScore++;
            }
            else if (computerSelection == "Rock") {
                winner = "Tie!";
            }
            else if (computerSelection == "Scissors") {
                winner = "You Won! Rock beats Scissors";
                playerScore++;
            }
            break;
        case "paper":
            if (computerSelection == "Scissors") {
                winner = "You Lose! Scissors beats Paper";
                computerScore++;
            }
            else if (computerSelection == "Paper") {
                winner = "Tie!";
            }
            else if (computerSelection == "Rock") {
                winner = "You Won! Paper beats Rock";
                playerScore++;
            }
            break;
        case "scissors":
            if (computerSelection == "Paper") {
                winner = "You Won! Scissors beat Rock";
                playerScore++;
            }
            else if (computerSelection == "Rock") {
                winner = "You Lose! Rock beats Scissors";
                computerScore++;
            }
            else if (computerSelection == "Scissors") {
                winner = "Tie!";
            }
    }
    round.textContent = winner;
    runningScore.textContent = `You: ${playerScore}, Computer: ${computerScore}`;
    if (playerScore == 5) {
        gameWinner.textContent = "YOU WON!!";
        document.getElementById("rock-button").disabled = true;
        document.getElementById("scissors-button").disabled = true;
        document.getElementById("paper-button").disabled = true;
    }
    else if (computerScore == 5) {
        gameWinner.textContent = "YOU LOSE";
        document.getElementById("rock-button").disabled = true;
        document.getElementById("scissors-button").disabled = true;
        document.getElementById("paper-button").disabled = true;
    }
}
/*
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}:`);
        let playerSelection = prompt("Write a move").toLowerCase();
        while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
            console.log("Invalid move");
            playerSelection = prompt("Write a move").toLowerCase();
        }
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (computerScore > playerScore) {
        console.log("YOU LOST!");
    }
    else if (computerScore < playerScore) {
        console.log("YOU WON!");
    }
    else {
        console.log("IT'S A TIE!");
    }
}
*/

let computerScore = 0;
let playerScore = 0;
//game();


const rbtn = document.querySelector('#rock-button');
rbtn.addEventListener("click", () => { playRound('rock', getComputerChoice()) });


const sbtn = document.querySelector('#scissors-button');
sbtn.addEventListener("click", () => { playRound('scissors', getComputerChoice()) });


const pbtn = document.querySelector('#paper-button');
pbtn.addEventListener("click", () => { playRound('paper', getComputerChoice()) });


const round = document.querySelector('.round');
const runningScore = document.querySelector('.running-score');
const gameWinner = document.querySelector('.winner');




