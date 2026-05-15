import { useRef, useState } from "react";
import { Buttons } from "./Buttons";

type HeaderProps = {
  betPlaced: (value: boolean) => void //pass betPlaced as a prop
}
export function Header({betPlaced}: HeaderProps){
      console.log(betPlaced)
  let [userBalance, setBalance] = useState(parseInt(localStorage.getItem('balance-storage') ?? "0") ?? 0)
  const [betError, setBetError] = useState(false)
  const [userBet, setBet] = useState(0)
  const betInput = useRef<HTMLInputElement>(null)
  return(
    <div className="flex flex-col  gap-5">
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
            <span>Balance: {userBalance} </span>
            <div className="flex gap-2 items-center">
              <label htmlFor = "bet-input">Bet: 
                <input ref = {betInput} id = "bet-input" type = "text" className="mx-2 outline-none focus-visible:ring-1 focus-visible:ring-amber-300 w-44 rounded-lg gap-2 bg-black/40 px-2 py-1 hover:cursor-pointer transition-transform hover:scale-105"></input>
              </label>
              <Buttons onClick={() => betCheck(Number(betInput.current?.value))}>BET</Buttons>
            </div>
            {betError && <h1>Needed Balance: {Number(betInput.current?.value) - userBalance}</h1>}
            {betError === false && <h1>Current Bet: {userBet}</h1>}
        </div>
        
      </div>
    </div>
  )

  function increaseBalance(bal: number){
    setBalance((oldBalance) => {
      const newBalance = oldBalance += bal
      localStorage.setItem("balance=-storage", JSON.stringify(newBalance))
      return newBalance
    })
  }

  function betCheck(amount: number){
    if(Number(amount) > userBalance || amount <= 0){
      setBetError(true)
      betPlaced(false)
    } else{
      setBetError(false)
      setBet(amount)
      betPlaced(true)
    }

  }
}