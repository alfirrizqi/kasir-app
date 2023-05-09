import {
    Card, CardBody, CardFooter, Text, Divider, ButtonGroup, Button, Image, Stack, Heading, Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure
} from '@chakra-ui/react'
import { numberWithCommas } from '../utilities/fontsNumber';
import FormEdit from './formEdit';
import { React, useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';


function CardProduct({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure() 

    

    return (


        <Card maxW='md' width='600px' sx={{ width: '768' }} padding= "50px" >

            <CardBody display='contents'>

                <Image
                    src={'http://localhost:8000/' + data.thumbnail}
                    alt=''
                    borderRadius='lg'


                />
                <Stack mt='6' spacing='3' >
                    <Heading size='md' display='flex' justifyContent='center'>{data.name}</Heading>
                    <Text display='flex' justifyContent='center'>
                        {data.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl' display='flex' justifyContent='center'>
                        Rp. {numberWithCommas(data.price)}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter display='center' >
                <ButtonGroup >
                    <Button variant='solid' fontSize='xs' colorScheme='blue' fontWeight='normal'>
                        Add to cart
                    </Button>
                    <Button variant='solid' fontSize='xs' colorScheme='blue' fontWeight='normal' onClick={onOpen} onClose={onClose} >
                        Edit Produk
                        <Modal isOpen={isOpen} onClose={onClose} >
                            <ModalOverlay />
                            <ModalContent>
                                <FormEdit disclosure={onClose} dataProduk={data} />
                            </ModalContent>
                        </Modal>
                    </Button>
                    <ButtonGroup>
                        {/* <Button variant='solid' colorScheme='blue'>
                            Hapus Produk
                        </Button> */}
                    </ButtonGroup>

                </ButtonGroup>
            </CardFooter>
        </Card>
    
    );
}


export default CardProduct;