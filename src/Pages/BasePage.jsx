import BaseSideContent from "../Components/BaseComponent.jsx/BaseSideComponent"
import BaseNav from "../Components/BaseNav"
import BaseTools from './../Components/BaseComponent.jsx/BaseTools';
import { Stack } from '@chakra-ui/react';
import BaseTable from './../Components/BaseComponent.jsx/BaseTableData';
export default function BasePage(){

    return <>
        <BaseNav />
        <BaseTools />
            <Stack direction={"row"}>
        <BaseSideContent />
        <BaseTable />
            </Stack>
    </>
}