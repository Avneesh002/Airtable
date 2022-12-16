import {createContext, useState} from "react";


export const AuthContext = createContext(); 

export default function AuthContextProvider({children}){

    const [isAuth, setIsAuth] = useState(false)
    const [name, setName] = useState("")
    const [base, setBase] = useState(false)
    const [timeVal, setTimeVal] = useState(true)
    
    const logout = () => {
        setIsAuth(false)
        setName("")
    }

    return <AuthContext.Provider value={{timeVal, setTimeVal, setBase, base, setIsAuth, isAuth, logout, setName, name}} >{children}</AuthContext.Provider>

} 
