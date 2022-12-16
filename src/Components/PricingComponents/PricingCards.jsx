
import { ReactNode, useContext } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function PricingCards() {

  const navigate = useNavigate();

  const {isAuth} = useContext(AuthContext)

  return (
    <Box py={12}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 12 }}
        py={10}>

        <PriceWrapper >
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Free
            </Text>
            
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                0
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
            <Box ml={"30px"} w="80%" pt={7}>
              <NavLink to={isAuth ? "/checkout" : "/signup"}>
                <Button w="full" colorScheme="red" variant="outline">
                Free
              </Button>
              </NavLink>
            </Box>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited bases
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Up to 5 creators or editors
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited commenter & read-only users
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Interface Designer
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1 extension per base
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1 sync integration
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1,200 records per base
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                2GB of attachments per base
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  120
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
              <Box mb={"20px"} ml={"40px"} w="80%" pt={7}>
              <NavLink to={isAuth ? "/checkout" : "/signup"}>
                <Button w="full" colorScheme="messenger">
                  Purchase
                </Button>
                </NavLink>
              </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  10 extensions per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  7 sync integrations including Jira Cloud
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  50,000 records per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  20GB of attachments per base
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Granular interface permissions
                </ListItem>
              </List>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Enterprise
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                -
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
            <Box mb={"20px"} ml={"50px"} w="80%" pt={7}>
            <NavLink to={isAuth ? "/checkout" : "/signup"}>
              <Button w="full" colorScheme="red" variant="outline">
                Contact Sales
              </Button>
              </NavLink>
            </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited workspaces per organization
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Unlimited extensions
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Salesforce & Jira on-prem sync integrations
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1,000GB of attachments per base
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                3-year revision & snapshot history
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                SAML-based single sign-on
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Enterprise-wide admin panel
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Ongoing Success Program
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Included Professional Services
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Ongoing Success Program
              </ListItem>
            </List>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
    
