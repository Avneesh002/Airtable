
import { Text, Badge, Skeleton} from '@chakra-ui/react';
import { Link as routerLink} from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

export default function UniteEverySection(){

    const mainDiv = {
        backgroundColor:"#FAF2F4",
        width:"100%",
        margin:"auto",
        paddingTop:"90px",
        
    }
    const styleDivs = {
        display:"flex",
        width:"75%",
        margin:"auto",
        marginBottom:"180px"
    }
    const vidDivs = {
        margin:"auto",
    }
    const fontDiv = {
        width:"75%",
        paddingTop:"100px",
        paddingRight:"100px"
    }

    const fontDiv2 = {
        paddingTop:"80px",
        paddingLeft:"100px",
        width:"42%",
        textAlign:"left",

    }
    const fontDiv3 = {
        paddingRight:"90px",
        width:"42%",
        lineHeight:"50px"

    }
    
    const fontDiv4 = {
        width:"60%",
        paddingLeft:"155px",


    }

    const imgDiv = {
        width:"80%",
        margin:"auto",
        marginTop:"-110px"
    }

    return <div style={mainDiv}>
        <div style={styleDivs}>
                <div style={fontDiv}>
                    <Text lineHeight={"52px"} fontWeight={"500"} fontSize={"48px"}>Unite every stream of work</Text>
                    <Text marginTop="20px" letterSpacing={"0.18px"} lineHeight={"25px"} fontSize={"19px"}>Create a single source of truth that’s tailored precisely to how your teams work. Include everything you need, nothing you don’t.</Text>
                    <Text marginTop="50px" fontSize={"21px"} fontWeight="semibold" color={"#2f53d5"}>Explore the product →</Text>
                </div>
                
                <div style={vidDivs}>

                    <video autoPlay={true} loop muted height={"500px"} width={"100%"} src="https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4"></video>
                </div>
                
        </div>

        <div style={styleDivs}>

                <div style={vidDivs}>
                    <video autoPlay={true} loop muted height={"500px"} width={"671px"} src="https://static.airtable.com/images/homescreen/Homepage_Anim_03_TurnInformation_FINAL.mp4"></video>
                </div>
                <div style={fontDiv2}>
                    <Badge variant={"subtle"}  width={"50px"} height={"25px"} borderRadius="50" fontSize={""} color="white" textAlign={"center"} backgroundColor={"#6B1CB0"}>
                        NEW
                    </Badge>
                    <Text lineHeight={"52px"} fontWeight={"500"} fontSize={"48px"}>Interface with work in a new way</Text>
                    <Text marginTop="20px" letterSpacing={"0.18px"} lineHeight={"25px"} fontSize={"19px"}>Create custom interfaces that give each and every teammate the relevant information they need, and a simple way to take action.</Text>
                    <Text marginTop="50px" fontSize={"21px"} fontWeight="semibold" color={"#2f53d5"}>Learn more about Interface Designer  →</Text>
                </div>
        </div>
        
        <div style={styleDivs}>

            <div style={fontDiv3}>
                <Text fontSize="49px" fontWeight="600">Bring all your data together</Text>
            </div>
            <div style={fontDiv4}>
                <Text fontSize={"20px"} letterSpacing="-0.5px" >All your information. Always up to date. At your fingertips. Keep everything in sync across your organization.</Text>
                <Text marginTop="50px" fontSize={"21px"} fontWeight="semibold" color={"#2f53d5"}>Learn about Sync →</Text>
            </div>


        </div>

        <div style={imgDiv}>
            <img width="97%" src="https://static.airtable.com/images/homescreen/homepage-sync.jpg" alt="" />
        </div>
    </div>
}
