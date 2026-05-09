import { Buttons } from "./Buttons";

export function Main() {
  return (
    <div className="flex flex-col gap-3 text-center items-center">
        <span>Click Start!</span>
        <div id = 'card-container' className="flex mx-auto my-5">Cards: </div>
        <div id = 'sum-container'>Sum: </div>
        <Buttons>Start</Buttons>
        
    </div>
  )
}

