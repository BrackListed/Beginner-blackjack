import { useState, useEffect } from "react";
import { Buttons } from "./Buttons";
import { motion } from "motion/react"

type MainProps = {
    betState: boolean; //receive the prop and declare its type
    betAmount: number;
    playerBalance: number;
    setPlayerBalance: (value: number) => void
    setBetAmount: (value: number) => void
    gameStarted: boolean;
    setGameStarted: (value: boolean) => void
    setBetState: (value: boolean) => void
    winCount: number
    setWin: (value: number) => void
    lossCount: number
    setLoss: (value: number) => void
    cardVisible: boolean
    setCardVisibility: (value: boolean) => void
    hasWon: boolean
    Won: (value: boolean) => void
    hasLost: boolean 
    Lost: (value: boolean) => void
}
export function Main({betState, betAmount, playerBalance, setPlayerBalance, setBetAmount, gameStarted, setGameStarted, setBetState, winCount, setWin, lossCount, setLoss, cardVisible, setCardVisibility, hasWon, Won, hasLost, Lost}: MainProps) {
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

    type Botcards = {
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
    const [hasTied, Tie] = useState(false)
const [cards, setCard] = useState<Card[]>(JSON.parse(localStorage.getItem("card-storage") ?? "null") ?? [])
const [sum, setSum] = useState(parseInt(localStorage.getItem("sum-storage") ?? "0") ?? 0)
const [aceCounter, setAce] = useState(0)
const [botHand, setBotHand] = useState<Botcards[]>(JSON.parse(localStorage.getItem("bot-storage") ?? "null") ?? [])
const [botacecounter, setbotacecounter] = useState(0)
const [clickedStand, setStand] = useState(false)
let [botSum, setBotSum] = useState(0)



useEffect(() => {
    if(gameStarted === true){
        let tempSum = 0
        if(cards.length > 1){
            {cards.map((card =>(
            tempSum += card.value
        )))}
        setSum(tempSum)
        localStorage.setItem("sum-storage", JSON.stringify(tempSum))
        }
    } else{
    }
}, [gameStarted])


useEffect(() => {
    if(sum > 21 && gameStarted === true) {
        setGameStarted(false)
        localStorage.setItem("game-state", JSON.stringify((false)))
        Lost(true)
        const lostBalance = playerBalance - betAmount
        localStorage.setItem("balance-storage", JSON.stringify(lostBalance))
        setPlayerBalance(lostBalance)
        setBetAmount(0)
        setBetState(false)
        const bustLoss = lossCount += 1
        localStorage.setItem("loss-storage", JSON.stringify(bustLoss))
        setLoss(bustLoss)
    } else if(sum === 21 && gameStarted === true){
        setGameStarted(false)
        Won(true)
        localStorage.setItem("game-state", JSON.stringify((false)))
        const wonBalance = playerBalance + (betAmount * 2)
        localStorage.setItem("balance-storage", JSON.stringify(wonBalance))
        setPlayerBalance(wonBalance)
        setBetState(false)
        const blackjackWin = winCount += 1
        localStorage.setItem("win-storage", JSON.stringify(blackjackWin))
        setWin(blackjackWin)
    } 
}, [sum])

  return (
    <div className="flex flex-col gap-3 text-center items-center">
        {hasLost === true && <div className="flex items-center justify-center text-6xl text-red-600 font-extrabold animate-pulse">YOU LOST</div>}
        {hasWon === true && <div className="flex items-center justify-center text-6xl text-green-500 font-extrabold animate-bounce">YOU WON!</div>}
        {hasTied === true && <div className="flex items-center justify-center text-6xl text-yellow-600 font-extrabold animate-bounce">TIE!</div>}
        {gameStarted === false && <span>Add a bet to get started!</span>}
        <div id = 'card-container' className="flex w-screen justify-evenly">
        {cardVisible === true && <motion.div id = "player-container" className="flex flex-col mx-auto my-5 justify-between outline-none border-4 min-w-96 w-fit h-48 p-3 bg-zinc-800 border-gray-500"
        initial={{x: -250, opacity: 0}}
        animate = {{x: 0, opacity: 100}}
        >
            <div className="flex gap-3">
                Cards: 
                <div className="flex gap-3" >
                    {cards.map((card: Card) => (
                        <motion.img src = {card.img} className="w-15 h-auto"
                        initial={{x: -250, opacity:0}}
                        animate={{x: 20, opacity: 20 }}
                        
                        ></motion.img> //learn framer motion and apply it here soon!
                    ))}</div>
            </div>
            <div>Sum: {sum} </div>
        </motion.div>}
        {clickedStand === true && <div id = "bot-container" className="flex flex-col mx-auto my-5 justify-between outline-none border-4 min-w-96 w-fit h-48 p-3 bg-zinc-800 border-gray-500">
            <motion.div className="flex gap-3"
            initial={{x: -250, opacity: 0}}
            animate = {{x: 0, opacity: 100}}
        >
                Bot Cards: 
                {botHand.map((botcards => (
                    <img src = {botcards.img} className="w-15 h-auto"></img>
                 )))}      
            </motion.div>

            <div>Sum: {botSum}</div>
        </div>} 

    </div>
        {gameStarted === false && betState === true? (
            <Buttons onClick = {() => {setGameStarted(true); startGame(cardVisible); setStand(false);}}>Start</Buttons>
        ) : (
            <h1></h1>
        )}
        {gameStarted && <div className="flex flex-col gap-2 items-center">
            <Buttons onClick = {() => Hit()}>Hit</Buttons>
            <Buttons onClick = {() => {Stand(sum); setStand(true)}}>Stand</Buttons>
        </div>}
    </div>
  )
  function startGame(cardVisible: boolean){
    let tempcardvisiblity = cardVisible
    tempcardvisiblity = true
    localStorage.setItem("card-visibility", JSON.stringify(tempcardvisiblity))
    setCardVisibility(true)
        let secondIndex = Math.floor(Math.random() * cardSelection.length)
        let firstIndex = Math.floor(Math.random() * cardSelection.length)
        setGameStarted(true)
        setBotSum(0)
        localStorage.setItem("game-state", JSON.stringify((true)))
        setSum(0)
        Won(false)
        Lost(false)
        Tie(false)
        let sumContainer = 0
        let initialAces = 0
        gameStarted === false
        let newFirst = cardSelection[firstIndex]
        let newSecond = cardSelection[secondIndex]
        if(newFirst.value === 11) initialAces += 1
        if(newSecond.value === 11) initialAces += 1
        setAce(initialAces)
        setCard([newFirst, newSecond])
        let StartingHand = [newFirst, newSecond]
        localStorage.setItem("card-storage", JSON.stringify(StartingHand))
        {StartingHand.map((defaultCards => (
            sumContainer += defaultCards.value
        )))}
        aceChecker(sumContainer, initialAces)
        setBotHand([])
  }

    function Hit() {
        let newIndex = Math.floor(Math.random() * cardSelection.length)
        let newCard = cardSelection[newIndex]
        let nextAceCount = aceCounter
        if(newCard.value === 11){
            nextAceCount += 1
        }
        setAce(nextAceCount)
        setCard([...cards, newCard])
        setSum(sum + newCard.value)
        const newHand = [...cards, newCard]
        localStorage.setItem("card-storage", JSON.stringify(newHand))
        const newSum = sum + newCard.value
        aceChecker(newSum, nextAceCount)
    }

    function Stand(sum: number) {
        let botIndex1 = Math.floor(Math.random() * cardSelection.length)
        let botIndex2=  Math.floor(Math.random() * cardSelection.length)
        let firstBot = cardSelection[botIndex1]
        let secondBot = cardSelection[botIndex2]
        let tempbotcounter = botacecounter
        let botstartinghand = [firstBot, secondBot]
        let botstartingsum = botstartinghand[0].value + botstartinghand[1].value
        while(botstartingsum < 17){
            let botnewindex = Math.floor(Math.random() * cardSelection.length)
            const botnewcard = cardSelection[botnewindex]
            if(botnewcard.value === 11){
                tempbotcounter +=  1
            }
            botstartinghand.push(botnewcard)
            botstartingsum += botnewcard.value
        }
        setBotHand(botstartinghand)
        botAceChecker(botstartingsum, tempbotcounter)
        console.log("Bot Sum: " + botstartingsum)
        console.log("Bot Hand" + botstartinghand)
        if(botstartingsum > 21 && gameStarted === true){
            setGameStarted(false)
            Won(true)
            const botBustBalance = playerBalance + (betAmount * 2)
            setPlayerBalance(botBustBalance)
            localStorage.setItem("balance-storage", JSON.stringify(botBustBalance))
            setBetAmount(0)
            setBetState(false)
            const botBustWin = winCount += 1
            localStorage.setItem("win-storage", JSON.stringify(botBustWin))
            setWin(winCount)
        } else if(botstartingsum > sum && botSum < 21 && gameStarted === true){
            setGameStarted(false)
            Lost(true)
            const standLostBalance = playerBalance - betAmount
            localStorage.setItem("balance-storage", JSON.stringify(standLostBalance))
            setPlayerBalance(standLostBalance)
            setBetAmount(0)
            setBetState(false)
            const botStandLose = lossCount += 1
            localStorage.setItem("loss-storage", JSON.stringify(botStandLose))
            setLoss(botStandLose)
        } else if(botstartingsum < sum && gameStarted === true){
            setGameStarted(false)
            Won(true)
            const standWonBalance = playerBalance + (betAmount * 2)
            localStorage.setItem("balance-storage", JSON.stringify(standWonBalance))
            setPlayerBalance(standWonBalance)
            setBetAmount(0)
            setBetState(false)
            const botStandWin = winCount += 1
            localStorage.setItem("win-storage", JSON.stringify(botStandWin))
            setWin(botStandWin)
        } else if (botstartingsum === sum && gameStarted === true){
            setGameStarted(false)
            Tie(true)
        }
    }


    function botAceChecker(botstartingsum:number, botacecounter:number){
        let tempbotsum = botstartingsum
        let tempbotaces = botacecounter
        while(tempbotaces >= 1 && tempbotsum > 21){
            tempbotsum -= 10
            tempbotaces -= 1
        }
        setBotSum(tempbotsum)
        setbotacecounter(tempbotaces)
    }

    function aceChecker(sum: number, nextAceCount: number){
        let tempSum = sum
        let tempAces = nextAceCount
        while(tempAces >= 1 && tempSum > 21){ 
            tempSum -= 10
            tempAces -= 1
        }
        setSum(tempSum) 
        localStorage.setItem("sum-storage", JSON.stringify(tempSum))
        setAce(tempAces)
    }

}