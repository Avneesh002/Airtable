import {createContext, useState, useEffect} from "react";
import data from "../Components/BaseComponent.jsx/mock-data.json"
import axios from "axios"

export const AuthContext = createContext(); 

export default function AuthContextProvider({children}){

    const [isAuth, setIsAuth] = useState(null)
    const [name, setName] = useState("")
    const [base, setBase] = useState(false)
    const [timeVal, setTimeVal] = useState(true)
    const [baseName, setBaseName] = useState(null)
    const [ baseColor, setBaseColor] = useState(null);
    const [contacts, setContacts] = useState(null || data);
    const [createNewBase, setCreateNewBase] = useState(false);
    
    const checkLogin = () => {
        return axios.get(`https://airtable-cioc.onrender.com/isLogged`).then((res) => {setIsAuth(res.data.value)})
    }
    const getData = () => {

    
        return axios.get(`https://airtable-cioc.onrender.com/data`).then((res) => {
        console.log(res.data[0].baseFile[0])

    
        setName(res.data[0].name)
        setBaseName(res.data[0].baseFile[0].baseTitle)
        setBaseColor(res.data[0].baseFile[0].baseColor)
        setContacts(res.data[0].baseFile[0].tableData)
    })

    }
    
    

    useEffect(() => {
    checkLogin()
    getData()        

    }, [createNewBase])
 
    
    const logout = async () => {
        await fetch(`https://airtable-cioc.onrender.com/isLogged`,{
          method:"PATCH",
          body:JSON.stringify({"value":false}),
          headers:{
            "Content-Type": "application/json"
          }
        }).then((res) => res.json()).then((res) => setIsAuth(res.value))
        
    }

    return <AuthContext.Provider value={{setCreateNewBase, createNewBase,timeVal, setTimeVal, setBase, base, setIsAuth, isAuth, logout, setName, name, baseName, setBaseName, baseColor, setBaseColor, contacts, setContacts}} >{children}</AuthContext.Provider>

} 
