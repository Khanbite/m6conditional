let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let userGuess;
document.getElementById("startGame").addEventListener("click", startGame);
function startGame() {
    while (true) {
        userGuess = prompt("Guess a number between 1 and 10 (or type 999 to exit):");
        userGuess = Number(userGuess);
        if (userGuess === 999) {
            alert("You exited the game.");
            break;
        }
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            alert("Invalid input! Please enter a number between 1 and 10.");
            continue;
        }
        attempts++;
        if (userGuess < randomNumber) {
            alert("Too low! Try again.");
        } else if (userGuess > randomNumber) {
            alert("Too high! Try again.");
        } else {
            alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
            break;
        }
    }
}