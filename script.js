function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[random];
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert("tied");
        return "tied"
    } else if ((playerSelection == "ROCK") && (computerSelection == "SCISSORS")) {
        alert("Player Wins, Rock beats Scissors");
        return "player"
    } else if ((playerSelection == "ROCK") && (computerSelection == "PAPER")) {
        alert("player Lose, Paper beats Rock ");
        return "computer"
    } else if ((playerSelection == "SCISSORS") && (computerSelection == "PAPER")) {
        alert("player Wins, Scissors beats Paper ");
        return "player"
    } else if ((playerSelection == "SCISSORS") && (computerSelection == "ROCK")) {
        alert("player Lose, Rock beats Scissors ");
        return "computer"
    } else if ((playerSelection == "PAPER") && (computerSelection == "ROCK")) {
        alert("player Wins, Paper beats Rock ");
        return "player"
    } else if ((playerSelection == "PAPER") && (computerSelection == "SCISSORS")) {
        alert("player Lose, Scissors beats Paper ");
        return "computer"
    }

}


function game(){
    let computer = 0;
    let player = 0;
    
    for (let i = 0; i < 5; i++) {
        let compSelection = getComputerChoice();
        let userSelection = prompt("Enter ROCK PAPER OR SCISSORS");
        let winner = singleRound(userSelection, compSelection);
        if (winner == "computer") {
            computer++;
        } else if (winner == "player"){
            player++;
        }
    }

    if (computer > player) {
        alert("You Lose, Computer Wins");
    } else {
        alert("You Wins, Computer Lose")
    }
}

game();
