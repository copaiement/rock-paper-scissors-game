// rock-paper-scissors.js

// simple rock paper scissors game built for TOP: Fundamentals

function getComputerChoice() {
    // create random number from 1 to 3
    let rand = Math.floor(Math.random() * 3) + 1;

    // give choice based on random number
    switch (rand) {
        case (1):
            return "Rock";
            break;
        case (2):
            return "Paper";
            break;
        case (3):
            return "Scissors";
            break;
    }
}


function playOneGame(computerSelection, playerSelection) {
    // clean playerSelection
    playerSelection = playerSelection.toLowerCase();
    // Make sure first letter is capitalized
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    // check playerSelection against accepted values
    if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {
    } else {
        return 'Please enter a valid play.';
    }    
    // check for tie game first
    if (computerSelection == playerSelection) {
        return `Tie game! You both selected ${computerSelection}!`;
    } else if (computerSelection == 'Rock') {
        switch (playerSelection) {
            case 'Paper':
                return `You win! ${playerSelection} beats ${computerSelection}.`;
                break;
            case 'Scissors':
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
                break;
        }
    } else if (computerSelection == 'Paper') {
        switch (playerSelection) {
            case 'Scissors':
                return `You win! ${playerSelection} beats ${computerSelection}.`;
                break;
            case 'Rock':
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
                break;
        }

    } else if (computerSelection == 'Scissors') {
        switch (playerSelection) {
            case 'Rock':
                return `You win! ${playerSelection} beats ${computerSelection}.`;
                break;
            case 'Paper':
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
                break;
        }
    } 
}


let playerSelection = prompt("Rock, Paper, or Scissors?");
let computerSelection = getComputerChoice();
console.log('Player selection: ' + playerSelection);
console.log('Computer selection: ' + computerSelection)
console.log(playOneGame(computerSelection, playerSelection));

