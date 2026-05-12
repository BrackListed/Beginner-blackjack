import { useState, useEffect } from "react";
import { Buttons } from "./Buttons";

export function Main() {
    type Card = {
        name: string; 
        value: number;
        img: string;
    }

    type cards = {
        name: string;
        value: number;
        img: string;
    }
    let cardSelection: Card[] = [
    {name: "clubs_2", value: 2, img: "./playing-cards/clubs_2.png"},
    {name: "clubs_3", value: 3, img: "./playing-cards/clubs_3.png"},
    {name: "clubs_4", value: 4, img: "./playing-cards/clubs_4.png"},
    {name: "clubs_5", value: 5, img: "./playing-cards/clubs_5.png"},
    {name: "clubs_6", value: 6, img: "./playing-cards/clubs_6.png"},
    {name: "clubs_7", value: 7, img: "./playing-cards/clubs_7.png"},
    {name: "clubs_8", value: 8, img: "./playing-cards/clubs_8.png"},
    {name: "clubs_9", value: 9, img: "./playing-cards/clubs_9.png"},
    {name: "clubs_10", value: 10, img: "./playing-cards/clubs_10.png"},
    {name: "clubs_J", value: 10, img: "./playing-cards/clubs_J.png"},
    {name: "clubs_K", value: 10, img: "./playing-cards/clubs_K.png"},
    {name: "clubs_Q", value: 10, img: "./playing-cards/clubs_Q.png"},
    {name: "clubs_A", value: 11, img: "./playing-cards/clubs_A.png"},
    {name: "diamonds_2", value: 2, img: "./playing-cards/diamonds_2.png"},
    {name: "diamonds_3", value: 3, img: "./playing-cards/diamonds_3.png"},
    {name: "diamonds_4", value: 4, img: "./playing-cards/diamonds_4.png"},
    {name: "diamonds_5", value: 5, img: "./playing-cards/diamonds_5.png"},
    {name: "diamonds_6", value: 6, img: "./playing-cards/diamonds_6.png"},
    {name: "diamonds_7", value: 7, img: "./playing-cards/diamonds_7.png"},
    {name: "diamonds_8", value: 8, img: "./playing-cards/diamonds_8.png"},
    {name: "diamonds_9", value: 9, img: "./playing-cards/diamonds_9.png"},
    {name: "diamonds_10", value: 10, img: "./playing-cards/diamonds_10.png"},
    {name: "diamonds_J", value: 10, img: "./playing-cards/diamonds_J.png"},
    {name: "diamonds_K", value: 10, img: "./playing-cards/diamonds_K.png"},
    {name: "diamonds_Q", value: 10, img: "./playing-cards/diamonds_Q.png"},
    {name: "diamonds_A", value: 11, img: "./playing-cards/diamonds_A.png"},
    {name: "hearts_2", value: 2, img: "./playing-cards/hearts_2.png"},
    {name: "hearts_3", value: 3, img: "./playing-cards/hearts_3.png"},
    {name: "hearts_4", value: 4, img: "./playing-cards/hearts_4.png"},
    {name: "hearts_5", value: 5, img: "./playing-cards/hearts_5.png"},
    {name: "hearts_6", value: 6, img: "./playing-cards/hearts_6.png"},
    {name: "hearts_7", value: 7, img: "./playing-cards/hearts_7.png"},
    {name: "hearts_8", value: 8, img: "./playing-cards/hearts_8.png"},
    {name: "hearts_9", value: 9, img: "./playing-cards/hearts_9.png"},
    {name: "hearts_10", value: 10, img: "./playing-cards/hearts_10.png"},
    {name: "hearts_J", value: 10, img: "./playing-cards/hearts_J.png"},
    {name: "hearts_K", value: 10, img: "./playing-cards/hearts_K.png"},
    {name: "hearts_Q", value: 10, img: "./playing-cards/hearts_Q.png"},
    {name: "hearts_A", value: 11, img: "./playing-cards/hearts_A.png"},
    {name: "spades_2", value: 2, img: "./playing-cards/spades_2.png"},
    {name: "spades_3", value: 3, img: "./playing-cards/spades_3.png"},
    {name: "spades_4", value: 4, img: "./playing-cards/spades_4.png"},
    {name: "spades_5", value: 5, img: "./playing-cards/spades_5.png"},
    {name: "spades_6", value: 6, img: "./playing-cards/spades_6.png"},
    {name: "spades_7", value: 7, img: "./playing-cards/spades_7.png"},
    {name: "spades_8", value: 8, img: "./playing-cards/spades_8.png"},
    {name: "spades_9", value: 9, img: "./playing-cards/spades_9.png"},
    {name: "spades_10", value: 10, img: "./playing-cards/spades_10.png"},
    {name: "spades_J", value: 10, img: "./playing-cards/spades_J.png"},
    {name: "spades_K", value: 10, img: "./playing-cards/spades_K.png"},
    {name: "spades_Q", value: 10, img: "./playing-cards/spades_Q.png"},
    {name: "spades_A", value: 11, img: "./playing-cards/spades_A.png"},
]

    const [gameStarted, setGameStarted] = useState(false)
     {/* Dont forget to set gameStarted to false once the player has won/lost */}
    let firstCard = null
    let secondCard = null
    let isAlive = false
const [cards, setCard] = useState<Card[]>(JSON.parse(localStorage.getItem("card-storage") ?? "null") ?? [firstCard, secondCard])
const [sum, setSum] = useState(Number)

useEffect(() =>{
    if(isAlive === false){
        Reset()
    } else{

    }
}, [isAlive])

useEffect(() => {
    if(sum > 21) {
        isAlive = false
        setGameStarted(false)
        return() => {
            console.log("You lost.")
        }
    } 
}, [sum])
let sumStorage = 0

  return (
    <div className="flex flex-col gap-3 text-center items-center">
        <span>Click Start!</span>
        <div id = 'card-container' className="flex mx-auto my-5 gap-3">Cards: 
        {gameStarted && cards.map((card: Card) => (
           <img src = {card.img} alt = "img of card" className="w-15 h-auto"></img>
        ))}
        </div>
        <div id = 'sum-container'>Sum: {sum}</div>
        {gameStarted === false && <Buttons onClick = {() => {startGame(); setGameStarted(true)}}>Start</Buttons> }
        {gameStarted && <div className="flex flex-col gap-2 items-center">
            <Buttons onClick = {() => Hit()}>Hit</Buttons>
            <Buttons onClick = {() => Stand()}>Stand</Buttons>
            </div>}
    </div>
  )

  function startGame(){
        isAlive = true
        let firstIndex = Math.floor(Math.random() * cardSelection.length)
        let newFirst = cardSelection[firstIndex]
        let secondIndex = Math.floor(Math.random() * cardSelection.length)
        let newSecond = cardSelection[secondIndex]
        let StartingHand = [newFirst, newSecond]
        setCard([newFirst, newSecond])
        {StartingHand.map((card => (
            setSum(sumStorage += card.value)
        )))}
        console.log(StartingHand)
  }

    function Hit() {
        let newIndex = Math.floor(Math.random() * cardSelection.length)
        let newCard = cardSelection[newIndex]
        setCard([...cards, newCard])
        setSum(sum + newCard.value)
        localStorage.setItem("card-storage", JSON.stringify([cards]))
        console.log(sum)
    }

    function Stand() {
        {cards.map((card => (
            console.log(card.value)
        )))}
    }

    function Reset() {
        setCard([])
    }
}


