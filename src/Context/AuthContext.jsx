import {createContext, useState} from "react";


export const AuthContext = createContext(); 

export default function AuthContextProvider({children}){

    const [isAuth, setIsAuth] = useState(false)
    const [name, setName] = useState("")
    const [base, setBase] = useState(false)
    
    const logout = () => {
        setIsAuth(false)
        setName("")
    }

    return <AuthContext.Provider value={{setBase, base, setIsAuth, isAuth, logout, setName, name}} >{children}</AuthContext.Provider>

} 
