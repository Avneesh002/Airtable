import { ReactNode, useContext, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  useColorMode,
  Center,
  Divider,
  Text,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  
} from '@chakra-ui/react';
import { ChevronDownIcon, EditIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {BiLogOutCircle} from "react-icons/bi"
import {MdOutlineAccountCircle} from "react-icons/md"
import {HiOutlineDatabase} from "react-icons/hi"
import {FaUserSecret} from "react-icons/fa"
import {AiOutlineDatabase} from "react-icons/ai"
import {AiFillBell, AiTwotoneSave} from "react-icons/ai"
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

import React from "react"
import  FocusLock from "react-focus-lock"
import { AuthContext } from './../../Context/AuthContext';


// 1. Create a text input component
const TextInput = () => {

    const {setBaseColor, baseColor, baseName, setBaseName} = useContext(AuthContext);

    return (
      <FormControl>
        <Input value={baseName} onChange={(e) => setBaseName(e.target.value)}/>
      </FormControl>
    )
  }
  
//   2. Create the form
  const Form = ({ firstFieldRef, onCancel, setBaseColor, baseColor, baseName, setBaseName}) => {
    const { onOpen, onClose, isOpen } = useDisclosure()

    const cancelFunc = () => {
        onCancel();
    }


    const gridStyle = {
        
        display:"grid",
        gridTemplateColumns:"repeat(5, 1fr)",
        gap:"5px",
        width:"70%",

    }
    const div1 ={
        // border:"1px solid",
        backgroundColor:"#CE2945",
        height:"35px",
        borderRadius:"50px"
    }
    const div2 ={
        // border:"1px solid",
        backgroundColor:"#F7653B",
        borderRadius:"50px"

    }
    const div3 ={
        // border:"1px solid",
        backgroundColor:"#20D9D2",
        borderRadius:"50px"

    }
    const div4 ={
        // border:"1px solid",
        backgroundColor:"#0198C5",
        borderRadius:"50px"

    }
    const div5 ={
        // border:"1px solid",
        backgroundColor:"#F06ACF",
        borderRadius:"50px"

    }

    const handleSave = () => {
        onCancel()
      // fetch(`http://localhost:3000/userdata`, {
      //       method:"PATCH",
      //       body:JSON.stringify({
      //           baseId: Date.now()+baseName,
      //           title: baseName,
      //           color: baseColor
      //       }),
      //       headers:{
      //           "Content-Type":"application/json"
      //       }
      //   })
    }
    return (
      <Stack spacing={4}>
        <TextInput
          label='baseName'
          ref={firstFieldRef}
        />
            <Text>Appearance</Text>
        <div style={gridStyle}>
            <div onClick={() => setBaseColor("#CE2945")} style={div1}></div>
            <div onClick={() => setBaseColor("#F7653B")} style={div2}></div>
            <div onClick={() => setBaseColor("#20D9D2")} style={div3}></div>
            <div onClick={() => setBaseColor("#0198C5")} style={div4}></div>
            <div onClick={() => setBaseColor("#F06ACF")} style={div5}></div>
        </div>
            
        

        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={cancelFunc}>
            Cancel
          </Button>
          <Button onClick={handleSave} colorScheme='teal'>
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    )
  }
  
  // 3. Create the Popover
  // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
  const PopoverForm = ({baseName, setBaseName, setBaseColor}) => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef = React.useRef(null)
  
    return (
      <>
        <Box fontSize={"25px"} color={"white"} fontWeight={"500"} display='inline-block' mr={3}>
          {baseName}
        </Box>
        <Popover
          isOpen={isOpen}
          initialFocusRef={firstFieldRef}
          onOpen={onOpen}
          onClose={onClose}
          placement='right'
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <IconButton size='sm' icon={<EditIcon />} />
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />
              <PopoverCloseButton />
              <Form setBaseColor={setBaseColor} setBaseName={setBaseName} onCancel={onClose} />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </>
    )
  }



export default function BaseNav({idVal}) {
  const { name, logout, baseColor, setBaseColor, baseName, setBaseName, contacts } = useContext(AuthContext);
  const iconDiv = {
    backgroundColor:"white",
    width:"30px",
    height:"30px",
    borderRadius:"50px",
    marginRight:"10px",
    justifyContent:"center",
    alignItems:"center",

  }
  const Navigate = useNavigate();

  const saveBase = async () => {
    const date = new Date();
    const val = date.toDateString() + ' ' + date.toLocaleTimeString()


    await fetch (`https://airtable-cioc.onrender.com/api/userdata/${idVal}`, {
      method:"PATCH",
      body: JSON.stringify({
          "id": idVal,
          "baseTitle": baseName,
          "baseColor": baseColor,
          "date":val,
          "tableData":contacts
         }),
      headers: { 
          "Content-Type": "application/json"
      }
  }).then((res) => res.json()).then((res) => console.log(res))

    setTimeout(() => {
      Navigate("/workplace")
    }, 1500)
        
  }


  return (
    <>
      <Box pos={"sticky"} zIndex={"10"} top={"0"} bg={baseColor} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
          <Stack align={"center"} direction={"row"}>

{/* Icon change her ------------------------- */}

            <Stack fontSize={"20px"} color={"white"}>
            <AiOutlineDatabase />
            </Stack>
        <PopoverForm setBaseColor={setBaseColor} baseName={baseName} setBaseName={setBaseName} />
        <Button bg={"#FFFFFF"} size={"sm"} borderRadius={"20px"} variant={"solid"}>Data</Button>
          </Stack>

          </Box>
          
          <Flex alignItems={'center'}>
            <Stack _hover={{cursor:"pointer"}} style={iconDiv}>
                
                <AiTwotoneSave onClick={saveBase} color={baseColor} fontSize={"20px"} />
                

            </Stack>
            <Stack _hover={{cursor:"pointer"}} style={iconDiv}>
                
                    <AiFillBell color={baseColor} fontSize={"20px"} />
                

            </Stack>
            <Stack direction={'row'} spacing={7}>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={<FaUserSecret />}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={<FaUserSecret />}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p fontWeight={"500"} fontSize={"18px"}>{name}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Stack>
                  <NavLink to={"/workplace"}><MenuItem><HiOutlineDatabase />Your Bases</MenuItem></NavLink>
                  </Stack>
                  <Stack>
                  <MenuItem><MdOutlineAccountCircle /> Account</MenuItem>
                  </Stack>
                  <Stack>
                    <NavLink to={"/"}><MenuItem onClick={logout}><BiLogOutCircle /> Logout</MenuItem></NavLink>
                  </Stack>
                  
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      <Divider/>
      </Box>
    </>
  );
}