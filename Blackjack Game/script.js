let firstCard = 7
let secondCard = 10
let sum = firstCard+secondCard
console.log(sum)

if(sum < 21){
    console.log("Withdrawal a Card")
}
else if(sum === 21){
    console.log("WOOH!! Its a BLACK JACK")
}
else if(sum > 21){
    console.log("You lost the Game")
}