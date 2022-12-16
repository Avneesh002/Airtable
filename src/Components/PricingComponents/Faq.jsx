import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
  } from '@chakra-ui/react'

export default function Faq(){

    return <>
    <Accordion size={"lg"}  w={"53%"} m={"auto"} allowToggle>
    <Text textAlign={"center"} fontWeight={"500"} mb={"20px"} fontSize={"28px"}>Frequently Asked Questions</Text>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" fontSize={"20px"} fontWeight={"500"} flex='1' textAlign='left'>
        How does Airtable's pricing work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"18px"} opacity={"70%"} pb={4}>
    Airtable plans are charged per seat. If you are on Airtable’s Free plan, you can add viewers and commenters to your workspace for free. If you are on a paid Airtable plan, you will be charged for all collaborators who have edit or comment permissions to at least one base in the workspace. No charges will apply for read-only collaborators or people submitting forms. Charges are prorated: collaborators with edit permissions added partway through the month will only be charged for the days they were collaborators.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" fontSize={"20px"} fontWeight={"500"} flex='1' textAlign='left'>
        How does Airtable's Enterprise pricing work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"18px"} opacity={"70%"} pb={4}>
    Upgrades to Airtable Enterprise apply per account within an organization. You will be charged for all collaborators with edit, comment, or read access to at least one base in your organization. An organization has the ability to create unlimited workspaces and bases as part of the enterprise plan. Charges are prorated: collaborators with edit, comment, or read permissions added partway through the billing cycle will only be charged for the months they were collaborators. For more information on our Enterprise plans, contact sales.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" fontSize={"20px"} fontWeight={"500"} flex='1' textAlign='left'>
        Is Airtable free to use?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"18px"} opacity={"70%"} pb={4}>
    Airtable has multiple packages to help teams of all sizes orchestrate their work. Our Free plan is available to teams for no charge and provides the key building blocks to help you build your database. The Free plan is free forever and is formulated for small teams or those with lightweight needs. Our paid plans offer additional power and scale for teams as they grow and their needs get more complex.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" fontSize={"20px"} fontWeight={"500"} flex='1' textAlign='left'>
        How much does Airtable cost?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"18px"} opacity={"70%"} pb={4}>
    Our Free plan is available at no cost for teams just getting started. For teams who like the features of our Free plan but need more storage, our Plus plan is available for $10/user. Our Pro plan costs $20/user and includes the customization and team management features that fast moving teams and organizations need. Our Enterprise plan pricing is custom, based on the organization’s needs and scale with Airtable. To learn more about our Enterprise pricing, contact sales.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" fontSize={"20px"} fontWeight={"500"} flex='1' textAlign='left'>
        What happens when I hit my usage limits?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"18px"} opacity={"70%"} pb={4}>
    Airtable plans are charged per seat. If you are on Airtable’s Free plan, you can add viewers and commenters to your workspace for free. If you are on a paid Airtable plan, you will be charged for all collaborators who have edit or comment permissions to at least one base in the workspace. No charges will apply for read-only collaborators or people submitting forms. Charges are prorated: collaborators with edit permissions added partway through the month will only be charged for the days they were collaborators.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" fontSize={"20px"} fontWeight={"500"} flex='1' textAlign='left'>
        What's an Airtable base?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"18px"} opacity={"70%"} pb={4}>
    Airtable plans are charged per seat. If you are on Airtable’s Free plan, you can add viewers and commenters to your workspace for free. If you are on a paid Airtable plan, you will be charged for all collaborators who have edit or comment permissions to at least one base in the workspace. No charges will apply for read-only collaborators or people submitting forms. Charges are prorated: collaborators with edit permissions added partway through the month will only be charged for the days they were collaborators.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" fontSize={"20px"} fontWeight={"500"} flex='1' textAlign='left'>
        What is revision history?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"18px"} opacity={"70%"} pb={4}>
    Airtable plans are charged per seat. If you are on Airtable’s Free plan, you can add viewers and commenters to your workspace for free. If you are on a paid Airtable plan, you will be charged for all collaborators who have edit or comment permissions to at least one base in the workspace. No charges will apply for read-only collaborators or people submitting forms. Charges are prorated: collaborators with edit permissions added partway through the month will only be charged for the days they were collaborators.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" fontSize={"20px"} fontWeight={"500"} flex='1' textAlign='left'>
        What are the per-base record and attachment limits?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"18px"} opacity={"70%"} pb={4}>
    Airtable plans are charged per seat. If you are on Airtable’s Free plan, you can add viewers and commenters to your workspace for free. If you are on a paid Airtable plan, you will be charged for all collaborators who have edit or comment permissions to at least one base in the workspace. No charges will apply for read-only collaborators or people submitting forms. Charges are prorated: collaborators with edit permissions added partway through the month will only be charged for the days they were collaborators.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" fontSize={"20px"} fontWeight={"500"} flex='1' textAlign='left'>
        What are sync integrations?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize={"18px"} opacity={"70%"} pb={4}>
    Airtable plans are charged per seat. If you are on Airtable’s Free plan, you can add viewers and commenters to your workspace for free. If you are on a paid Airtable plan, you will be charged for all collaborators who have edit or comment permissions to at least one base in the workspace. No charges will apply for read-only collaborators or people submitting forms. Charges are prorated: collaborators with edit permissions added partway through the month will only be charged for the days they were collaborators.
    </AccordionPanel>
  </AccordionItem>

</Accordion>
    
    </>
} 