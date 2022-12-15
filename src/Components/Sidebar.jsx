import { Button,Text, Divider,Link, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import React from "react"
export default function Sidebar({isOpen, onClose, onOpen}) {
  const btnRef = React.useRef()

  const pProp = {
    color:"grey",
    // marginTop:"-5px",
    marginLeft:"22px",

  }
  const hProp = {
    fontSize:"23px",
    paddingTop:"40px",
    marginLeft:"22px",
    fontWeight:"bold"
  }
  const linkText = {
    color:"rgb(32, 65, 165)",
    fontWeight:"600",
    marginLeft:"22px",
    marginTop:"20px"  }

  
  return (
    <>
      {/* <Button ref={btnRef} colorScheme='teal' >
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
        
      >
        <DrawerOverlay 
        bg='none'
        backdropFilter='auto'
        backdropBlur='5px'
        />
        <DrawerContent>
          <DrawerCloseButton />
          
          <Link href='#' style={hProp}>Overview</Link>
          <p style={pProp}>Welcome to Airtable! Here's the basics </p>
          
          <Link href='#' style={hProp}>Features</Link>
          <p style={pProp}>Discover automation, views, reporting, and more </p>
          
          <Link href='#' style={hProp}>Intergration</Link>
          <p style={pProp}> Bring your favourite tools into Airtable </p>
          
          <Link href='#' style={hProp}>Enterprise Overview</Link>
          <p style={pProp}>See how Airtable scale for large and complex organisation </p>
          
          <Link href='#' style={hProp}>Marketplace</Link>
          <p style={pProp}></p>
          
          <Link href='#' style={hProp}>Download Apps</Link>
          <p style={pProp}></p>

          <Link href='#' style={hProp}>Whats new</Link>
          <p style={pProp}></p>
          
          <Link href='#' style={hProp}>Pricing</Link>
          <p style={pProp}>From small business to global enterprise</p>
          <p style ={linkText}>Explore Pricing →</p>
          
        </DrawerContent>
      </Drawer>
    </>
  )
}