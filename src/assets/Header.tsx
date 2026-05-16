import { useRef, useState } from "react";
import { Buttons } from "./Buttons";


type HeaderProps = {
  betPlaced: (value: boolean) => void; //pass betPlaced as a prop
  betAmount: number;
  playerBalance: number;
  setPlayerBalance: (value: number) => void;
  setBetAmount: (value: number) => void;
  gameStarted: boolean
  cardVisible: boolean
  setCardVisibility: (value: boolean) => void
  Won: (value: boolean) => void
  Lost: (value: boolean) => void
  setStand: (value: boolean) => void
}
export function Header({betPlaced, betAmount, playerBalance, setPlayerBalance, setBetAmount, gameStarted, setCardVisibility, Won, Lost, setStand}: HeaderProps){
  const [betError, setBetError] = useState(false)
  const betInput = useRef<HTMLInputElement>(null)
  return(
    <div className="flex flex-col">
      <h1 className="my-6 mx-auto text-4xl font-extrabold">SIMPLE BLACKJACK GAME</h1>
      <div id = "money-container" className="flex gap-5">

        <div id = "left" className="flex flex-col gap-3">
            <Buttons onClick={() => increaseBalance(100)}>CLICK TO INCREASE BALANCE</Buttons>
            <div className="flex gap-3 justify-center">
                <Buttons onClick={() => increaseBalance(1)}>+1</Buttons>
                <Buttons onClick={() => increaseBalance(5)}>+5</Buttons>
                <Buttons onClick={() => increaseBalance(10)}>+10</Buttons>
            </div>
        </div>
        <div id = "right" className="flex flex-col gap-2">
            <span>Balance: {playerBalance} </span>
            <div className="flex gap-2 items-center">
              <label htmlFor = "bet-input">Bet: 
                <input ref = {betInput} id = "bet-input" type = "text" className="mx-2 outline-none focus-visible:ring-1 focus-visible:ring-amber-300 w-44 rounded-lg gap-2 bg-black/40 px-2 py-1 hover:cursor-pointer transition-transform hover:scale-105"></input>
              </label>
              {gameStarted === false && <Buttons onClick={() => betCheck(Number(betInput.current?.value), playerBalance)}>BET</Buttons>}
            </div>
            {betError && <h1>Needed Balance: {Number(betInput.current?.value) - playerBalance}</h1>}
            {betError === false && <h1>Current Bet: {betAmount}</h1>}
        </div>
        
      </div>
    </div>
  )

  function increaseBalance(bal: number){
      const newBalance = playerBalance += bal
      localStorage.setItem("balance-storage", JSON.stringify(newBalance)) 
      setPlayerBalance(newBalance)
    }

  function betCheck(amount: number, playerBalance: number){
    if(Number(amount) > playerBalance || amount <= 0){
      setBetError(true)
      betPlaced(false)
    } else{
      Won(false)
      Lost(false)
      setBetError(false)
      setBetAmount(amount)
      betPlaced(true)
      localStorage.setItem("bet-storage", JSON.stringify(amount))
      setBetAmount(amount)
      setCardVisibility(false)
      setStand(false)
    }

  }
}