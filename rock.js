const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
const playerChoiceDisplay = document.getElementById("player-choice")
const result = document.getElementById("result")
const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score")
const computerChoiceDisplay = document.getElementById("computer-choice")
const resetButton = document.getElementById("reset")
const choices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0


function ComputerChoices(){
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

function playGame(playerChoice){
    const computerChoice = ComputerChoices()
    computerChoiceDisplay.textContent = computerChoice
    playerChoiceDisplay.textContent = playerChoice
    if(playerChoice === computerChoice){
        result.textContent = "Egalite !"
    }
    else if((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")){
        playerScore++
        playerScoreDisplay.textContent = playerScore
        result.textContent = "You've won !"
    }
    else {
        computerScore++
        computerScoreDisplay.textContent = computerScore
        result.textContent = "Computer has won !"
    }
    checkWinner()
}

function checkWinner(){
    if(playerScore === 5){
        result.textContent = "You have won the game !"
        rockButton.disabled = true
        paperButton.disabled = true
        scissorsButton.disabled = true
    }
    if(computerScore === 5){
        result.textContent = "Computer has won the game !"
        rockButton.disabled = true
        paperButton.disabled = true
        scissorsButton.disabled = true
    }
}

rockButton.addEventListener("click", function(){
    playGame("rock")
})

paperButton.addEventListener("click", function(){
    playGame("paper")
})

scissorsButton.addEventListener("click", function(){
    playGame("scissors")
})

resetButton.addEventListener("click", function(){
    playerScore = 0
    computerScore = 0

    playerChoiceDisplay.textContent = "-"
    computerChoiceDisplay.textContent = "-"

    playerScoreDisplay.textContent = "0"
    computerScoreDisplay.textContent = "0"
    
    result.textContent = "Choisis une option pour commencer !"

    rockButton.disabled = false
        paperButton.disabled = false
        scissorsButton.disabled = false
})