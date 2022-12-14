import { Button, Skeleton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export default function ConnectEverything(){

const [skel, setSkel] = useState(false);

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
    height:"90vh",
    background:"rgb(235, 247, 252)",
    paddingTop:"50px",
    fontFamily:"sans-serif",
    
}
const div1 = {
width:"50%",
paddingRight:"50px",
paddingLeft:"120px",

}
const div2 ={
    width:"50%",

}
    return <div style={mainDiv} >

        <div style={div1}>
            <Text lineHeight={"65px"}  opacity="99%" fontSize={"6xl"} fontWeight={"bold"}>Connect <br/> everything. <br/> Achieve <br/>anything</Text>
            <Text lineHeight={"32px"} marginTop="6" fontSize={"25px"} opacity="97%" fontWeight={"semibold"}>Accelerate work and unlock potential with powerful apps that connect your data, workflows and teams. This is how.</Text>
            <Button 
            _hover={{
                bg:"blue.900"
            }}
            borderRadius={"10px"} mt={"7"} h={"47px"} bg={"rgb(28, 110, 232)"} color={"white"} fontSize="24px" size={"lg"} variant={"solid"}>Sign up for free</Button>
        </div>
        
        <div style={div2}>
            {skel ? <Skeleton width={"80%"}><video width={"90%"} muted loop autoPlay={true} src="https://videos.ctfassets.net/wl95ljfippl8/4mknj7oTndciGSdFtTDjZq/adcfe61bb0700d98af81f1f47e72a787/Homepage_Brand_Video_May_2022_V2.mp4"></video></Skeleton> : <video width={"90%"} muted loop autoPlay={true} src="https://videos.ctfassets.net/wl95ljfippl8/4mknj7oTndciGSdFtTDjZq/adcfe61bb0700d98af81f1f47e72a787/Homepage_Brand_Video_May_2022_V2.mp4"></video>}
            
        </div>
        

    </div>
}