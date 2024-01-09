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
        return 'SCISSOR'
    }
}

function playRound(player,computer){

    let p = player.toUpperCase()
    let c = computer

    // INCASE OF A TIE 
    if (p === c){
        c = getComputerChoice()
    }
    if(p === 'ROCK' && c === 'PAPER'){
        return 1
    }
    if(p === 'PAPER' && c === 'SCISSOR'){
        return 1
    }
    if(p === 'SCISSOR' && c === 'ROCK'){
        return 1
    }
    if(p === 'ROCK' && c === 'SCISSOR'){
        return -1
    }
    if(p === 'PAPER' && c === 'ROCK'){
        return -1
    }
    if(p === 'SCISSOR' && c === 'PAPER'){
        return -1
    }
}

function game(n){

    let player_score = 0
    let computer_score = 0
    
    for (i=0;i<n;i++){
        let player = prompt("Enter Rock/Paper/SCISSOR :")
        let r = playRound(player,getComputerChoice())
        if (r===-1){
            player_score++
        }
        else{
            computer_score++
        }
    }

    if (player_score > computer_score){
        console.log("player won by "+player_score+" points")
    }else if (player_score < computer_score){
        console.log("computer won by "+computer_score+" points")
    }else{
        console.log("It's a Tie")
    }
}

game(5)