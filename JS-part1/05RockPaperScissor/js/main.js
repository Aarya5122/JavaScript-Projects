let userScorecard = document.getElementById("userScoreVal")
let computerScorecard = document.getElementById("compScoreVal")

let user = document.querySelector("#result-user-stat")
let computer = document.querySelector("#result-comp-stat")
let result = document.querySelector("#result-final-stat")

let options = ["rock","paper","scissor"]

function runGame(user, computer){
    if(user==="scissor"&&computer==="paper"){
        return "User"
    } else if(user==="rock"&&computer==="scissor"){
        return "User"
    } else if(user==="paper"&&computer==="rock"){
        return "User"
    } else if(computer==="scissor" && user==="paper"){
        return "Computer"
    } else if(computer==="rock" && user==="scissor"){
        return "Computer"
    } else if(computer==="paper" && user==="rock"){
        return "Computer"
    } else {
        return "Draw"
    }
}

let choices = document.querySelectorAll(".choice")
choices.forEach(item => {
    item.addEventListener("click",()=>{
        user.textContent = `User: ${event.target.alt}`
        computer.textContent = `Computer: ${options[Math.floor(Math.random()*3)]}`
        result.textContent = `Winner: ${runGame(user.textContent.slice(6), computer.textContent.slice(10))}`
        if(result.textContent.slice(8)==="User"){
            userScorecard.textContent=(Number(userScorecard.textContent)+1)
        } else if(result.textContent.slice(8)==="Computer"){
            computerScorecard.textContent=(Number(computerScorecard.textContent)+1)
        } else {

        }
    })
})


