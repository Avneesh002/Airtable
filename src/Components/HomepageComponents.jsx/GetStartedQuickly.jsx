import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import { Text, useMediaQuery, HStack, Button, Stack } from '@chakra-ui/react';
export default function  GetStartedQuickly(){

    const [isLargerThan767] = useMediaQuery('(min-width: 767px)')

const mainDiv ={
    backgroundColor:"#FBFBFC",
    width: isLargerThan767 ? "100%" : "100%",
    display:isLargerThan767 ? "flex" : "block",
    margin:"auto",
    paddingTop:"100px",
    paddingLeft: isLargerThan767 ? "12%" : "0",
    paddingRight: isLargerThan767? "12%" : "0",
    
}
const HeadingResponsive = {
    fontSize: isLargerThan767 ? "48px" : "32px",
    fontWeight: "500",
    lineHeight: isLargerThan767 ? "50px" :"40px",
}
const textResponsive = {
    fontSize:"20px",
    fontWeight:"semibold",
    lineHeight:"25px",
    marginTop:"25px"
}

const fontDiv = {
    width:isLargerThan767 ? "30.5%" : "100%",
    margin:"auto"
}
const vdoDiv = {
paddingLeft : isLargerThan767 ? "100px" : "0",
marginAuto:"auto",
width:isLargerThan767 ? "70%" : "100%"

}

const vdoDiv2 = {
    paddingRight : isLargerThan767 ? "120px" : "0",
    marginAuto:"auto",
    width:isLargerThan767 ? "70%" : "100%"
    
    }

return <>
<div style={mainDiv}>

   <div style={fontDiv}>
    <Text style={HeadingResponsive} >Get started quickly</Text>
    <Text style={textResponsive}>Begin building on day one. Airtable’s pre-made templates and intuitive design help you tackle even your most complex needs, right away.</Text>
   </div>
   <div style={vdoDiv}>
   <Tabs colorScheme={"messenger"} size={"lg"} isLazy>
  <TabList>
    <Tab>See Value fast</Tab>
    <Tab>Gain perspective</Tab>
    <Tab>Use templates</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <video loop muted autoPlay={true} border={"1px solid red"} width={"100%"} src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_SeeValueFast_FINAL.mp4"></video>
    <Stack justify={"space-between"} direction={isLargerThan767 ? "row" : "column"} mt={"20px"}>
        <Text fontSize={"17px"} width={"60%"} >Anyone can build a simple solution quickly, for any workflow.</Text>
        <Button border={"2px solid black"} variant={"outline"}>Learn about solutions</Button>
    </Stack>
    </TabPanel>


    <TabPanel>
      <video loop muted autoPlay={true} border={"1px solid red"} width={"100%"} src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_GainPerspective_FINAL.mp4"></video>
    <Stack justify={"space-between"} direction={isLargerThan767 ? "row" : "column"} mt={"20px"}>
        <Text fontSize={"17px"} width={"60%"} >Let your team see work in new ways—or create a View just for yourself.</Text>
        <Button border={"2px solid black"} variant={"outline"}>More about views</Button>
    </Stack>
    </TabPanel>


    <TabPanel>
    <video loop muted autoPlay={true} border={"1px solid red"} width={"100%"} src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_Templates_FINAL.mp4"></video>
    <Stack justify={"space-between"} direction={isLargerThan767 ? "row" : "column"} mt={"20px"}>
        <Text fontSize={"17px"} width={"60%"} >Not sure where to begin? We’ve got you covered with a library of templates pre-built for popular use cases..</Text>
        <Button border={"2px solid black"} variant={"outline"}>Explore templates</Button>
    </Stack>
    </TabPanel>
  </TabPanels>
</Tabs>
   </div>

</div>
   
   {/* 2nd Part of Get started quickly */}
   <div style={mainDiv}>

<div style={vdoDiv2}>
<Tabs colorScheme={"messenger"} size={"lg"} isLazy>
<TabList>
 <Tab>Expand toolkits</Tab>
 <Tab>Develop solutions</Tab>
 <Tab>Get expert support</Tab>
</TabList>
<TabPanels>
 <TabPanel>
   <img width={"100%"} src="https://static.airtable.com/images/homescreen/homepage-apps-dashboard.jpg"></img>
 <Stack justify={"space-between"} direction={isLargerThan767 ? "row" : "column"} mt={"20px"}>
     <Text fontSize={"17px"} width={"60%"} >Take work to the next level with pre-built extensions.</Text>
     <Button border={"2px solid black"} variant={"outline"}>Explore Marketplace</Button>
 </Stack>
 </TabPanel>


 <TabPanel>
   <img width={"100%"} src="https://static.airtable.com/images/homescreen/homepage-run-code.jpg"></img>
 <Stack justify={"space-between"} direction={isLargerThan767 ? "row" : "column"} mt={"20px"}>
     <Text fontSize={"17px"} width={"60%"} >Create custom solutions with easy to use APIs and low-code scripting tools.</Text>
     <Button border={"2px solid black"} variant={"outline"}>Learn More</Button>
 </Stack>
 </TabPanel>


 <TabPanel>
 <img width={"100%"} src="https://static.airtable.com/images/homescreen/homepage-getsupport.jpg"></img>
 <Stack justify={"space-between"} direction={isLargerThan767 ? "row" : "column"} mt={"20px"}>
     <Text fontSize={"17px"} width={"60%"} >Accelerate team success with our professional services.</Text>
     <Button border={"2px solid black"} variant={"outline"}>Explore Enterprise Service</Button>
 </Stack>
 </TabPanel>
</TabPanels>
</Tabs>
</div>
<div style={fontDiv}>
 <Text style={HeadingResponsive} >Transform how teams work at scale</Text>
 <Text style={textResponsive}>Discover deep integrations, advanced extensibility, expert support—everything your organization needs to reach new heights.</Text>
</div>

</div>
</>


}