import { Button, Text, Box, Divider, Stack } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import {GrTemplate} from "react-icons/gr"
  import {IoSparklesSharp} from "react-icons/io"
  import {HiOutlineShoppingBag, HiSparkles} from "react-icons/hi"
  import {TfiWorld} from "react-icons/tfi"
import { NavLink } from 'react-router-dom';
import Sidebar from './../Sidebar';
import axios from 'axios';
import { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import data from "../BaseComponent.jsx/mock-data.json"

export default function ContentBox({createBase}){
const [loading, setLoading] = useState(false);
const Navigate = useNavigate();
const mainDiv = {
    backgroundColor: "white",
    padding:"10px",
    width:"21%",
    position:"fixed",
    
}


    return <>
            <div style={mainDiv}>
            <div>
            <Stack mb={"10px"} align={"start"} direction={"Column"}>
            <Button mb={"5px"} width={"100%"} >Home</Button>
            <Button width={"100%"} variant={"ghost"}>All works</Button>
            </Stack>
            <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
            <h2>
            <AccordionButton>
            <Box mt={"8px"} fontSize={"13px"} fontWeight={"500"} color={"gray.600"} as="span" flex='1' textAlign='left'>
            Starred
            </Box>
            <AccordionIcon />
            </AccordionButton>
        </h2>
            <AccordionPanel color={"gray.500"} letterSpacing={"1px"} fontSize={"10px"} pb={4}>
                You have no Starred items
            </AccordionPanel>
        </AccordionItem>
        </Accordion>
        </div>
        <div>
            <Stack pl={"10px"} mb={"20px"} mt={"200px"}>
                <Stack mb={"10px"} align={"center"} direction={"row"}>
                <HiSparkles color={"#FFCE00"} />
                <Text fontSize={"15px"} fontWeight={"500"}> Upgrade to unlock more power</Text>
                </Stack>
                <Text mb={"10px"} fontSize={"13px"} color={"gray.600"}>More extensions. More automations. More syncs. Even more Airtable for you. </Text>
                <NavLink to={"/pricing"}><Text color={"#347FF9"} fontWeight={"500"} fontSize={"12px"}>Compare plan details</Text></NavLink>
            </Stack >
            <Divider border={"1px"}></Divider>

            <Stack pl={"10px"} mt={"15px"} spacing={15} letterSpacing={"0.39px"} fontSize={"12px"} direction={"column"}>
            
                <Stack direction={"row"} align={"center"}>
                <HiOutlineShoppingBag /><Text>Marketplace</Text>
                </Stack>
                <Stack direction={"row"} align={"center"}>
                <GrTemplate /><Text>Universe</Text>
                </Stack>
                <Stack direction={"row"} align={"center"}>
                <TfiWorld /><Text>Universe</Text>
                </Stack>
                <Button onClick={createBase} _hover={{bg:"blue.700"}} fontSize={"13px"} height={"35px"} width={"100%"} bg={"#347FF9"} color={"white"}>Create a base</Button>
            </Stack>

        </div >


            </div>


    
    </>
}