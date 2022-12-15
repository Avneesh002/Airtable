
import { Text } from '@chakra-ui/react';

export default function PerfectPlan(){

    const divStyle = {
        backgroundColor:"white",
        paddingLeft:"32%",
        paddingRight:"33%",
        textAlign:"center",
        fontWeight:"600",
        lineHeight:"50px",
        paddingTop:"30px",
        letterSpacing:"0.448px"


    }

    return (<>

            <div style={divStyle}>
            <Text fontSize={"44px"}>Choose the perfect plan for your team’s needs</Text>    
            </div>    
    
        </>)
}