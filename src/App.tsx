import { useState } from "react";
import { Header } from "./assets/Header";
import { Main } from "./assets/Main";


export default function App (){
  const[betState, setBetState] = useState(false)
  return(
    <div className="flex flex-col gap-3">
      <Header betPlaced={setBetState}/>   {/* // pass betPlaced as a prop to the function that sets the state */}
      <span className="text-center my-5">Wins: Placeholder Losses: Placholder </span>
      <Main betState = {betState}/>
    </div>
  )
}




