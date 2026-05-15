import { useState } from "react";
import { Header } from "./assets/Header";
import { Main } from "./assets/Main";



export default function App (){
  const[betState, setBetState] = useState(false)
  const [playerBalance, setBalance] = useState(parseInt(localStorage.getItem('balance-storage') ?? "0") ?? 0)
  const [betAmount, setBetAmount] = useState(parseInt(localStorage.getItem('bet-storage') ?? "0") ?? 0)
  const [gameStarted, setGameStarted] = useState(JSON.parse(localStorage.getItem("game-state") ?? "false"))
  return(
    <div className="flex flex-col gap-3">
      <Header 
      betAmount={betAmount}
      betPlaced={setBetState} /* // pass betPlaced as a prop to the function that sets the state */
      playerBalance={playerBalance} //this is able to set states!
      setPlayerBalance={setBalance}
      setBetAmount={setBetAmount}
      gameStarted = {gameStarted}
      />   
      <span className="text-center my-5">Wins: Placeholder Losses: Placholder </span>
      <Main 
      betState = {betState}
      betAmount = {betAmount} //original item!
      playerBalance = {playerBalance}
      setPlayerBalance={setBalance}
      setBetAmount = {setBetAmount} 
      gameStarted = {gameStarted}
      setGameStarted = {setGameStarted}
      />
    </div>
    
  )
}



