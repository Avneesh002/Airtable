
import { useMediaQuery, Button, HStack, Stack, Divider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import {SiFacebook, SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si"
import { NavLink } from 'react-router-dom';


export default function NoCredSection(){

    const [isLargerThan767] = useMediaQuery('(min-width: 767px)')
    
    const mainDiv = {
        backgroundColor:"white",
        paddingLeft:isLargerThan767 ? "25%" : "20px",
        paddingRight:isLargerThan767 ? "30%" : "",
        textAlign:"center",
        paddingTop:"100px",
    }
    const navStyle = {
        marginLeft:"30px",
        fontSize:"15px",
        fontWeight:"500",
        
    }

    return <>
        <div style={mainDiv}>

                <Text mb={"50px"} lineHeight={isLargerThan767 ? "70px" : "40px"} fontSize={isLargerThan767 ? "64px" : "30px"} fontWeight={"500"} >300,000+ innovative companies use Airtable every day. Join them.</Text>
                <NavLink to="/signup"><Button borderRadius={"12px"} h={"50px"} fontWeight={"500"} fontSize={"24px"} _hover={{bg:"#2750ae"}} variant={"solid"} color={"white"} backgroundColor={"#2750fd"}>Sign up for free</Button></NavLink>
                <Text mt={"20px"} letterSpacing={"0.18px"} fontWeight={"500"} fontSize={"18px"}>No credit Card needed</Text>
        </div>
        <div>
            <Stack mb={"40px"} mt={"40px"} paddingLeft={"20px"} paddingRight={"20px"} justify={"space-between"} align={"center"} direction={isLargerThan767 ? "row" : "column"}>
                <Stack align={"center"} direction={"row"}>
                    <img  width={"55px"} src="data:image/png;base64,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" alt="" />
                    <Text _hover={{cursor:"pointer"}} style={navStyle}>Product</Text>
                    <Text _hover={{cursor:"pointer"}} style={navStyle}>Solutions</Text>
                    <Text _hover={{cursor:"pointer"}} style={navStyle}>Pricing</Text>
                    <Text _hover={{cursor:"pointer"}} style={navStyle}>Enterprise</Text>
                    <Text _hover={{cursor:"pointer"}} style={navStyle}>Contact Sales</Text>
                </Stack>
                <Stack spacing={"5"} opacity={"50%"} direction={"row"}>
                <SiFacebook/>
                <SiLinkedin />
                <SiTwitter />
                <SiInstagram />
                <SiYoutube/>
                </Stack>
            </Stack>
                <Divider border={"1px solid"} w={"97%"} m={"auto"} />
        </div>
    </>

} 