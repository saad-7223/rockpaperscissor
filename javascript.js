let r_btn = document.querySelector(".rock")
let s_btn = document.querySelector(".scissors")
let p_btn = document.querySelector(".paper")

let p = "";
r_btn.addEventListener('click',()=>{
    console.log(r_btn.textContent)
    p = r_btn.textContent
})
s_btn.addEventListener('click',()=>{
    console.log(s_btn.textContent)
    p = s_btn.textContent
})
p_btn.addEventListener('click',()=>{
    console.log(p_btn.textContent)
    p = p_btn.textContent
})

let container = document.querySelector(".container")
let result = document.createElement("div")
result.className = "result"
result.style.color = white
result.innerText = p
container.appendChild(result)

function getComputerChoice(){
    c = Math.floor(Math.random()*3)
    if (c === 0){
        return 'ROCK'
    }
    if (c === 1){
        return 'PAPER'
    }
    if (c === 2){
        return 'SCISSOR'
    }
}

// function playRound(player,computer){

//     let p = player.toUpperCase()
//     let c = computer

//     // INCASE OF A TIE 
//     if (p === c){
//         c = getComputerChoice()
//     }
//     if(p === 'ROCK' && c === 'PAPER'){
//         return 1
//     }
//     if(p === 'PAPER' && c === 'SCISSOR'){
//         return 1
//     }
//     if(p === 'SCISSOR' && c === 'ROCK'){
//         return 1
//     }
//     if(p === 'ROCK' && c === 'SCISSOR'){
//         return -1
//     }
//     if(p === 'PAPER' && c === 'ROCK'){
//         return -1
//     }
//     if(p === 'SCISSOR' && c === 'PAPER'){
//         return -1
//     }
// }

// function game(n){

//     let player_score = 0
//     let computer_score = 0
    
//     for (i=0;i<n;i++){
//         let player = prompt("Enter Rock/Paper/SCISSOR :")
//         let r = playRound(player,getComputerChoice())
//         if (r===-1){
//             player_score++
//         }
//         else{
//             computer_score++
//         }
//     }

//     if (player_score > computer_score){
//         console.log("player won by "+player_score+" points")
//     }else if (player_score < computer_score){
//         console.log("computer won by "+computer_score+" points")
//     }else{
//         console.log("It's a Tie")
//     }
// }

// game(5)