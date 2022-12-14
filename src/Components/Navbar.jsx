
import { ReactText } from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    HStack,
    Heading,
    PopoverCloseButton
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  } from '@chakra-ui/icons';
  import Sidebar from "./Sidebar";

  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box position={"sticky"} zIndex={"2"} top={"0"} >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <HStack mt={"-4o"}>
              <img width={60} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAB5CAMAAACdtUQZAAAAz1BMVEX///83zfX/0wDzSlzBOEcly/WU4PmA3Pj97O3/0QD0YG/zRlj/zwD/++3///0Ax/S/LD29IDT/8sf/10T/993/1CT//fX/887y+/7AMkL/+OL/7bT/5ZD/66v/+ef/3GD/4Hf/6KGt5/rA7Pvj9/3pxcjdoKVc0/bnRlf14+S6ACTw19lw2PfDQU70WWjyL0f/5Ib/32z/21XS8fzSgon3jZbeMEXjs7fOPUz79PTHVF+5ABnObnbZlZrLY23vv8PxeYTyHjv4nKTztLn71Nfls9ACAAAEtElEQVR4nO2ae3uaMBSHBQmWIaAieMMpamsvMqm0s+26rWv3/T/TghYl4SKoNaTL+1/rQ5+8z0l+55BaKjEYDAaDwWAwGAzG/4nZ7VmuazcUk/RKjojasIyqJPG8VJUG/a+kl3Ms+gMeOgVIuvsJzNSmJYWk1lT1hkJ6YQeh9oZ8xGpltrCapBe3N4qtx1utMAYNlfQK98BsuNVkqfft2KetaCqaFUnADGmRXmp2zObOUoXUjB4dGWL2bqMJmL4dreIXTbH0PE5BzYqdIWbrNvsGxIpmFDZDTDtTViQXzW2QVohiNocHOAUULUOU3uAIVry/He3iZIjp7pEVSfgZQlrIR2ktqsezWlHl7SbheFTsQb5mlQ3JGJIsmuoax3cKMMjlfv/YOxAVI3ZlsPhILd4gthWtDzhaIS9i1wXK0aNwi1Ttk9LyB0L9g0pmWF1yWj5dSz920kv8sFeA8f5rY7DvFB9vRbwrb/Dfuo6iRn6KOjtDfjSTbtTyUNXxqdfzTqgEebxznLsb5Fdq1z6wVosW+pbSHk05Tmyf0uv+e0eoXTtLVK3UGBr7FU3iFxbartpeRQMcx2njE2qdfZEvBUHo1J27c/STZt/I39Ok6hC72J6IU+BbcRwQT+tVLgu+Wa0mLNGTprYGuaZhidctbP+NAykiXuUHYUW9dnf+iHzc7C+ybkeJd7Fe5YncRoqMVyAm1DpPF6iZku1mKtqrYFSErch4lS/fxeBJ+/F8jiW/vUhP/sjLox8VGodBxGsrBotW/3VxhZo13GSzyD8dJqMZALgVKa+wGAyRzvMNsh9VpW/Eqhm3LeStse3NuBgpcl7ly4eQmd/TLvCe5mI9TZIGNtqrvBGnxVuR89qmR3DSnGesp3V7xjZEYK9CS1UaJ5WKsBeyF9dq9YsrLPndhW5A9Fs01dueqCWWirRXRGzV05aomdpttVpNfACMjYrCeMWIwZ7m/DxL/SNehdtpRdgLP2TvRbt+Pr9K+AveaJq+/wriFSsGe9rTzzizcaZSFcIrXgz2tPoTNohMRJBVqghecYdsrXbthILfq+SQKoRXopjQcTabcZLPqhBe2OwRFtsUrJJTqxBe63fNGK3OZrai1CsuPeA4vNw8SatX9JDVnfDrC7VeqBgcFdEGRq9XKD06sC1jT1Lstb3QcZaRCZFqL1+sUxN+P0afpNur/FD/tYx9kmovef4trlaUe8nyl9+JT1LrJc9fkmrlQ6kXrNVNihWlXrJ8/3fHk/R5yfKfnVb0ecnyt/v0a5o1lHnJ5dekGxoUmrxkef6apVY+9HjBJvyaGoEItHjJ8/Jbth24hg4vmBZv2WvlQ4MXHC3e8j5ZbK/S61xOGW5TKLhX6e3lZXcTjqHoXvuS20s78Tek9iSfFwAcHeXK5QW42eik3/o6gOxeQBM9Wqwye8FSnfJ7bIeTxQtoU5GOtNiy2wuAGUX7L2CHF5QaTUivcR9SveiKCoRkL8BNR6RXtz9JXhon0hWAGLFeMADHlO6/gKgXAFORyqhAwL2AVqG9VCsQLz8qPoNUCfEClEcFQuDlRwX9p2rLCHyaqECYQClt9qlKtaY9onMAZDAYDAaDwWAwGIwD+QdTP3nbLBfSPgAAAABJRU5ErkJggg==" alt="" />
              <Text fontFamily={"sans-serif"} fontSize={24} fontWeight="bold">Airtable</Text>
              </HStack>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'black'}
              variant="outline"
              border={"2px solid gray"}
            //   bg={'blue.400'}
              href={'#'}
              height="34px"
              _hover={{
                  bg: 'gray.50',
                }}>
              Contact sales
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              size={"sm"}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'rgb(28, 110, 232)'}
              href={'#'}
              _hover={{
                  bg: 'blue.700',
                }}>
              Sign Up for free
            </Button>
                  <Button
                    as={'a'}
                    fontSize={'sm'}
                    fontWeight={600}
                    variant={'link'}
                    
                    href={'#'}>
                    
                    Sign In
                  </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    
    return (
      <Stack  mt={"7px"} direction={'colum'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover >
              <PopoverTrigger>
              
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'16px'}
                  fontWeight={500}
                  color={linkColor}
                  marginRight={"5"}
                  
                  >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                  <PopoverContent
                  >
                    
                  <Sidebar />
                 
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
//   const DesktopSubNav = ({ label, href, subLabel }) => {
//     return (
//       <Link
//         href={href}
//         role={'group'}
//         display={'block'}
//         p={2}
//         rounded={'md'}
//         _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
//         <Stack direction={'row'} align={'center'}>
//           <Box>
//             <Text
//               transition={'all .3s ease'}
//               _groupHover={{ color: 'pink.400' }}
//               fontWeight={500}>
              
//               {label}
//             </Text>
//             <Text fontSize={'sm'}>{subLabel}</Text>
//           </Box>
//           <Flex
//             transition={'all .3s ease'}
//             transform={'translateX(-10px)'}
//             opacity={0}
//             _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//             justify={'flex-end'}
//             align={'center'}
//             flex={1}>
//             <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
//           </Flex>
//         </Stack>
//       </Link>
//     );
//   };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label} 
                  <p color='gry'>{child.subLabel}</p>
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  const NAV_ITEMS= [
    {
      label: 'Product',
      children: [
        {
          label: 'Overview',
          subLabel:"Welcome to Airtable! Here\'s the basics",
          href: '#',
        },
        {
            label: 'Features',
            subLabel:"Discover automation, views, reporting and more",
            href: '#',
          },
          {
            label: 'Integrations',
            subLabel:"Bring your favourite tools into Airtable",
            href: '#',
          }
          ,
          {
            label: 'Enterprise Overview',
            subLabel:"see how Airtable scales for large and complex organizations",
            href: '#',
          }
          ,{
            label: 'Marketplace',
            href: '#',
          }
          ,
          {
            label: 'Download Apps',
            href: '#',
          }
          ,{
            label: 'whats\'s new',
            href: '#',
          }
          ,{
            label: 'Pricing',
            subLabel:"From small business to global enterprise, there\'s an Airtable plan that\'s just right for you.",
            href: '#',
          }
          ,
        ],
    },
    {
      label: 'Solutions',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Pricing',
      href: '#',
    },
    {
        label: 'Enterprise',
        children: [
          {
            label: 'Job Board',
            subLabel: 'Find your dream design job',
            href: '#',
          },
          {
            label: 'Freelance Projects',
            subLabel: 'An exclusive list for contract work',
            href: '#',
          },
        ],
      },
      {
        label: 'Resources',
        children: [
          {
            label: 'Job Board',
            subLabel: 'Find your dream design job',
            href: '#',
          },
          {
            label: 'Freelance Projects',
            subLabel: 'An exclusive list for contract work',
            href: '#',
          },
        ],
      },
  ];