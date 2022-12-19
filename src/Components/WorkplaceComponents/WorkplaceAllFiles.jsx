import ContentBox from "./ContentBox";
import HomeArea from './HomeArea';
import { Stack } from '@chakra-ui/react';
import {useContext} from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function WorkplaceAll(){
    const  {setContacts, setCreateNewBase, createNewBase } = useContext(AuthContext);
    const Navigate = useNavigate();
    
    const createBase = () => {
    
    
        setCreateNewBase(!createNewBase);
        Navigate("/workbase")

}
    return <>
    <Stack direction={"row"}>
    <ContentBox createBase={createBase} />
    <HomeArea createBase={createBase} />
    </Stack>
    </>
}
