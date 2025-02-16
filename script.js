// Function to roll dice
function rollDice() {
    const dice = document.querySelectorAll(".dice");
    dice.forEach(die => {
        const roll = Math.floor(Math.random() * 6) + 1;
        die.textContent = getDiceFace(roll);
    });
}

// Function to return emoji for dice face
function getDiceFace(number) {
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return diceFaces[number - 1];
}

// Allow "Enter" key to trigger the roll
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        rollDice();
    }
});