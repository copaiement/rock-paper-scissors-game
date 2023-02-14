// rock-paper-scissors.js

// simple rock paper scissors game built for TOP: Fundamentals

// initialize global variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let roundNumber = 0;
let roundResults;

// initialize inputs and outputs
const gameTiles = document.querySelectorAll('.game-tile');
const round = document.getElementById("round");
const rules = document.getElementById("rules");
const msg = document.getElementById("msg");
const playerTotalMsg = document.getElementById("player-total");
const computerTotalMsg = document.getElementById("computer-total");

// Get button press to start a round
gameTiles.forEach(gameTile => {
    gameTile.addEventListener('click', () => {
        // pull click information
        let info = gameTile.querySelector(".tile-type");
        
        // get computer and player choices
        computerSelection = getComputerChoice();
        playerSelection = info.innerText;

        // run one round
        roundResults = playRound(computerSelection, playerSelection);

        // update results
        if (playerScore == 5 || computerScore == 5) {
            gameOver(playerScore, computerScore);
        } else {
            playerScore += roundResults.playerScore;
            computerScore += roundResults.computerScore;
            roundNumber += 1;
        }
        // print out results
        round.textContent = `Round: ${roundNumber}`;
        msg.textContent = roundResults.msg;
        playerTotalMsg.textContent = `Player Score: ${playerScore}`;
        computerTotalMsg.textContent = `Computer Score: ${computerScore}`;

    });
});

// Game Over Function
function gameOver(){
    
}

// Show or hide the rules
function showRules() {
    let buttonText = document.getElementById("btn-rules");
    if (rules.style.display === "none") {
        rules.style.display = "block";
        buttonText.textContent = 'Hide Rules';
    } else {
        rules.style.display = "none";
        buttonText.textContent = 'Show Rules';
    }

}

// Get the computer's choice
function getComputerChoice() {
    // create random number from 1 to 3
    let rand = Math.floor(Math.random() * 3);

    // give choice based on random number
    switch (rand) {
        case (0):
            return "ZOMBIE";
        case (1):
            return "MAN";
        case (2):
            return "GUN";
    }
}

// Play one round of RPS
function playRound(computerSelection, playerSelection) {
    // initialize vars
    let msg;
    let playerScore;
    let computerScore;

    // check for tie game first
    if (computerSelection == playerSelection) {
        msg = `Tie game! You both selected ${computerSelection}!`;
        playerScore = 0;
        computerScore = 0;
        return {msg, playerScore, computerScore};
    } else if (computerSelection == 'ZOMBIE') {
        switch (playerSelection) {
            case 'GUN':
                msg = `You win! ${playerSelection} beats ${computerSelection}.`;
                playerScore = 1;
                computerScore = 0;
                return {msg, playerScore, computerScore};
            case 'MAN':
                msg = `You lose! ${computerSelection} beats ${playerSelection}.`;
                playerScore = 0;
                computerScore = 1;
                return {msg, playerScore, computerScore};                
        }
    } else if (computerSelection == 'MAN') {
        switch (playerSelection) {
            case 'ZOMBIE':
                msg = `You win! ${playerSelection} beats ${computerSelection}.`;
                playerScore = 1;
                computerScore = 0;
                return {msg, playerScore, computerScore};
            case 'GUN':
                msg = `You lose! ${computerSelection} beats ${playerSelection}.`;
                playerScore = 0;
                computerScore = 1;
                return {msg, playerScore, computerScore};
        }

    } else if (computerSelection == 'GUN') {
        switch (playerSelection) {
            case 'MAN':
                msg = `You win! ${playerSelection} beats ${computerSelection}.`;
                playerScore = 1;
                computerScore = 0;
                return {msg, playerScore, computerScore};
            case 'ZOMBIE':
                msg = `You lose! ${computerSelection} beats ${playerSelection}.`;
                playerScore = 0;
                computerScore = 1;
                return {msg, playerScore, computerScore};
        }
    }
    
}

