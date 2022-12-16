
import { useMediaQuery, Stack, Text } from '@chakra-ui/react';
export default function TrustedByTeams(){

    const [isLargerThan767] = useMediaQuery('(min-width: 767px)')

    const mainDiv= {
        backgroundColor : "#FAF5E8",
        paddingLeft : isLargerThan767 ? "18%" : "0",
        paddingRight : isLargerThan767? "18%" : "0",
        paddingTop:"100px"
    }
    const mainDiv2= {
        backgroundColor : "#FAF5E8",
        paddingLeft : isLargerThan767 ? "18%" : "0px",
        paddingRight : isLargerThan767? "18%" : "0",
        paddingTop:"100px",
        display:isLargerThan767 ? "flex" : "block",
        paddingBottom:"50px"

    }
    const imageDiv = {
        width:isLargerThan767 ? "50%" : "100vw",
        paddingLeft:isLargerThan767 ? "0px" : "100px",
    }
    const textDiv = {
        padding:isLargerThan767 ? "50px" : "50",
        backgroundColor: "white",
        width:isLargerThan767 ? "50%" : "100%",

    }
    return <>
        <div style={mainDiv}>

            <Stack align={isLargerThan767 ? "flex-end" : ""}  fontWeight={"600"} justify={isLargerThan767 ? "space-between" : "center"} direction={isLargerThan767 ? "row" : "column"}>
            <Text width={isLargerThan767 ? "33%" : "100%"} fontSize={"xxx-large"}>Trusted by teams from all industries</Text>
            <Text fontSize={"20px"} color={"#1f16e4"} >Read all customer stories →</Text>
            </Stack>
        </div>
        <div  style={mainDiv2}>
            <div style={imageDiv}>
                <img width={isLargerThan767 ? "100%" : "70%"} src="https://static.airtable.com/images/homescreen/homepage-bakerhughes-portrait.jpg" alt="" />
            </div>
            <div style={textDiv}>
                <img width={"40%"} src="https://static.airtable.com/images/homescreen/BakerHughes-logo.png" alt="" />
                
                <Text mt={"30px"} lineHeight={"31px"} fontWeight={"500"} fontSize={"24px"}>“A business transformation is really just a series of smaller changes rolling out one after the other. It's about getting the right information to people when they need it. What started as an Airtable calendar very quickly became the solution that we use to manage everything.”</Text>

                <Text fontSize={"18px"}
                fontWeight={"500"} mt={"30px"}
                letterSpacing={"0.18px"}
                >Stephanie Hartgrove</Text>
                
                <Text fontSize={"18px"} letterSpacing={"0.18px"}>VP of Global Communications, Baker Hughes</Text>
                <Text mt={"50px"} letterSpacing={"0.18px"} color={"#2f55e5"} fontWeight={"500"} fontSize={"18px"} _hover={{
                    cursor:"pointer",
                    color: "#1f25e5"
                }}>Watch video →</Text>
            </div>
        </div>
    
    </>
}