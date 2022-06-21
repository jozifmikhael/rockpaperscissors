
function computerPlay(){
    let move = Math.floor(Math.random() * 3);

    if (move == 1) return "Rock";
    else if (move == 2) return "Paper";
    else return "Scissors";
}

function playRPS(){

}

const moves = ["Rock", "Paper", "Scissors"];

let playerSelection = prompt("Enter your move");
for (move of moves){
    if (move.toLowerCase() === playerSelection.toLowerCase())
        break;
    else prompt("Invalid move, enter your move again");
}
console.log(playerSelection);
console.log(computerPlay());