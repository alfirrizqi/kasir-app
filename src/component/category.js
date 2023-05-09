import { Card, CardBody, CardHeader, Modal,Button,ModalFooter,  Heading,  Input,FormControl, 
    ModalBody,ModalContent,FormLabel,ModalOverlay,ModalCloseButton,ModalHeader, 
    Center, Stack, useColorModeValue,useDisclosure, TableContainer, Td,Tr,Th, Table, 
    Thead, Tbody,Tfoot,  useToast, ToastPosition, Toast} from "@chakra-ui/react";
import axios from "axios";

import React, { useEffect } from "react";
import { useState} from "react";

export default function Insert(){

    const { isOpen, onOpen, onClose } = useDisclosure();
    const modal1 = useDisclosure()
    const modal2 = useDisclosure()
    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const defaultToastProps = {
        position: "top-right",
        duration: 5000,
        isClosable: true,
       };

    const [ category_name, setName] = useState("");

    const toast = useToast();

    const postRequestcategory = async () =>{
        const isi = {category_name};

        if (category_name === '') {
            alert('data belum disi')
        }else{
            try {
                await axios.post('http://localhost:8000/auth/tambah/category', isi).then((res) => {
                    console.log(res);
                    toast({
                      title: "Category created.",
                      description: "We've created your new category for you.",
                      status: "success",
                      ...defaultToastProps,
                    });
                    
                })
                
            } catch (error) {
                console.log(error);
            }
        }
    }

    ////table get
   
// const [category_names, setNamecat] = useState([])
    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/auth/category/get').then(json => setData(json.data.data))
    }, [])

        const renderTable = () =>{
            return data.map(Category => {
                return(
                    <Tr>
                        <Td>{Category.category_id}</Td>
                        <Td>{Category.category_name}</Td>
                        <Td><Button 
                        onClick={modal2.onOpen}  colorScheme='blue'>Edit</Button></Td>
                    </Tr>
                )
            })
        }
    return(
        <Card align={'center'}>
            <CardHeader>
                <Heading size={'md'}>Data All Category</Heading>
            </CardHeader>
            <CardBody>
             <Center py={6}>
                <Stack borderWidth="1px" borderRadius="lg" w={{ sm: '100%', md: '740px' }}
                       height={{ sm: '476px', md: '25rem' }} direction={{ base: 'column', md: 'row' }}
                       bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} padding={4}>
                    <FormControl>
                        <Button onClick={modal1.onOpen}>New Category</Button>
                     

                        <TableContainer>
                        <Table variant='striped' colorScheme='teal'>
                          
                            <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th>Action</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                
                           {renderTable()}
                        
                        
                            </Tbody>
                            <Tfoot>
                        <Tr></Tr>
                            </Tfoot>
                        </Table>
                        </TableContainer>


                {/* menampilkan modals untuk tambah data */}
                    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={modal1.isOpen} onClose={modal1.onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Create New Category</ModalHeader>
                        <ModalCloseButton />

                        <ModalBody pb={6}>
                            <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input 
                            value={category_name} onChange={(e) => setName(e.target.value)} 
                            ref={initialRef} placeholder="Name Category" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button variantColor="blue" mr={3} onClick={postRequestcategory}>
                            Save
                            </Button>
                            <Button onClick={modal1.onClose}>Cancel</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                {/* modals untuk edit */}
                    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={modal2.isOpen} onClose={modal2.onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Edit Data Category</ModalHeader>
                        <ModalCloseButton />

                        <ModalBody pb={6}>
                            <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input 
                            value={category_name} onChange={(e) => setName(e.target.value)} 
                            ref={initialRef} placeholder="Name Category" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button variantColor="blue" mr={3} >
                            Save
                            </Button>
                            <Button onClick={modal2.onClose}>Cancel</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                    </FormControl>
                </Stack>
            </Center> 
            </CardBody>
        </Card>
    )
}