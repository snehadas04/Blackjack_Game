let firstCard = 11
let secondCard = 10
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

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
console.log(hasBlackJack)
console.log(isAlive)