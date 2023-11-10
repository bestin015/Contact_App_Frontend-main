import { Box, Button, FormControl, FormLabel, Grid, IconButton, Input, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import ContactCard from '../components/ContactPage/ContactCard/ContactCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createContacts, getContacts } from '../Redux/contacts/contacts.actions'
import { BsPlusLg } from 'react-icons/bs'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

function ContactsPage() {
    const dispatch = useDispatch()
    const {loading,error,data} = useSelector((state) => state.movieReducer)
    console.log(data)
    const token = useSelector((state) => state.userReducer.token)
    const [Contacts, setContacts] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [rating, setRating] = useState('')

    const addContact  = () => {
        dispatch(createContacts({title,image,body,rating}))
        onClose()
    }


    useEffect(() => {
        dispatch(getContacts())
    }, [])

    useEffect(() => {
        setContacts(data)
    }, [data])
        
  return (
    <Box padding={8}>

        <Grid w={'100%'} gridTemplateColumns={{base:"none",md:'repeat(4,1fr)'}}>
            {Contacts?.map((el)=> <ContactCard key={el._id} {...el} />)}
        </Grid>

    
    <>
    <IconButton position={"fixed"} w={{base:"16",md:'5%'}} h={{base:"16",md:'10%'}} bottom={0} right={0} margin={{base:4,md:16}} rounded={100}
    onClick={() => {
        onOpen()
    }} icon={<BsPlusLg/>}
    >

    </IconButton>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input required value={title} placeholder='John Doe' onChange={(e)=>setTitle(e.target.value)}/>
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Phone number</FormLabel>
              <Input required value={body} placeholder='' onChange={(e)=>setBody(e.target.value)}/>
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Email</FormLabel>
              <Input required value={image} placeholder='example@example.com' onChange={(e)=>setImage(e.target.value)}/>
            </FormControl>
            
            <FormControl mt={3}>
              <FormLabel>Alternative number</FormLabel>
              <Input required value={rating} placeholder='' onChange={(e)=>setRating(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={addContact}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

    </Box>
  )
}

export default ContactsPage;