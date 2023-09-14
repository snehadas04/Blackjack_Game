let firstCard = 11
let secondCard = 10
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messEl = document.querySelector('#mess-el')
let cardEl = document.querySelector('#cards-el')
let sumEl = document.querySelector('#sum-el')

function startGame(){
    renderGame()
}

function newCard(){
    console.log("Draw a new Card : ")
    let nCard = 7
    sum += nCard 
    renderGame()
}

function renderGame(){
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
