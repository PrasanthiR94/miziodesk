import { createContext, useContext, useState } from "react";

const MiziContext = createContext({})

export const MiziContextProvider = ({children})=>{

const [userName,setUsername] = useState("")
const [password,setPassword]=useState("")



    return (
        <MiziContext.Provider
        value={{userName,setUsername,password,setPassword }}
        >{children}</MiziContext.Provider>
    )
}

export const useMizi = () => useContext(MiziContext)