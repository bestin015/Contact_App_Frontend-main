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
    Image,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react'
  import { useState } from 'react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/users/user.actions'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../constants/config'


function SignupPage() {

  const [showPassword, setShowPassword] = useState(false)
  const nav = useNavigate()
   
   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async() => {
        let data = await axios.post(BASE_URL+"/user/register",{
            name,email,password
        })
        let {message,status}=data.data
        if(status===1){
            alert(message)
            nav("/login")
        } else {
            alert(message)
        }
    }


  return (
    <>
    <Flex
      minH={'90vh'} direction={{ base: 'column-reverse', md: 'row' }}
      >
      <Stack p={18} flex={1} align={'center'} justify={'center'}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="Name" isRequired width={{base:250,md:400}}>
                  <FormLabel>Name</FormLabel>
                  <Input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input value={password} onChange={(e)=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSignup}
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Button backgroundColor={"white"} color={'blue.400'} onClick={()=>{nav("/login")}}>Login</Button>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          pr={{base:0,md:70}}
            objectFit={{base:'cover',md:'contain'}}
          src={
            'https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png'
          }
        />
      </Flex>
    </Flex>
      
    </>
  )
}

export default SignupPage