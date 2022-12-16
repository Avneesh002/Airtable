import {HiSparkles} from "react-icons/hi"
import { Stack, Text } from '@chakra-ui/react';
import styles from "./SignUpToday.module.css"
export default function SignUpToday(){

    return (<>
    
            <Stack className={styles.banner}  direction={"row"}>
            <HiSparkles color="yellow" />
            <Text letterSpacing={"0.2"} color="white" fontWeight={"500"} fontSize={"19.5px"}>Sign up today and try the Pro plan for free</Text>
            </Stack>
    
    </>)

}
