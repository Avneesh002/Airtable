import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    useMediaQuery
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';

  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    const [isLargerThan767] = useMediaQuery('(min-width: 767px)')
    return (
      <Box
        bg={useColorModeValue('white', 'white')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={14}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4, lg:5}} spacing={9}>
            <Stack align={'flex-start'}>
              <ListHeader>Popular Template</ListHeader>
              <Link href={'#'}>Content Calender</Link>
                <Link href={'#'}>Product Roadmap</Link>
                
              <Link href={'#'}>Inventory Tracking</Link>
              <Link href={'#'}>Marketing Campaign Tracking</Link>
              <Link href={'#'}>Event Planning</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Popular Extension</ListHeader>
              <Link href={'#'}>Miro</Link>
              <Link href={'#'}>Jira</Link>
              <Link href={'#'}>Clearbit</Link>
              <Link href={'#'}>Loom</Link>
              <Link href={'#'}>Formstack</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Popular Solutions</ListHeader>
              <Link href={'#'}>Marketing</Link>
              <Link href={'#'}>Product Operations</Link>
              <Link href={'#'}>Human Resources</Link>
              <Link href={'#'}>Sales</Link>
              <Link href={'#'}>Operations</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Learn More</ListHeader>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Webinars</Link>
                <Tag
                  size={'md'}
                  bg={useColorModeValue('blue.300', 'blue.800')}
                  ml={2}
                  color={'blue.700'}>
                  Popular
                </Tag>
              </Stack>
              
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Demos</Link>
                <Tag
                  size={'md'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'green'}>
                  New
                </Tag>
              </Stack>
              <Link href={'#'}>Guides</Link>
              <Link href={'#'}>Articles</Link>
              <Link href={'#'}>Community</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Webinars</Link>
                <Tag
                  size={'md'}
                  bg={useColorModeValue('blue.300', 'blue.800')}
                  ml={2}
                  color={'blue.700'}>
                  Popular
                </Tag>
              </Stack>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Status</Link>
              <Link href={'#'}>Newsroom</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        
        <Stack justify={"space-between"} direction={isLargerThan767 ? "row" : "column"} padding={"20px"} bg={"gray.200"}>
            <Stack fontWeight={"500"} fontSize={"14px"} spacing={"7"} direction={"row"}>
                <Text>Security</Text>
                <Text>API</Text>
                <Text>Sitemap</Text>
                <Text>Privacy</Text>
                <Text>Terms</Text>
            </Stack>
            <Stack h={"6"}  direction={"row"}>
                <img width={"50%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfGkTalluSDP26-RVaQO9HKxUonQEXudWww&usqp=CAU" alt="" />
                <img width={"50%"} src="data:image/png;base64,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" alt="" />
            </Stack>
        </Stack>
        
        </Box>
    );
  }