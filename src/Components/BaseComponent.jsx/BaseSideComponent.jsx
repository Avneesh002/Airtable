import { Button, Text, Box, Divider, Stack, Highlight, Badge } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import {GrTemplate} from "react-icons/gr"
  import {BsGrid3X3, BsFillKanbanFill} from "react-icons/bs"
  import {HiOutlineShoppingBag, HiSparkles} from "react-icons/hi"
  import {TfiWorld} from "react-icons/tfi"
  import {CiViewTimeline} from "react-icons/ci"
  import {IoIosPaper} from "react-icons/io"
  import {IoNewspaperSharp} from "react-icons/io5"
  import {BsFillCalendarCheckFill, BsFillGrid1X2Fill ,BsFileEarmarkPersonFill} from "react-icons/bs"
  import { RiGalleryFill} from "react-icons/ri"

import { NavLink } from 'react-router-dom';
import Sidebar from './../Sidebar';
import { AddIcon } from '@chakra-ui/icons';

export default function BaseSideContent(){
const mainDiv = {
    backgroundColor: "white",
    padding:"10px",
    width:"21%",
    overflowY:"scroll",
    
}

    return <>
            <div style={mainDiv}>
            <div>
            <Stack borderRadius={"4px"} p={"8px"} bg={"#D0F0FD"} mb={"10px"} align={"center"} direction={"row"}>
            
            <BsGrid3X3 color='#1283DA' fontSize={"16px"}/><Text fontWeight={"500"} fontSize={"13px"}>Grid View</Text>
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
                
            <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
            <h2>
            <AccordionButton>
            <Box opacity={"80%"} mt={"8px"} fontSize={"16px"} fontWeight={"500"} color={"gray.600"} as="span" flex='1' textAlign='left'>
            Create...
            </Box>
            <AccordionIcon />
            </AccordionButton>
             </h2>
            <AccordionPanel fontWeight={"500"} fontSize={"12px"} pb={4}>

            <Stack _hover={{bg:"gray.200", cursor:"pointer"}} p={"8px"} borderRadius={"5px"} justify={"space-between"} direction={"row"}>
                <Stack align={"center"} direction={"row"}><BsFillGrid1X2Fill fontSize={"12px"} color={"#1283da"} /> <Text>Grid</Text></Stack>
                <Stack pt={"4px"} align={"center"}><AddIcon w={"9px"} fontWeight={"extrabold"} /></Stack>
            </Stack>
            
            <Stack _hover={{bg:"gray.200", cursor:"pointer"}} p={"8px"} borderRadius={"5px"} justify={"space-between"} direction={"row"}>
                <Stack align={"center"} direction={"row"}><IoNewspaperSharp fontSize={"14px"} color={"#E929BA"} /> <Text>Form</Text></Stack>
                <Stack pt={"4px"} align={"center"} borderRadius={"4px"}><AddIcon w={"9px"} fontWeight={"extrabold"} /></Stack>
            </Stack>
            
            <Stack _hover={{bg:"gray.200", cursor:"pointer"}} p={"8px"} borderRadius={"5px"} justify={"space-between"} direction={"row"}>
                <Stack align={"center"} direction={"row"}><BsFillCalendarCheckFill fontSize={"12px"} color={"#F5643B"} /> <Text>Calendar</Text></Stack>
                <Stack pt={"4px"} align={"center"} borderRadius={"4px"}><AddIcon w={"9px"} fontWeight={"extrabold"} /></Stack>
            </Stack>
            
            <Stack _hover={{bg:"gray.200", cursor:"pointer"}} p={"8px"} borderRadius={"5px"} justify={"space-between"} direction={"row"}>
                <Stack align={"center"} direction={"row"}><RiGalleryFill fontSize={"14px"} marginLeft={"-15px"} color={"#F5643B"} /> <Text>Gallery</Text></Stack>
                <Stack pt={"4px"} align={"center"} borderRadius={"4px"}><AddIcon w={"9px"} fontWeight={"extrabold"} /></Stack>
            </Stack>
            
            <Stack _hover={{bg:"gray.200", cursor:"pointer"}} p={"8px"} borderRadius={"5px"} justify={"space-between"} direction={"row"}>
                <Stack align={"center"} direction={"row"}><BsFillKanbanFill fontSize={"13px"} color={"#11AF22"} /> <Text>Kanban</Text></Stack>
                <Stack pt={"4px"} align={"center"} borderRadius={"4px"}><AddIcon w={"9px"} fontWeight={"extrabold"} /></Stack>
            </Stack>
            
            <Stack _hover={{bg:"gray.200", cursor:"pointer"}} p={"8px"} borderRadius={"5px"} justify={"space-between"} direction={"row"}>
                <Stack align={"center"} direction={"row"}><IoIosPaper fontSize={"14px"} color={"#E929BA"} /> <Text>Timeline</Text>
                <Badge colorScheme={"twitter"} fontSize={"9px"}>Pro</Badge>
                </Stack>
                <Stack pt={"4px"} align={"center"} borderRadius={"4px"}><AddIcon w={"9px"} fontWeight={"extrabold"}  /></Stack>
            </Stack>
            
            <Stack _hover={{bg:"gray.200", cursor:"pointer"}} p={"8px"} borderRadius={"5px"} justify={"space-between"} direction={"row"}>
                <Stack align={"center"} direction={"row"}><BsFileEarmarkPersonFill fontSize={"14x"} color={"#E929BA"} /> <Text>Gant</Text>
                <Badge colorScheme={"twitter"} fontSize={"9px"}>Pro</Badge>
                </Stack>
                <Stack pt={"4px"} align={"center"} borderRadius={"4px"}><AddIcon w={"9px"} fontWeight={"extrabold"}  /></Stack>
            </Stack>
            
            <Stack _hover={{bg:"gray.200", cursor:"pointer"}} p={"8px"} borderRadius={"5px"} justify={"space-between"} direction={"row"}>
                <Stack align={"center"} direction={"row"}><Text>New Section</Text>
                <Badge colorScheme={"twitter"} fontSize={"9px"}>Pro</Badge>
                </Stack>
                <Stack pt={"4px"} align={"center"} borderRadius={"4px"}><AddIcon w={"9px"} fontWeight={"extrabold"}  /></Stack>
            </Stack>

            </AccordionPanel>
            
            
        </AccordionItem>
        </Accordion>
            </Stack>

        </div >


            </div>


    
    </>
}