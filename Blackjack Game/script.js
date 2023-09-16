let firstCard = getRendonCard()
let secondCard = getRendonCard()
let cards = [firstCard,secondCard]
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messEl = document.querySelector('#mess-el')
let cardEl = document.querySelector('#cards-el')
let sumEl = document.querySelector('#sum-el')

function getRendonCard(){
    let cardNo = Math.floor(Math.random()*13)+1
    {
        if (cardNo == 1){
            return 11
        }
        else if (cardNo>10){
            return 10
        }
    }
    return cardNo
}

function startGame(){
    renderGame()
}

function newCard(){
    console.log("Draw a new Card : ")
    let nCard = getRendonCard()
    sum += nCard 
    cards.push(nCard)
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
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
