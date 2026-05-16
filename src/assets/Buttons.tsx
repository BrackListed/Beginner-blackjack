import type { ReactNode } from "react"
import {easeInOut, motion } from "motion/react"

type ButtonProps = {
    children: ReactNode
    onClick?: () => void
    Hit?: () => void
    Stand?: () => void
}

export function Buttons ({children, onClick, Hit, Stand}: ButtonProps) {
    return(
        <motion.button onClick = {onClick || Hit || Stand} className="py-3 px-5 w-fit border-4 rounded-2xl border-purple-700 bg-transparent transition-transform hover:backdrop-brightness-50 hover:cursor-pointer"
        initial={{y: '-100vh', opacity: 0}}
        animate={{y: 0, opacity: 100}}
        transition={{type: "tween", duration: 0.2, ease: easeInOut}}
        whileHover={{
            scale: 1.15,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(128, 0, 128)",
            transition: { duration: 0.1, ease: easeInOut } 
        }}
        >{children}</motion.button>
    )
}