import React, { useRef, useState } from 'react'

import {
  Box,
  Center,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { deleteContacts, updateContacts } from '../../../Redux/contacts/contacts.actions'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
  
function ContactCard({title,body}) {

  const dispatch = useDispatch()
  const [contact, setContacts] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [temptitle, setTitle] = useState(title)
   
    const [tempbody, setBody] = useState(body)

  const updateContacts = () => {
        dispatch(updateContacts(_id,{title:temptitle,body:tempbody,}))
        onClose()
    }

  return (
    <Center py={6}>
      <Box
        maxW={'300px'}
        h={'180px'}
        overflow={"auto"}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
         
        >
        <Stack>

          <Heading
            fontSize={'2xl'}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text color={'black.400'} mb={3}>
            {body}
          </Text>
        </Stack>
        <Stack direction={'row'} justify={'space-between'} pt={4}>
        
        <>
        <Button onClick={onOpen}>Update</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={temptitle} placeholder='John Doe' onChange={(e)=>setTitle(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone number</FormLabel>
              <Input value={tempbody} placeholder='' onChange={(e)=>setBody(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={updateContacts}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>





        <Button onClick={()=>
      dispatch(deleteContacts(_id))  
      }>
      Delete</Button>
        </Stack>
      </Box>
    </Center>
  )
}



export default ContactCard;
