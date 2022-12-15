import {createContext, useState} from "react";


export const AuthContext = createContext(); 

export default function AuthContextProvider({children}){

    const [isAuth, setIsAuth] = useState(false)
    
    const logout = () => {
        setIsAuth(false)
    }

    return <AuthContext.Provider value={{setIsAuth, isAuth, logout}} >{children}</AuthContext.Provider>

} 
