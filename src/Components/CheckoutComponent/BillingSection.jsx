import { Divider, List, ListIcon, ListItem, Stack } from "@chakra-ui/layout"
import {HiSparkles} from "react-icons/hi"
import {FaUserAlt} from "react-icons/fa"
import {MdCheckCircle} from "react-icons/md"
import {RiSecurePaymentLine} from "react-icons/ri"
import { Input, PinInput, PinInputField, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from "../../Context/AuthContext"

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
    const [disc, setDisc] = useState(11)
   
    const {timeVal, setTimeVal} = useContext(AuthContext)

    const navigate = useNavigate();

    
   const cancelFunc = () => {

    navigate("/")

   }
   
   return <>

        <Stack spacing={4} direction={"row"} w={"50%"} pt={"80px"} pl={"18%"}>
            {/* for billing area - left side*/}
            <Stack mb={"20px"}>
            <Stack direction={"row"} align={"center"}>
            <HiSparkles color={"#FFCE00"} />
            <Text opacity={"70%"} fontWeight={"500"} fontSize={"22px"}>Checkout</Text>
            </Stack>
            <Text opacity={"70%"} fontWeight={"500"} fontSize={"22px"}>You've selected the pro plan, billed  <SelectMonth setBill={setBill} /> at ${bill == 120 ? bill + " per user per year, or $23 per user per month." : bill + " per user"} </Text>

            <Stack pt={"20px"} opacity={"80%"} w={"80%"} direction={"row"} fontSize={"15px"} justify={"space-between"}>

                <Stack align={"center"} direction={"row"}>
                    <Text>1 User</Text><FaUserAlt />
                </Stack>
                
                <Stack direction={"row"}>
                    <Text fontWeight={"500"}>${bill == 120 ? bill + " per year" : bill + " per month"} </Text>
                </Stack>
            </Stack>
            
            <Stack opacity={"80%"} w={"80%"} direction={"row"} fontSize={"15px"} justify={"space-between"}>

                <Stack align={"center"} direction={"row"}>
                    <Text>Annual plan savings</Text>
                </Stack>
                
                <Stack direction={"row"}>
                    <Text color={"green"} fontWeight={"500"}>-${bill == 120 ? disc : 0 }</Text>
                </Stack>
            </Stack>
            
            <Stack opacity={"80%"} w={"80%"} direction={"row"} fontSize={"15px"} justify={"space-between"}>

                <Stack align={"center"} direction={"row"}>
                    <Text fontWeight={"500"}>Subtotal</Text>
                </Stack>
                
                <Stack direction={"row"}>
                    <Text fontWeight={"500"}>${ bill === 120 ? bill - disc : bill}</Text>
                </Stack>
            </Stack>

            <Stack pb={"25px"} opacity={"80%"} w={"80%"} direction={"row"} fontSize={"15px"} justify={"space-between"}>

                <Stack align={"center"} direction={"row"}>
                    <Text fontWeight={"500"}>Enter your payment details</Text>
                </Stack>
                
                <Stack align={"center"} direction={"row"}>
                    <Text opacity={"60%"} fontSize={"12px"} fontWeight={"500"}>Secure form</Text><RiSecurePaymentLine />
                </Stack>
            </Stack>

            <Input w={"80%"} type={"number"} placeholder={" Enter Your Card Number"} />
            <Stack align={"center"} direction={"row"}>
            

            <Input w={"10%"} type={"number"} placeholder={"M"} />
            <Input w={"15%"} type={"number"} placeholder={"Year"} />
            <Input w={"20%"} type={"number"} placeholder={"CVV"} />
            </Stack>
            
            <Stack pt={"30px"} direction={"row"}>
            <Button onClick={() => setTimeVal(false)} colorScheme={"messenger"} w={"30%"}>Upgrade</Button>
            <Button onClick={cancelFunc} variant={"link"} fontSize={"14px"} w={"20%"}>Cancel</Button>
            </Stack>
            </Stack>            

        </Stack>
        
        <Stack  right={"220px"} top={"190px"} pos={"fixed"} h={"300px"} width={"300px"} p={"12px"} pt={"30px"} bg={"#EBD6BB"}>
            <Text opacity={"80%"} fontWeight={"500"}>Great choice! With Plus, you'll get</Text>
    <List fontWeight={"500"} opacity={"80%"} pl={"15px"} pt={"20px"} fontSize={"14px"} spacing={1}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    3 extensions per base
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    3 sync integrations
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    5,000 records per base
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    5GB of attachments per base
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Custom branded forms
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    6-month revision & snapshot history
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Automatic table syncing
  </ListItem>
  
</List>
        
        </Stack>
   
   </> 
}