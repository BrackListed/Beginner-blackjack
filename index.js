let cardSelection = [
    {name: "Clubs_2", value: 2, img: "card-images/clubs_2.png"},
    {name: "Clubs_3", value: 3, img: "card-images/clubs_3.png"},
    {name: "Clubs_4", value: 4, img: "card-images/clubs_4.png"},
    {name: "Clubs_5", value: 5, img: "card-images/clubs_5.png"},
    {name: "Clubs_6", value: 6, img: "card-images/clubs_6.png"},
    {name: "Clubs_7", value: 7, img: "card-images/clubs_7.png"},
    {name: "Clubs_8", value: 8, img: "card-images/clubs_8.png"},
    {name: "Clubs_9", value: 9, img: "card-images/clubs_9.png"},
    {name: "Clubs_10", value: 10, img: "card-images/clubs_10.png"},
    {name: "Clubs_J", value: 10, img: "card-images/clubs_J.png"},
    {name: "Clubs_K", value: 10, img: "card-images/clubs_K.png"},
    {name: "Clubs_Q", value: 10, img: "card-images/clubs_Q.png"},
    {name: "Clubs_A", value: 11, img: "card-images/clubs_A.png"},

    {name: "Diamonds_2", value: 2, img: "card-images/diamonds_2.png"},
    {name: "Diamonds_3", value: 3, img: "card-images/diamonds_3.png"},
    {name: "Diamonds_4", value: 4, img: "card-images/diamonds_4.png"},
    {name: "Diamonds_5", value: 5, img: "card-images/diamonds_5.png"},
    {name: "Diamonds_6", value: 6, img: "card-images/diamonds_6.png"},
    {name: "Diamonds_7", value: 7, img: "card-images/diamonds_7.png"},
    {name: "Diamonds_8", value: 8, img: "card-images/diamonds_8.png"},
    {name: "Diamonds_9", value: 9, img: "card-images/diamonds_9.png"},
    {name: "Diamonds_10", value: 10, img: "card-images/diamonds_10.png"},
    {name: "Diamonds_J", value: 10, img: "card-images/diamonds_J.png"},
    {name: "Diamonds_K", value: 10, img: "card-images/diamonds_K.png"},
    {name: "Diamonds_Q", value: 10, img: "card-images/diamonds_Q.png"},
    {name: "Diamonds_A", value: 11, img: "card-images/diamonds_A.png"},

    {name: "Hearts_2", value: 2, img: "card-images/hearts_2.png"},
    {name: "Hearts_3", value: 3, img: "card-images/hearts_3.png"},
    {name: "Hearts_4", value: 4, img: "card-images/hearts_4.png"},
    {name: "Hearts_5", value: 5, img: "card-images/hearts_5.png"},
    {name: "Hearts_6", value: 6, img: "card-images/hearts_6.png"},
    {name: "Hearts_7", value: 7, img: "card-images/hearts_7.png"},
    {name: "Hearts_8", value: 8, img: "card-images/hearts_8.png"},
    {name: "Hearts_9", value: 9, img: "card-images/hearts_9.png"},
    {name: "Hearts_10", value: 10, img: "card-images/hearts_10.png"},
    {name: "Hearts_J", value: 10, img: "card-images/hearts_J.png"},
    {name: "Hearts_K", value: 10, img: "card-images/hearts_K.png"},
    {name: "Hearts_Q", value: 10, img: "card-images/hearts_Q.png"},
    {name: "Hearts_A", value: 11, img: "card-images/hearts_A.png"},

    {name: "Spades_2", value: 2, img: "card-images/spades_2.png"},
    {name: "Spades_3", value: 3, img: "card-images/spades_3.png"},
    {name: "Spades_4", value: 4, img: "card-images/spades_4.png"},
    {name: "Spades_5", value: 5, img: "card-images/spades_5.png"},
    {name: "Spades_6", value: 6, img: "card-images/spades_6.png"},
    {name: "Spades_7", value: 7, img: "card-images/spades_7.png"},
    {name: "Spades_8", value: 8, img: "card-images/spades_8.png"},
    {name: "Spades_9", value: 9, img: "card-images/spades_9.png"},
    {name: "Spades_10", value: 10, img: "card-images/spades_10.png"},
    {name: "Spades_J", value: 10, img: "card-images/spades_J.png"},
    {name: "Spades_K", value: 10, img: "card-images/spades_K.png"},
    {name: "Spades_Q", value: 10, img: "card-images/spades_Q.png"},
    {name: "Spades_A", value: 11, img: "card-images/spades_A.png"},

]


const firstIndex = Math.floor(Math.random() * cardSelection.length)
const secondIndex = Math.floor(Math.random() * cardSelection.length) 
let firstCard = cardSelection[firstIndex]
let secondCard = cardSelection[secondIndex]
let cards = [firstCard, secondCard]
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let announcementEl = document.getElementById("announcement-el")
let drawCard = document.getElementById("draw-card")
let sum = firstCard.value + secondCard.value
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
    let botcardone = cardSelection[thirdIndex].value
    let botcardtwo =  cardSelection[fourthindex].value
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
        let cardImg = document.createElement("img")
        cardImg.src = cards[x].img
        cardsEl.appendChild(cardImg)
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
    sum += card.value
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
    botCard = cardSelection[botIndex].value
    botCards.push(botCard)
    botSum += botCard
}
    if(botSum > 21){
        alert("You: " + sum + " Bot: " + botSum + " Bot busted. You won!")
        announcementEl.textContent = "You: " + sum + " Bot: " + botSum + " Bot busted. You won!"}
    else if(sum < botSum){
        alert("You: " + sum + " Bot: " + botSum + " You lost.")
        announcementEl.textContent = "You: " + sum + " Bot: " + botSum + " You lost."
    } else if(sum > botSum){
        alert("You: " + sum + " Bot: " + botSum + " You won!")
        announcementEl.textContent = "You: " + sum + " Bot: " + botSum + " You won!"
    } else{
        alert("You: " + sum + " Bot: " + botSum + " TIE. Refresh the page.")
        announcementEl.textContent = "You: " + sum + " Bot: " + botSum + " TIE. Refresh the page."
    }
    setTimeout(() => {
        location.reload();
    }, 5000);

}

