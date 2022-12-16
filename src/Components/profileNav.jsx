import { ReactNode, useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Divider
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AuthContext } from '../Context/AuthContext';
import {BiLogOutCircle} from "react-icons/bi"
import {MdOutlineAccountCircle} from "react-icons/md"
import {HiOutlineDatabase} from "react-icons/hi"
import {FaUserSecret} from "react-icons/fa"
import { NavLink } from 'react-router-dom';

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function ProfileNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name, logout} = useContext(AuthContext);

  return (
    <>
      <Box pos={"sticky"} zIndex={"10"} top={"0"} bg={"white"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <NavLink to={"/"}><Box>
            <img width={"140px"} src="data:image/png;base64,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" alt="" />
          </Box></NavLink>
          
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={<FaUserSecret />}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={<FaUserSecret />}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p fontWeight={"500"} fontSize={"18px"}>{name}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Stack>
                  <MenuItem><HiOutlineDatabase />Your Bases</MenuItem>
                  </Stack>
                  <Stack>
                  <MenuItem><MdOutlineAccountCircle /> Account</MenuItem>
                  </Stack>
                  <Stack>
                    <NavLink to={"/"}><MenuItem onClick={logout}><BiLogOutCircle /> Logout</MenuItem></NavLink>
                  </Stack>
                  
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      <Divider/>
      </Box>
    </>
  );
}