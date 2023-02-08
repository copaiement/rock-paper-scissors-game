// rock-paper-scissors.js

// simple rock paper scissors game built for TOP: Fundamentals

// Get the player's choice
function getPlayerChoice() {
    // prompt user for a new choice
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    
    let exit = 0;

    while (exit != 1) {
        // clean playerSelection
        playerSelection = playerSelection.toLowerCase();
        // Make sure first letter is capitalized
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        
        if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors') {
            exit = 1;
            return playerSelection;
        } else {
            alert('Please enter a valid play.');
            playerSelection = prompt("Rock, Paper, or Scissors?");
        } 

    }  
}

// Get the computer's choice
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
    } else if (computerSelection == 'Rock') {
        switch (playerSelection) {
            case 'Paper':
                msg = `You win! ${playerSelection} beats ${computerSelection}.`;
                playerScore = 1;
                computerScore = 0;
                return {msg, playerScore, computerScore};
                break;
            case 'Scissors':
                msg = `You lose! ${computerSelection} beats ${playerSelection}.`;
                playerScore = 0;
                computerScore = 1;
                return {msg, playerScore, computerScore};                
                break;
        }
    } else if (computerSelection == 'Paper') {
        switch (playerSelection) {
            case 'Scissors':
                msg = `You win! ${playerSelection} beats ${computerSelection}.`;
                playerScore = 1;
                computerScore = 0;
                return {msg, playerScore, computerScore};
                break;
            case 'Rock':
                msg = `You lose! ${computerSelection} beats ${playerSelection}.`;
                playerScore = 0;
                computerScore = 1;
                return {msg, playerScore, computerScore};
                break;
        }

    } else if (computerSelection == 'Scissors') {
        switch (playerSelection) {
            case 'Rock':
                msg = `You win! ${playerSelection} beats ${computerSelection}.`;
                playerScore = 1;
                computerScore = 0;
                return {msg, playerScore, computerScore};
                break;
            case 'Paper':
                msg = `You lose! ${computerSelection} beats ${playerSelection}.`;
                playerScore = 0;
                computerScore = 1;
                return {msg, playerScore, computerScore};
                break;
        }
    } 
}

// Play a full game of RPS (5 Rounds)
function game() {
    //initialize vars
    let playerScore = 0;
    let computerScore = 0;
    //loop through 5 games
    for (let i = 1; i <= 5; i ++) {
        
        //get new player selection
        let playerSelection = getPlayerChoice();
        //get new computer selection
        let computerSelection = getComputerChoice();
        //find the results of the game
        let gameResult = playRound(computerSelection, playerSelection);
        //track scores of games
        playerScore += gameResult.playerScore;
        computerScore += gameResult.computerScore;
        //display results of each game
        console.log(`Game # ${i}:`);
        console.log('Player selection: ' + playerSelection);
        console.log('Computer selection: ' + computerSelection);
        console.log(gameResult.msg);
    }

    if (playerScore > computerScore) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!')
    }

    console.log('Final score:');
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    
}

game();


