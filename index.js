
const choices = ["rock", "paper", "scissors"];
const playDisplay = document.getElementById("playDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0
let computerScore = 0


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT's A TIE!";
    }
        else{
            switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "YOU WON🎉🏆🎆!" : "YOU LOST😭😡😭!";
                    break;
                    case "paper":
                        result = (computerChoice === "rock") ? "YOU WON🎉🏆🎆!" : "YOU LOST😭😡😭!";
                        break;
                        case "scissors":
                            result = (computerChoice === "paper") ? "YOU WON🎉🏆🎆!" : "YOU LOST😭😡😭!";

            }
    }
    playDisplay.innerHTML = `PLAYER: ${playerChoice}`;
    computerDisplay.innerHTML = `COMPUTER: ${computerChoice}`;
    resultDisplay.innerHTML = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case "YOU WON🎉🏆🎆!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            
            break;
        case "YOU LOST😭😡😭!":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;

                break;
    
        
    }
}
