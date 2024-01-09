console.log("hello world from javascript file ")

function getComputerChoice(){
    p = Math.floor(Math.random()*3)
    if (p === 0){
        return 'ROCK'
    }
    if (p === 1){
        return 'PAPER'
    }
    if (p === 2){
        return 'SCISSORS'
    }
}

function playRound(player,computer){

    let p = player.toUpperCase()

    // INCASE OF A TIE 
    if (p === computer){
        playRound(player,getComputerChoice())
    }
    if(p === 'ROCK' && computer === 'PAPER'){
        return 1
    }
    if(p === 'PAPER' && computer === 'SCISSORS'){
        return 1
    }
    if(p === 'SCISSORS' && computer === 'ROCK'){
        return 1
    }
    if(p === 'ROCK' && computer === 'SCISSORS'){
        return 0
    }
    if(p === 'PAPER' && computer === 'ROCK'){
        return 0
    }
    if(p === 'SCISSORS' && computer === 'PAPER'){
        return 0
    }
}

function game(n){

    let player_score = 0
    let computer_score = 0
    
    for (i=0;i<=n;i++){
        let player = prompt("Enter Rock/Paper/Scissors :")
        let r = playRound(player,getComputerChoice())
        if (r===0){
            player_score++
        }
        else{
            computer_score++
        }
    }

    if (player_score > computer_score){
        console.log("player won by "+player_score+" points")
    }else{
        console.log("computer won by "+computer_score+" points")
    }
}

game(5)