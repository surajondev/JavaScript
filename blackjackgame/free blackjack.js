let player={
    name:"jack",
    chips:132
}
let cards = []//array orderd list of itms
let sum = 0
let hasBlackJack = false
let isALive = false
let message = ""
console.log(cards)

let messageEl = document.getElementById("message-el")
let sumEL = document.querySelector("#sum-el")
let cardsEl = document.getElementById("card-el")

//  grabing the  ahold player-el  and store in the variable 
let playerEl=document.getElementById("player-el")
//rander the game players name and chips is playerEl
playerEl.textContent=player.name+" :"+player.chips
// 1/CREATE A  FUNCTION GETRANDOMCARD() THAT ALWAYS THE NUMBER 5
function getRandomCards() { //3:29
    //return  Math.floor()*10
    let randomNumber = Math.floor(Math.random() * 13)//flooor guves the value withiut decimal

    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }

}



//create a function called startGame() that calls renderGame()
function startGame() {
    isALive = true
    let firstCard = getRandomCards()
    let secondCard = getRandomCards()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()

}


function renderGame() {
    cardsEl.textContent = "cards:"
    //create a for loop that render out all the cards instead of just one
    for (let i = 0; i < cards.length; i++) {

        cardsEl.textContent += cards[i] + " "
    }
    sumEL.textContent = "sum:" + sum

    // sumEL.textContent= "sum:"+sum
    if (sum <= 20) {
        message = "do you want to draw the new card?"
    }
    else if (sum === 21) {
        message = "wohoo you have got the BalckJack!"
        hasBlackJack = true
    } else {
        message = "you are out of the game"
        isALive = false
    }
    messageEl.textContent = message

    console.log(message)
}
function newCard() {
    // 1 create a card variable and hard code its value to anumber (2-11)
   if(isALive===true && hasBlackJack===false){
    let card = getRandomCards()
    // 2 add the new card to the sum varible
    
    


    sum += card
    cards.push(cards)
    // 3 call startGame()
    console.log(cards)
    renderGame()
}

}

