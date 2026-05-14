import { useState } from "react";
import { Buttons } from "./Buttons";

export function Header(){
  let [userBalance, setBalance] = useState(parseInt(localStorage.getItem('balance-storage') ?? "0") ?? 0)
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
            <label htmlFor = "bet-input">Bet: 
                <input id = "bet-input" type = "text" className="mx-2 outline-none focus-visible:ring-1 focus-visible:ring-amber-300 w-44 rounded-lg gap-2 bg-black/40 px-2 py-1 hover:cursor-pointer transition-transform hover:scale-105"></input>
            </label>
            <span>Player Bet: </span>
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

}