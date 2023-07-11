let firstCard = 11
let secondCard = 10
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true

if(sum <= 20){
    console.log("Withdrawal a Card")
}
else if(sum === 21){
    console.log("WOOH!! Its a BLACK JACK")
    hasBlackJack = true
}
else{
    console.log("You lost the Game")
    isAlive = false
}
console.log(hasBlackJack)
console.log(isAlive)