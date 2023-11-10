import React from 'react'
import {Box, Button, Flex, IconButton, Stack, Text, useBreakpointValue, useColorModeValue, useDisclosure} from '@chakra-ui/react'

import {
    HamburgerIcon,
    CloseIcon,
  } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../Redux/users/user.types';
  
const Navbar = () => {
    // const { isOpen, onToggle } = useDisclosure();
    const nav = useNavigate();
    const {auth,token,loding,error} = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
   
    return (
        <Box>
          <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2}}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}
            padding={"1em 3em"}
            pl={{ base: 4 }}
            >
            {/* <Flex
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
            </Flex> */}
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >
              <Box
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                fontSize={'md'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.800', 'white')} onClick={()=>{nav("/")}}>

               Contact Manager
              </Box>

              
             </Flex>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
              
              <Button
                display={auth==true ? "none" : "flex"}
                fontSize={'sm'}
                fontWeight={600}
                color={'black'}
                bg={'gray.100'}
                href={'#'}
                _hover={{
                color:'white',
                  bg: 'black',
                }}
                onClick={() => {nav("/login")}}
                >
                Login
              </Button>
              <Button
                fontSize={'sm'}
                fontWeight={600}
                color={'black'}
                bg={'gray.100'}
                href={'#'}
                _hover={{
                color:'white',
                  bg: 'black',
                }}
                onClick={() => {nav('/register')}}
                display={auth ? "none" : "block"}
                >
                Sign Up
              </Button>
              <Button
                fontSize={'sm'}
                fontWeight={600}
                color={'black'}
                bg={'gray.100'}
                href={'#'}
                _hover={{
                color:'white',
                  bg: 'black',
                }}
                onClick={() => {dispatch({type:LOGOUT})}}
                display={auth==true ? "block" : "none"}

                >
                Logout
              </Button>
            </Stack>
          </Flex>
        
        </Box>
      );
}

export default Navbar