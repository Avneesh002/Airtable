import {createContext, useState} from "react";


export const AuthContext = createContext(); 

export default function AuthContextProvider({children}){

    const [isAuth, setIsAuth] = useState(false)
    const [name, setName] = useState("")
    const [base, setBase] = useState(false)
    const [timeVal, setTimeVal] = useState(true)
    const [baseName, setBaseName] = useState("Untitled base")
     const [ baseColor, setBaseColor] = useState("#0F9D1F")
     
    
    const logout = () => {
        setIsAuth(false)
        setName("")
    }

    return <AuthContext.Provider value={{timeVal, setTimeVal, setBase, base, setIsAuth, isAuth, logout, setName, name, baseName, setBaseName, baseColor, setBaseColor}} >{children}</AuthContext.Provider>

} 
