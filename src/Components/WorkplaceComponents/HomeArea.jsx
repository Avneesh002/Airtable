import {FaPlus} from "react-icons/fa"
import {TbArrowBigTop} from "react-icons/tb"
import {GiScarabBeetle} from "react-icons/gi"
import {AiOutlineThunderbolt} from "react-icons/ai"
import {ImCommand} from "react-icons/im"
import {MdDelete} from "react-icons/md"
import {RiLayoutGridLine} from "react-icons/ri"
import { Text, Stack, Center, HStack, SimpleGrid } from '@chakra-ui/react';
import styles from "./homearea.module.css"
import {useContext, useState, useEffect} from "react";
import { AuthContext } from "../../Context/AuthContext"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";

function EmptyText(){

    return <>

            <Stack align={"center"} direction={"row"}>
            <RiLayoutGridLine />
            <Text fontSize={"13px"}>Bases and interfaces that you have recently opened can be found here. </Text>
            </Stack>    
    </> 
}

function AppendBases({show, setShow}){
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getData = () => {

        return axios.get(`https://airtable-cioc.onrender.com/userdata`).then((res) =>{   setShow(true)
            setData(res.data)})
    }

    const deleteThis = (i) => {
        fetch(`https://airtable-cioc.onrender.com/userdata/${i}`, {
            method:"DELETE"
        })
     
    }
    
    useEffect(() => {

        getData()
        
    }, [deleteThis])


    return <>
    {data && data.map((el) => {
            
            return <Stack key={el.id} className={styles.cards} p={"15px"} bg={"white"} direction={"row"}>
            <Stack onClick={({e}) => {navigate(`/base/${el.id}`)} } _hover={{border:"2px solid black ", cursor:"pointer"}} justify={"center"} align={"center"}  borderRadius={"5px"} opacity={"90%"} h={"80px"} w={"110px"} bg={el.baseColor}>
                <TbArrowBigTop size={"25px"} fill={"white"} color={el.baseColor} />
                   </Stack>
                   <Stack justify={"center"} lineHeight={"16px"} pl={"10px"} direction={"column"}>
                  <Text opacity={"90%"} fontWeight={"500"} fontSize={"15px"}>{el.baseTitle}</Text>
                    <Text fontWeight={"500"} opacity={"70%"} w={"90%"} fontSize={"11px"}>{el.date}</Text>
                    <MdDelete onClick={() => deleteThis(el.id)} />
                          </Stack>
                     </Stack>
                     

    })}
    
    
    </>


}


function BasesFiles(){

    const { base } = useContext(AuthContext);
    

    

    return <>
    

        <div className={styles.baseFiles} >
            
            {base ? <AppendBases /> : <Center mt={"20%"}><EmptyText /></Center>}

        </div>
    
    
    </>
}


export default function HomeArea(){
    const [show, setShow] = useState(false);

    const mainDiv = {
        backgroundColor:"#F9FAFB",
        width:"100%",
        paddingLeft:"370px",
        paddingTop:"40px",
        paddingRight:"40px"
    }
    const divs2 = {
            backgroundColor: "#FCB400",     
    }
    const divs3 = {
        backgroundColor: "#FF08C2"
    }
    const divs4 = {
        backgroundColor: "#F82B60"
    }
    const stackStyle = {
        
        marginTop:"40px",
        padding:"15px",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        borderRadius:"8px",
        paddingTop:"50px",
        paddingBottom:"50px"

    }
    const selectStyles = {
        fontSize:"14px",
        backgroundColor:"transparent",
        color:"gray",
        width:'120px',
        marginRight:"20px",
        
    }

    const mainDiv1 = {
        marginTop:"30px",
        marginBottom:"25px"
    }
    
    return <>
            <div style={mainDiv}>
            <Text fontWeight={"500"} fontSize={"26px"}>Home</Text>
            
            <Stack mt={"30px"} spacing={6} direction={"row"}>

                <NavLink to={"/workbase"}><Stack className={styles.cards} p={"15px"} bg={"white"} direction={"row"}>
                    <Stack _hover={{border:"2px solid #0FAC04", cursor:"pointer"}} justify={"center"} align={"center"} borderRadius={"5px"} opacity={"60%"} h={"80px"} w={"110px"} bg={"green.200"}>
                        <FaPlus size={"20px"} color="#0FAC04" />
                    </Stack>
                    <Stack justify={"center"} lineHeight={"16px"} pl={"10px"} direction={"column"}>
                        <Text fontSize={"15px"}>Start from scratch</Text>
                        <Text opacity={"70%"} w={"90%"} fontSize={"11px"}>Create a new blank base with custom tables, fields and views</Text>
                    </Stack>
                </Stack></NavLink>
                
                <Stack className={styles.cards} p={"15px"} bg={"white"} direction={"row"}>
                    <Stack _hover={{border:"2px solid #0000EE ", cursor:"pointer"}} justify={"center"} align={"center"} borderRadius={"5px"} opacity={"60%"} h={"80px"} w={"110px"} bg={"blue.200"}>
                        <TbArrowBigTop size={"25px"} fill={"#0000EE "} color="#0000EE " />
                    </Stack>
                    <Stack justify={"center"} lineHeight={"16px"} pl={"10px"} direction={"column"}>
                        <Text fontSize={"15px"}>Quickly Upload</Text>
                        <Text opacity={"70%"} w={"90%"} fontSize={"11px"}>Easily migrate your existing projects in just a few minutes.</Text>
                    </Stack>
                </Stack>

                <Stack className={styles.cards} p={"15px"} bg={"white"} direction={"row"}>
                    <Stack _hover={{ cursor:"pointer"}}  align={"center"}>
                        <div className={styles.grids}>
                            <div style={divs2}>
                                <GiScarabBeetle/>
                            </div>
                            <div style={divs2}>
                            <GiScarabBeetle />
                            </div>
                            <div style={divs3}>
                                <AiOutlineThunderbolt />
                            </div>
                            <div style={divs4}><ImCommand />
                            </div>
                        </div>
                    </Stack>
                    
                    <Stack justify={"center"} lineHeight={"16px"} pl={"10px"} direction={"column"}>
                        <Text fontSize={"15px"}>Start with templates</Text>
                        <Text opacity={"70%"} w={"90%"} fontSize={"11px"}>Select a template to get started and customize as you go.</Text>
                    </Stack>
                </Stack>

            </Stack>
            <div style={mainDiv1}>
            <select style={selectStyles} name="" >
                <option>Opened by you</option>
                <option>Shared with you</option>
            </select>
            <select style={selectStyles} name="" >
                <option>Show all types</option>
                <option>Show bases only</option>
                <option>Show interfaces only</option>
            </select>
        </div>
        <SimpleGrid spacing={6} columns={{ base: 1, sm: 2, md: 3}} style={stackStyle}>
            
            <AppendBases setShow={setShow} show={show} />
            </SimpleGrid>
            {/* { show ? <BasesFiles /> :  } */}
            </div>
    </>
}