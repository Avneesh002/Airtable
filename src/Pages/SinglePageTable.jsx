import BaseSideContent from '../Components/SingleTablePage/SingleSideComponent';
import BaseTools from '../Components/SingleTablePage/SingleTools';
import BaseNav from './../Components/SingleTablePage/SingleNav';
import SingleTable from './../Components/SingleTablePage/SingleTableComponent';
import { Stack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import {useState, useEffect, useContext} from "react"
import { AuthContext } from '../Context/AuthContext';

export default function SinglePage(){

    const {setBaseName, setBaseColor, setContacts, contacts} = useContext(AuthContext);

    

    const [ baseColorNew, setBaseColorNew ] = useState(null);
    const [ baseNameNew, setBaseNameNew ] = useState(null);
    const [idVal, setIdVal] = useState(null);

    const { id } = useParams();
  
    useEffect(() => {
      axios.get(`https://airtable-cioc.onrender.com/api/userdata/${id}`).then((res) => {
        setBaseName(res.data.baseTitle)
        setBaseColor(res.data.baseColor)
        setContacts(res.data.tableData)
        setIdVal(res.data.id)
        })
    }, [id])

    return <>
        <BaseNav idVal={idVal} baseNameNew={baseNameNew} setBaseNameNew={setBaseNameNew} setBaseColorNew={setBaseColorNew}  baseColorNew={baseColorNew} />
        <BaseTools />
            <Stack direction={"row"}>
        <BaseSideContent />
        <SingleTable setContacts={setContacts} setBaseNameNew={setBaseNameNew} contacts={contacts}  />
            </Stack>
    </>
}