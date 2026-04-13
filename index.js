let firstCard = Math.floor(Math.random() * 11) + 1
let secondCard = Math.floor(Math.random() * 11) + 1
let cards = [firstCard, secondCard]
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let announcementEl = document.getElementById("announcement-el")
let drawCard = document.getElementById("draw-card")
let sum = firstCard + secondCard
let stayButton = document.getElementById("stay-button")
const randomNumber = Math.floor(Math.random() * 21) + 1

function startGame(){
    renderGame()
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
    let card = Math.floor(Math.random() * 11) + 1
    cards.push(card)
    sum += card
    sumEl.textContent = "Sum: " + sum
    renderGame()
}

function stay(){
    if(sum < randomNumber){
        announcementEl.textContent = "You: " + sum + " Bot: " + randomNumber + " You lost."
    } else if(sum > randomNumber){
        announcementEl.textContent = "You: " + sum + " Bot: " + randomNumber + " You won!"
    } else{
        announcementEl.textContent = "You: " + sum + " Bot: " + randomNumber + " TIE. Refresh the page."
    }
    setTimeout(() => {
        location.reload();
    }, 5000);
}

