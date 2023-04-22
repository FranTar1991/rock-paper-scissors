const gameOptions = ["rock","paper","scissors"]

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

function game(){
let playerWins = 0
let computerWins = 0

    for(let i = 1; i<=5; i++){
        let playerSelection = prompt(`Enter your option: Rock, Paper or Scissors`)
        let computerSelection = getComputerChoice()
        let winner = playRound(playerSelection, computerSelection)
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

    console.log(announcement)
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
    
    console.log(results)
}