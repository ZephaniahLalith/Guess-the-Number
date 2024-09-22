let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let random = Math.ceil(Math.random())
console.log(random)

function checkGuess() {
    if (parseInt(userInput.value) > random) {
        document.getElementById("gameResult").textContent = "Too high!! better luck next time";
        document.getElementById("gameResult").style.color = "red";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c";
    } else if (parseInt(userInput.value) < random) {
        document.getElementById("gameResult").textContent = "Too low!! better luck next time";
        document.getElementById("gameResult").style.color = "red";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c";
    } else {
        document.getElementById("gameResult").textContent = "Congratulations!! you got it right";
        document.getElementById("gameResult").style.color = "white";
        document.getElementById("gameResult").style.backgroundColor = "green";

    }
}