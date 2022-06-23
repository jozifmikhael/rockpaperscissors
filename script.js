const map = new Map();
let computerWins = 0;
let playerWins = 0;


initializeMap();

// rock event listener
document.getElementsByClassName('move')[0].addEventListener('click', function(event){
    let computerMove = computerPlay();
    console.log(playRPS(computerPlay(), event.target.parentElement.id.toString()));
});
// paper event listener
document.getElementsByClassName('move')[1].addEventListener('click', function(event){
    let computerMove = computerPlay();
    console.log(playRPS(computerPlay(), event.target.parentElement.id.toString()));
});
// scissors event listener
document.getElementsByClassName('move')[2].addEventListener('click', function(event){
    let computerMove = computerPlay();
    console.log(playRPS(computerPlay(), event.target.parentElement.id.toString()));
});

function computerPlay(){
    let move = Math.floor(Math.random() * 3);

    if (move == 1) return "rock";
    else if (move == 2) return "paper";
    else return "scissors";
}

function game(){
    for (let i = 1; i <= 5; i++){
        let playersMove = playerMove();
        let computerMove = computerPlay();
        console.log(`player move: ${playersMove}, computer move ${computerMove}`)
        let winner = playRPS(computerMove, playersMove);
        if (winner.charAt(0).toLowerCase() == 'd') {
            console.log('Round ended in draw!');
            continue;
        }
        else if (winner.charAt(0).toLowerCase() == 'c'){
            computerWins += 1;
            console.log('Computer wins round ' + i);
        } else {
            playerWins += 1;
            console.log('You win round ' + i);
        }
    }
    console.log(computerWins + " " + playerWins);
    if (computerWins > playerWins) console.log('Computer won the most games!');
    else console.log('You won the most games!');
}

function playRPS(computerMove, playerMove){
    console.log(`player move ${playerMove} computer move ${computerMove}`);
    if (computerMove === playerMove){
        return 'Draw!'
    }else if (computerMove === 'rock' && playerMove === 'scissors'){
        return 'Computer wins, you lose!';
    }
    else if (computerMove === 'scissors' && playerMove === 'paper')
        return 'Computer wins, you lose!';
    else if (computerMove === 'paper' && playerMove === 'rock')
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

    return playerSelection.toString();
}
