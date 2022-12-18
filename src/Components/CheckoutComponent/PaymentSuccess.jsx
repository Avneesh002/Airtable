import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { useState, useContext } from 'react';
import { AuthContext } from './../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function PaymentSuccess(){
    const {timeVal, setTimeVal} = useContext(AuthContext)

    const [time, setTime] = useState(5);

    const navigate = useNavigate();

   const timer = setInterval(() => {

        setTime(time-1)

        if(time === 0){
            setTimeVal(true)
            navigate("/workplace");
            clearInterval(timer);
        }
    }, 1000)

    return <>

<Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Payment Successful
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    You are getting Redirected to workplace in {time}
  </AlertDescription>
</Alert>
    
    </>
}