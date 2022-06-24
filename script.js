const map = new Map();
let roundCount = 0;
let computerWins = 0;
let playerWins = 0;

initializeMap();

// get all images using class move
let clickableImages = document.querySelectorAll('.move');

//add on click event listener to each image 
clickableImages.forEach( (image) => {

    image.addEventListener('click', event => {
        let computerMove = computerPlay();
        let playerMove = event.target.parentElement.id.toString();
        // console.log(playRPS(computerMove, playerMove));
        let winner = playRPS(computerMove, playerMove);
        displayResult(winner, computerMove, playerMove);
    })
});

function displayResult(winner, computerMove, playerMove){
    let result = checkWinner(winner);
    
    document.querySelector('#player-counter').textContent = playerWins.toString();
    document.querySelector('#computer-counter').textContent = computerWins.toString();
    
    // parent element of player and computer output
    let output = document.querySelector('.output');
    let round = document.createElement('div');
    round.classList.toggle('round');
    roundCount++;
    round.textContent = `Round ${roundCount}: ${result}`;
    // player output div which will contain img and text
    let playerOutput = createPlayerOutput(playerMove);
    // computer output div
    let computerOutput = createComputerOutput(computerMove);

    round.appendChild(playerOutput);
    round.appendChild(computerOutput);
    output.insertBefore(round, output.firstChild);
}

function createPlayerOutput(playerMove){
    const playerOutput = document.createElement('div');
    const playerMoveImage = document.createElement('img');
    playerMoveImage.src = `./images/${playerMove}.png`;
    const playerMoveText = document.createElement('div');
    playerMoveText.classList.toggle('text');
    playerMoveText.textContent = 'You';
    playerOutput.appendChild(playerMoveImage);
    playerOutput.appendChild(playerMoveText);
    return playerOutput;
}

function createComputerOutput(computerMove){
    const computerOutput = document.createElement('div')
    const computerMoveImage = document.createElement('img');
    computerMoveImage.src = `./images/${computerMove}.png`;
    computerMoveImage.classList.toggle('opponent-image');
    const computerMoveText = document.createElement('div');
    computerMoveText.classList.toggle('text');
    computerMoveText.textContent = 'Computer';
    computerOutput.appendChild(computerMoveImage);
    computerOutput.appendChild(computerMoveText);
    return computerOutput;
}

function checkWinner(winner){
    if (winner.charAt(0).toLowerCase() == 'd') {
        return 'Draw!';
    }
    else if (winner.charAt(0).toLowerCase() == 'c'){
        computerWins += 1;
        return 'Computer won!';
    } else {
        playerWins += 1;
        return 'You won!';
    }
}

function playRPS(computerMove, playerMove){
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

function computerPlay(){
    let move = Math.floor(Math.random() * 3);

    if (move == 1) return "rock";
    else if (move == 2) return "paper";
    else return "scissors";
}