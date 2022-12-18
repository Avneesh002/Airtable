
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Stack, Button, Divider, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import {RxDividerVertical} from "react-icons/rx"
import {AiFillEyeInvisible} from "react-icons/ai"
import {TiGroup} from "react-icons/ti"
import {FaShareAltSquare} from "react-icons/fa"
import {IoMdColorFill} from "react-icons/io"
import {BiFilter, BiSort} from "react-icons/bi"
import {BsGrid1X2Fill, BsPeopleFill} from "react-icons/bs"

export default function BaseTools(){

    const toolsBody= {
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
    width:"100%",
    position:"sticky",
    padding:"5px",
    zIndex:"3",
    top:"65px",
    backgroundColor:"white"
}

    return <>
    
        <Stack align={"center"} style={toolsBody} direction={"row"}>

        <Button textAlign={"center"} w={"80px"} h={"30px"} fontSize={"14px"}><HamburgerIcon pt={"2px"} mr={"5px"} /> Views</Button>

        <RxDividerVertical opacity={"30%"} fontSize={"25px"}/>
        
        
        <Menu>
        <MenuButton h={"30px"} bg={"white"} as={Button} rightIcon={<ChevronDownIcon />}>
        <Stack opacity={"80%"} align={"center"} direction={"row"}>
        <BsGrid1X2Fill color='#82BAE6' />
            <Text  fontSize={"13px"}>Grid View</Text>
            <BsPeopleFill opacity={"60%"} />
        </Stack>
        </MenuButton>
        <MenuList>
            <MenuItem>Collaborative View</MenuItem>          
        </MenuList>
        </Menu>
        
        <Stack h={"30px"}  bg={"transparent"} as={Button} opacity={"70%"} align={"center"} direction={"row"} >
            
            <AiFillEyeInvisible /><Text fontSize={"13px"}>Hide fields</Text>
            
        </Stack>
        
        <Stack h={"30px"}  bg={"transparent"} as={Button} opacity={"70%"} align={"center"} direction={"row"} >
            
            <BiFilter /><Text fontSize={"13px"}>Filter</Text>
            
        </Stack>
        
        <Stack h={"30px"}  bg={"transparent"} as={Button} opacity={"70%"} align={"center"} direction={"row"} >
            
            <TiGroup /><Text fontSize={"13px"}>Group</Text>
            
        </Stack>
        
        <Stack h={"30px"}  bg={"transparent"} as={Button} opacity={"70%"} align={"center"} direction={"row"} >
            
            <BiSort fontSize={"14px"}/><Text fontSize={"13px"}>Sort</Text>
            
        </Stack>
        
        <Stack h={"30px"}  bg={"transparent"} as={Button} opacity={"70%"} align={"center"} direction={"row"} >
            
            <IoMdColorFill fontSize={"15px"}/><Text fontSize={"13px"}>Color</Text>
            
        </Stack>
        
        <Stack h={"30px"}  bg={"transparent"} as={Button} opacity={"70%"} align={"center"} direction={"row"} >
            
            <FaShareAltSquare fontSize={"15px"}/><Text fontSize={"13px"}>Share view</Text>
            
        </Stack>
        
        
        </Stack>


    </>
}