import { React, useEffect, useState } from "react";
import Navbar from "../component/navbar";
import {
  Box, Text, Button, Stack, Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure
} from '@chakra-ui/react'
import FormProduct from "../component/formUpload";
import axios from "axios";
import ProductList from "../component/productList";



const MainMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [products, setProducts] = useState([]);

  // const [categoryId, setCategoryId] = useState(null)

  // function category(categoryId) {
  //   setCategoryId(categoryId)
  // }

  const getProducts = async () => {
    await axios.get('http://localhost:8000/auth/product/get', {
      params: {
        order: 'asc'
      }
    }).then(function (response) {
      setProducts(response.data.data)
    })
  } 

  const handleFilter = (categoryId) => {
    const getProducts = async (categoryId) => {
      await axios.get('http://localhost:8000/auth/product/get', {
        params: {
          categoryId,
          order: 'asc'
        }
      }).then(function (response) {
          
          setProducts(response.data.data);
      }). catch(function (err) {
        console.log(err);
      }) 
    }
    
    getProducts(categoryId)
  }


  useEffect(() => {
    getProducts()
  }, []);



  return (
    <div className="App">
      <Navbar />

      <Flex mr={4} ml={4}>
        <Box height='100%' mt='16'>
          <Text as='b' fontSize='3xl' mt='10' spacing='3' size='md'>Daftar Kategori</Text>
          <Stack direction='row' spacing={4} mt='16' justifyContent='center'>
            <Button colorScheme='teal' variant='outline' onClick={() => handleFilter(1)} >
              Minuman
            </Button>
            <Button colorScheme='teal' variant='outline' onClick={() => handleFilter(2)} >
              Makanan
            </Button>
          </Stack>
          <Stack>
            <Text as='b' fontSize='3xl' mt='20' spacing='3' >Product Config</Text>
            <Stack spacing={4} mt='16' >
              <Button onClick={onOpen} onClose={onClose} colorScheme='teal' variant='outline' mt={16} >Tambah Produk</Button>.
              <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                  <FormProduct disclosure={onClose} />
                </ModalContent>
              </Modal>
            </Stack>
          </Stack>

        </Box>
        <Box mt='16' ml={40}>
          <ProductList dataProducts={products} />
        </Box>
      </Flex>
    </div>

  )
}

export default MainMenu