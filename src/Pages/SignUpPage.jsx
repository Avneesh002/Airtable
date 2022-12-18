import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Center,
    Divider
  } from '@chakra-ui/react';
  import { FcGoogle } from 'react-icons/fc'
  import { useState, useContext } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import styles from "../styles/signup.module.css"
  import {Navlink, useNavigate, redirect} from "react-router-dom"
  import { AuthContext } from '../Context/AuthContext';


  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setIsAuth, setName, name} = useContext(AuthContext);

    const Navigate = useNavigate();

    const invokeLoader = async () => {

        setLoading(true);

        await fetch(`https://airtable-cioc.onrender.com/isLogged`,{
          method:"POST",
          body:JSON.stringify({"value":true}),
          headers:{
            "Content-Type": "application/json"
          }
        }).then((res) => res.json()).then((res) => setIsAuth(res.value))
        
        
        const timer = setTimeout(() => {
            setLoading(false);
            Navigate("/workplace")
        }, 3000)

        
    
    }
    const setVal = (e) => {
      e.preventDefault();
      setName(name)
      Navigate("/workplace")
    }

    

    return (
        <>
        
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Stack ml={"120px"} direction={"row"}>
            <img marginleft={"50px"} width={"15%"} src="data:image/png;base64,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" alt="" />
            <Text fontSize={'35px'} color={'gray.600'}>
             Airtable
            </Text>
            </Stack>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Create Your Work Account
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input onChange={(e) => setName(e.target.value)} value={name} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack pb={"20px"} spacing={10} pt={2}>
              <button onClick={setVal} className={styles.cssbuttonsiobutton}> Sign up
            <div className={styles.icon}>
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
            </div>
            </button>
              </Stack>
              <Divider></Divider>
              <Stack>
        <Center p={8}>
            <Button
                w={'full'}
                maxW={'md'}
                variant={'outline'}
                leftIcon={<FcGoogle />}
                onClick={invokeLoader}
                >
            <Center>
                <Text>Sign in with Google</Text>
            </Center>
            </Button>
        </Center>
        </Stack>
            </Stack>
          </Box>
        </Stack>
        
      </Flex>
     {loading ? <div style={{width:"100%", height:"120vh", backgroundColor:"rgb(0,0,0,0.9)", zIndex:"3", position:"absolute", top:"0"}} >
     <div class={styles.loader}></div>
     </div> : ""}
     
      </>
    );
  }