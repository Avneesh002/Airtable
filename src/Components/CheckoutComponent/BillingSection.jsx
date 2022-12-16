import { Stack } from "@chakra-ui/layout"
import {HiSparkles} from "react-icons/hi"
import { Text } from '@chakra-ui/react';
import { useState } from "react";

function SelectMonth({setBill}){

    const styles = {
            // border:"2px solid gray",
            padding:"3px",
            borderRadius:"5px",
            backgroundColor:"rgb(227, 196, 157)"
    }

    return <>
        <select onChange={(e) => setBill(Number(e.target.value))} style={styles} name="select" >
            <option value="120">Annually</option>
            <option value="23">Monthly</option>
        </select>
    
    </>
}


export default function BillingSection(){

    const [bill, setBill] = useState(120)
   return <>

        <Stack w={"50%"} pt={"80px"} pl={"18%"}>
            {/* for billing area - left side*/}
            <Stack mb={"20px"}>
            <Stack direction={"row"} align={"center"}>
            <HiSparkles color={"#FFCE00"} />
            <Text opacity={"70%"} fontWeight={"500"} fontSize={"22px"}>Checkout</Text>
            </Stack>
            <Text opacity={"70%"} fontWeight={"500"} fontSize={"22px"}>You've selected the pro plan, billed  <SelectMonth setBill={setBill} /> at ${bill} per user per year, or $10 per user per month.</Text>

            <Stack>
            <Stack>
                <Text></Text>
            </Stack>



            </Stack>



            </Stack>
            {/* for pros of this billing - right side */}


        </Stack>
   
   
   </> 
}