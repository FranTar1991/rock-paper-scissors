const gameOptions = ["rock","paper","scissors"]

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random()* gameOptions.length)
    return gameOptions[randomIndex]
}

function playRound(playerSelection, computerSelection){
    let _playerSelection = playerSelection.toLowerCase()
    let _computerSelection = computerSelection.toLowerCase()
    let result = null


    switch (true) {
        //if it's a tie
        case _playerSelection == _computerSelection:
            result = `It's a tie ${_computerSelection} and ${_playerSelection} are the same`
            break
        
        case _playerSelection == gameOptions[0] && _computerSelection == gameOptions[1]:
        case _playerSelection == gameOptions[1] && _computerSelection == gameOptions[2]:
        case _playerSelection == gameOptions[2] && _computerSelection == gameOptions[0]:
            result = `You lose, ${_computerSelection} beats ${_playerSelection}` 
            break;
        case _computerSelection == gameOptions[0] && _playerSelection == gameOptions[1]:
        case _computerSelection == gameOptions[1] && _playerSelection == gameOptions[2]:
        case _computerSelection == gameOptions[2] && _playerSelection == gameOptions[0]:
            result = `You win, ${_playerSelection} beats ${_computerSelection}`
            break;
    }

    return result ?? `No official winner p: ${_playerSelection} and c: ${_computerSelection}`

}

function game(){
    let playerSelection = "Rock"
    let computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
}

