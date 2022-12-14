
import { Heading, Text, useMediaQuery } from '@chakra-ui/react';

export default function CreateSolution () {
    const [isLargerThan767] = useMediaQuery('(min-width: 767px)')

const mainDiv = {
    backgroundColor:"#FBFBFC",
    textAlign:"center",
    paddingLeft:isLargerThan767 ? "30%" : "10%",
    paddingRight:isLargerThan767 ? "30%" : "10%",
    paddingTop:"50px",
    paddingBottom:"70px"
}
    return <div style={mainDiv}>
        
        <Heading lineHeight={isLargerThan767 ? "70px" : "40px"}fontSize={ isLargerThan767 ? "58px" : "30px"} >Create solutions that mirror your business</Heading>
        <Text marginTop={"20px"} fontSize={"20px"}>Move work forward faster with no-code apps that perfectly match your team's agility and scale.</Text>

    </div>
} 