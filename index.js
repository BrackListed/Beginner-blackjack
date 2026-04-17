let cardSelection = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
const firstIndex = Math.floor(Math.random() * cardSelection.length)
const secondIndex = Math.floor(Math.random() * cardSelection.length) 
let firstCard = cardSelection[firstIndex]
let secondCard = cardSelection[secondIndex]
let cards = [firstCard, secondCard]
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let announcementEl = document.getElementById("announcement-el")
let drawCard = document.getElementById("draw-card")
let sum = firstCard + secondCard
let stayButton = document.getElementById("stay-button")
let botsum = 0
let botCards = []
let aceCounter = 0
let botAcecounter = 0


if(firstCard === 11){
    aceCounter += 1
} else if(secondCard === 11){
    aceCounter += 1
} 
if(sum > 21 && aceCounter >= 1){
    sum = sum - 10
}



function startGame(){
    renderGame()
    drawCard.style.display = "block"
    const thirdIndex = Math.floor(Math.random() * cardSelection.length) 
    const fourthindex = Math.floor(Math.random() * cardSelection.length)
    let botcardone = cardSelection[thirdIndex]
    let botcardtwo =  cardSelection[fourthindex]
    botSum = botcardone + botcardtwo
    botCards = [botcardone, botcardtwo]
    if(botcardone === 11){
        botAcecounter = 1
    } else if(botcardtwo === 11){
        botAcecounter = 1
    }

    if(botsum > 21 && botAcecounter === 1){
        botsum = botsum - 10
    }

}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let x = 0; x < cards.length; x+=1){
        cardsEl.textContent += cards[x] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum > 21){
        announcementEl.textContent = "Over 21. You lost!"
        setTimeout(() => {
           location.reload() 
        }, 1000);
    } else if(sum < 21){
        announcementEl.textContent = "Want to draw another card?"
        stayButton.style.display = "block"
    } else{
        announcementEl.textContent = "Blackjack. You won!"
        setTimeout(() => {
            location.reload()
        }, 5000);
    }
}

function newCard(){
    const newIndex = Math.floor(Math.random() * cardSelection.length);
    card = cardSelection[newIndex]
    cards.push(card)
    sum += card
    sumEl.textContent = "Sum: " + sum
    if(card === 11){
        aceCounter += 1
    } 
    if(sum > 21 && aceCounter >= 1){
        sum = sum - 10
    }
    renderGame()
}

function stay(){
    while(botSum < 17){
    const botIndex = Math.floor(Math.random() * cardSelection.length);
    botCard = cardSelection[botIndex]
    botCards.push(botCard)
    botSum += botCard
}
    if(botSum > 21){
        announcementEl.textContent = "You: " + sum + " Bot: " + botSum + " Bot busted. You won!"}
    else if(sum < botSum){
        announcementEl.textContent = "You: " + sum + " Bot: " + botSum + " You lost."
    } else if(sum > botSum){
        announcementEl.textContent = "You: " + sum + " Bot: " + botSum + " You won!"
    } else{
        announcementEl.textContent = "You: " + sum + " Bot: " + botSum + " TIE. Refresh the page."
    }
    setTimeout(() => {
        location.reload();
    }, 5000);
}