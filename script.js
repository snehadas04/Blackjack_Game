let firstCard = 11
let secondCard = 10
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messEl = document.getElementById("mess-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function startGame(){
    cardEl.textContent = "Cards : " +firstCard +"  " +secondCard
    sumEl.textContent = "Sum : " +sum

    if(sum <= 20){
        console.log("Want to draw a Card ??")
        message("Withdrawl a Card")
    }
    else if(sum === 21){
        console.log("WOOH!! Its a BLACK JACK")
        hasBlackJack = true
    }
    else{
        console.log("You lost the Game")
        message("Game Over")
        isAlive = false
    }
    messEl.textContent = message
    console.log(message)
    console.log(hasBlackJack)
    console.log(isAlive)
}
