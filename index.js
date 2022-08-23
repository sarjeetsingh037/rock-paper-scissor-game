const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
let playerChoice = prompt('Enter your choice. ROCK || PAPER || SCISSOR?').toUpperCase();

let randomNumber = Math.floor(Math.random()*3)+1;
let computerChoice;
computerChoice = randomNumber === 1? computerChoice = ROCK: randomNumber === 2? computerChoice = PAPER: computerChoice = SCISSOR;
// if(randomNumber === 1) {
//     computerChoice = ROCK;
// } else if(randomNumber === 2) {
//     computerChoice = PAPER;
// } else {
//     computerChoice = SCISSOR;
// }
console.log(playerChoice);
console.log(computerChoice);
if(playerChoice === ROCK || playerChoice === PAPER || playerChoice === SCISSOR) {

    if(playerChoice === computerChoice) {
        alert('It is draw!!');
    } else if(
    (playerChoice === ROCK && computerChoice === SCISSOR)|| 
    (playerChoice === PAPER && computerChoice === ROCK) ||
     (playerChoice === SCISSOR && computerChoice === PAPER)) {
        alert("Player wins!!")
    } else {
        alert("Computer wins!!");
    }
    
    
    // if(playerChoice === ROCK && computerChoice === PAPER) {
    //     alert("Computer wins!!");
    // } else if(playerChoice === ROCK && computerChoice === SCISSOR) {
    //     alert("Player wins!!");
    // } else if(playerChoice === PAPER && computerChoice === ROCK) {
    //     alert("Player wins!!");
    // }else if(playerChoice === PAPER && computerChoice === SCISSOR) {
    //     alert("Computer wins!!");
    // }else if(playerChoice === SCISSOR && computerChoice === ROCK) {
    //     alert("Computer wins!!");
    // } else if(playerChoice === SCISSOR && computerChoice === PAPER) {
    //     alert("Player wins!!");
    // }
} else {
    alert("Please enter ROCK || PAPER || SCISSOR");
}
