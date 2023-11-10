import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    InputRightElement,
    InputGroup,
  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/users/user.actions'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const nav = useNavigate()
    const {auth,token,loding,error} = useSelector((state) => state.userReducer)
    console.log(auth,token)
    if(auth){
        nav("/Contacts")
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(getUser({email, password}))

    }
    

  return (
    <Stack minH={'80vh'} direction={{ base: 'column-reverse', md: 'row' }}>
      <Flex p={18} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'} width={400}>
        <Heading fontSize={'4xl'} textAlign={'center'}>Login</Heading>
          <FormControl id="email">
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
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}
            onClick={handleLogin}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          pr={{base:0,md:70}}
          src={
            'https://static.vecteezy.com/system/resources/previews/006/912/004/non_2x/secure-login-and-sign-up-concept-illustration-vector.jpg'
          }
        />
      </Flex>
    </Stack>
  )
}


export default LoginPage