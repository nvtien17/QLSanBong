import { createContext, useState } from "react"

const StateContext = createContext()


function GlobalState({children} ){
    
    const [yard, setYard] = useState()
    const value1 = {
        yard,
        setYard
    }
    return (
        <StateContext.Provider value={value1}>
            {children}
        </StateContext.Provider>
    )
}
export {StateContext, GlobalState}