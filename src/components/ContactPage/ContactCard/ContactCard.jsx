import React, { useRef, useState } from 'react'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
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
  
function ContactCard({title,image,body,rating,user,_id}) {

  const dispatch = useDispatch()
  const [contacts, setContacts] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [temptitle, setTitle] = useState(title)
    const [tempimage, setImage] = useState(image)
    const [tempbody, setBody] = useState(body)
    const [temprating, setRating] = useState(rating)
       const updateContact = () => {
        dispatch(updateContacts(_id,{title:temptitle,body:tempbody,image:tempimage,rating:temprating}))
        onClose()
    }

  return (
    <Center py={6}>
      <Box
        maxW={'300px'}
        h={'270px'}
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
          <Text color={'black.400'} mb={3}>
            {image}
          </Text>
          <Text color={'black.400'} mb={3}>
            {rating}
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
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input value={tempimage} placeholder='example@example.com' onChange={(e)=>setImage(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Alternative number</FormLabel>
              <Input value={temprating} placeholder='' onChange={(e)=>setRating(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={updateContact}>
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