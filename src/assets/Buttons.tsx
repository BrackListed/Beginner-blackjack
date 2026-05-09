import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
}

export function Buttons ({children}: ButtonProps) {
    return(
        <button className="py-3 px-5 w-fit border-2 rounded-2xl border-y-amber-200 bg-transparent transition-transform hover:backdrop-brightness-50 hover:cursor-pointer hover:scale-110">{children}</button>
    )
}