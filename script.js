const gameOptions = ["rock","paper","scissors"]

const userSelection = document.getElementById("user-selection")
const computerSelection = document.getElementById("pc-selection")
const individualResult = document.getElementById("individual-result")
const hoverSound = document.getElementById("tik-audio")
const boomSound = document.getElementById("boom-audio")
const optionDivs = document.querySelectorAll(`.option`)
optionDivs.forEach(option =>{
    option.addEventListener("mouseenter",()=>{
        playSound(hoverSound)
    })
    option.addEventListener("click", element =>{
        setUserSelection(element.currentTarget.id)
        playSound(boomSound)
    })
})

function setUserSelection(selection){
    userSelection.innerText = `You selected ${selection}`
    game(selection)
}

function setComputerSelection(selection){
    computerSelection.innerText = `The computer selected ${selection}`
}

function playSound(sound){
    sound.currentTime = 0
    sound.play()
}

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()* gameOptions.length)
    return gameOptions[randomIndex]
}

function playRound(playerSelection, computerSelection){
    let _playerSelection = playerSelection.toLowerCase()
    let _computerSelection = computerSelection.toLowerCase()
    let winner = null


    switch (true) {
        case _playerSelection == _computerSelection:
            winner = 0
            break
        case _playerSelection == gameOptions[0] && _computerSelection == gameOptions[1]:
        case _playerSelection == gameOptions[1] && _computerSelection == gameOptions[2]:
        case _playerSelection == gameOptions[2] && _computerSelection == gameOptions[0]:
            winner = 1
            break;
        case _computerSelection == gameOptions[0] && _playerSelection == gameOptions[1]:
        case _computerSelection == gameOptions[1] && _playerSelection == gameOptions[2]:
        case _computerSelection == gameOptions[2] && _playerSelection == gameOptions[0]:
            winner = 2
            break;
    }

    return winner

}

function game(playerSelection){
let playerWins = 0
let computerWins = 0

    for(let i = 1; i<=1; i++){
        let computerSelection = getComputerChoice()
        setComputerSelection(computerSelection)
        let winner = playRound(playerSelection.toLowerCase(), computerSelection)
        if(winner != 0){
            winner == 1 ? computerWins++ : playerWins++
        }
        logIndividualResult(winner, computerSelection, playerSelection)
    }

announceUltimateWinner(playerWins, computerWins)
    
}

function announceUltimateWinner(playerWins, computerWins){
    let announcement

    if(playerWins == computerWins){
        announcement = `It's a tie, the user won ${playerWins} games and the computer ${computerWins}`
    } else{
        playerWins > computerWins
        ? announcement =`You won the game with ${playerWins} games and the computer ${computerWins}` 
        : announcement = `The computer won the game with ${computerWins} games and you lost with ${playerWins}`
    }
}

function logIndividualResult(winner, computerSelection, playerSelection){
    let results
    switch(winner){
     case 0:  
        results = `It's a tie both selected: ${computerSelection}`
        break
     case 1: 
        results =`You lose, ${computerSelection} beats ${playerSelection}` 
        break
     case 2: 
        results =`You win, ${playerSelection} beats ${computerSelection}`
        break
     default:
        results = `No official winner Your selection was: ${playerSelection} and the computer's selection was: ${computerSelection}`
        break
    }
    
    individualResult.innerText= results
}