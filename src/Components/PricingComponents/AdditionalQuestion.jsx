
import { Text, Stack } from '@chakra-ui/react';

export default function AdditionalQuestion(){
    const mainStyle = {
        width:"50%",
        margin:"auto",
        marginBottom:"70px",
        marginTop:"70px",
    }

    return <>

            <div style={mainStyle}>
                <Text textAlign={"center"} fontSize={"28px"} fontWeight={"500"}>Have additional questions?</Text>
                <Stack mt={"30px"} justify={"space-between"} textAlign={"center"} spacing={14} direction={"row"}>
                    <Stack direction={"column"}>
                        <Text fontWeight={"500"} fontSize={"12.8px"} letterSpacing={"1.28px"}>BILLING / PRICE</Text>
                        <Text color={"#054ebb"} fontSize={"19.8px"} letterSpacing={"0.192px"} >Billing FAQ</Text>
                    </Stack>
                    <Stack direction={"column"}>
                        <Text fontWeight={"500"} fontSize={"12.8px"} letterSpacing={"1.28px"}>SPECIAL PLANS FOR</Text>
                        <Text color={"#054ebb"} fontSize={"19.8px"} letterSpacing={"0.192px"} >Nonprofits / Education</Text>
                    </Stack>
                    <Stack direction={"column"}>
                        <Text fontWeight={"500"} fontSize={"12.8px"} letterSpacing={"1.28px"}>ENTERPRISE PLANS</Text>
                        <Text color={"#054ebb"} fontSize={"19.8px"} letterSpacing={"0.192px"} >Contact sales</Text>
                    </Stack>
                </Stack>
            </div>

    
    </> 

}
