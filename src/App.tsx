import { Header } from "./assets/Header";
import { Main } from "./assets/Main";

export default function App (){
  return(
    <div className="flex flex-col gap-3">
      <Header/>
      <span className="text-center my-5">Wins: Placeholder Losses: Placholder </span>
      <Main/>
    </div>


  )
}


