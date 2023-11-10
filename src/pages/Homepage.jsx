import React from 'react'
import { Box, Button, Text,Image, Flex } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
function Homepage() {
    const nav = useNavigate()
    
  return (
    <>
    <Box>
        <Heading textAlign={"center"} padding={"1em"}>jj</Heading>
        <Text textAlign={"center"} px={{base:10,md:'10em'}}>jjj</Text>
        <Flex justify={'center'} pt={5}><Button colorScheme='purple' onClick={()=>{nav('/Contacts')}}>k</Button></Flex>
        <Flex align={'center'} justify={'center'}><Image src={'img.jpg'} alt={"Movie"} h={{base:'15em',md:'25em'}} w={{base:'20em',md:'30em'}}></Image></Flex>
    </Box>
    </>
  )
}

export default Homepage