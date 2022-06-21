const map = new Map();

initializeMap();
let playersMove = playerMove();
let computerMove = computerPlay();
console.log(`Computer Move: ${computerMove}, Player move: ${playersMove}` + " " + playRPS(computerMove, playersMove));

function computerPlay(){
    let move = Math.floor(Math.random() * 3);

    if (move == 1) return "Rock";
    else if (move == 2) return "Paper";
    else return "Scissors";
}

function playRPS(computerMove, playerMove){
    if (computerMove.toLowerCase() == playerMove)
        return 'Draw!'
    else if (computerMove.toLowerCase() == 'rock' && playerMove == 'scissors')
        return 'Computer wins, you lose!';
    else if (computerMove.toLowerCase() == 'scissors' && playerMove == 'paper')
        return 'Computer wins, you lose!';
    else if (computerMove.toLowerCase() == 'paper' && playerMove == 'rock')
        return 'Computer wins, you lose!';
    else return 'You Win!';
}

function equalsIgnoringCase(text, other) {
    return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
}

function initializeMap(){
    map.set('rock', 1);
    map.set('paper', 2);
    map.set('scissors', 3);
}


function playerMove(){
    let playerSelection = prompt("Enter your move");

    while (!map.has(playerSelection.toLowerCase())){
        playerSelection = prompt("Invalid, enter again");
    }

    return playerSelection;
}
