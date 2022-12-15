import { Button, Skeleton, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ConnectEverything(){

const [skel, setSkel] = useState(false);

const [isLargerThan767] = useMediaQuery('(min-width: 767px)')

useEffect(() => {
    setSkel(true);

    const timer = setTimeout(() => {

        setSkel(false);
    }, 4000)

    return () => {
        clearTimeout(timer);
    }
}, [])


const mainDiv = {
    display:"flex",
    paddingBottom:"100px",
    background:"rgb(235, 247, 252)",
    paddingTop:"50px",
    fontFamily:"sans-serif",
    flexDirection: isLargerThan767 ? "row" : "column"
    
}
const div1 = {
width: isLargerThan767 ? "44%" : "100%",
paddingRight:"80px",
paddingLeft:"120px",

}
const div2 ={
    width: isLargerThan767 ? "50%" : "100%",
    

}
    return <div style={mainDiv} >

        <div style={div1}>
            <Text lineHeight={"65px"}  opacity="99%" fontSize={isLargerThan767 ? "6xl" : "34px"} fontWeight={"bold"}> Connect  everything. Achieve anything</Text>
            <Text lineHeight={"32px"} marginTop="6" fontSize={isLargerThan767 ? "25px" : "18px"} opacity="97%" fontWeight={"semibold"}>Accelerate work and unlock potential with powerful apps that connect your data, workflows and teams. This is how.</Text>
            <NavLink to="/signup">
            <Button 
            _hover={{
                bg:"blue.900"
            }}
            borderRadius={"10px"} mt={"7"} h={"47px"} bg={"rgb(28, 110, 232)"} color={"white"} fontSize="24px" size={"lg"} variant={"solid"}>Sign up for free</Button>
            </NavLink>
        </div>
        
        <div style={div2}>
            {skel ? <Skeleton width={"80%"}><video width={"90%"} muted loop autoPlay={true} src="https://videos.ctfassets.net/wl95ljfippl8/4mknj7oTndciGSdFtTDjZq/adcfe61bb0700d98af81f1f47e72a787/Homepage_Brand_Video_May_2022_V2.mp4"></video></Skeleton> : <video width={"90%"} muted loop autoPlay={true} src="https://videos.ctfassets.net/wl95ljfippl8/4mknj7oTndciGSdFtTDjZq/adcfe61bb0700d98af81f1f47e72a787/Homepage_Brand_Video_May_2022_V2.mp4"></video>}
            
        </div>
        

    </div>
}