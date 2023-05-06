import { React } from "react";
import Navbar from "../component/navbar";
import {
  Box, Text, Button, Stack, Flex, Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure
} from '@chakra-ui/react'
import MenuProduk from '../component/productList'
import FormProduct from "../component/formUpload";



const MainMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [categoryId, setCategoryId] = useState(null)

  // function category(categoryId) {
  //   setCategoryId(categoryId)
  // }


  return (
    <div className="App">
      <Navbar />

      <Flex mr={4} ml={4}>
        <Box height='100%' bg='blue.200' mt='16' textAlign='center'>
          <Text as='b' fontSize='3xl' mt='10' spacing='3' size='md'>Daftar Kategori</Text>
          <Stack direction='row' spacing={4} mt='16' justifyContent='center'>
            <Button colorScheme='teal' variant='outline' >
              Makanan
            </Button>
            <Button colorScheme='teal' variant='outline' >
              Minuman
            </Button>
          </Stack>
        </Box>
        <Spacer />

        <Box bg='blue.200' height='80px' mt='16' >
          <MenuProduk />
        </Box>
        <Spacer />
        <Box bg='blue.200' height='80px' mt='16' textAlign='center'>
          <Text as='b' fontSize='3xl' mt='10' spacing='3' >Product Config</Text>
          <Stack direction='row' spacing={4} mt='16' justifyContent='center'>
            <Button onClick={onOpen} onClose={onClose} colorScheme='teal' variant='outline'>Tambah Produk</Button>.
            <Modal isOpen={isOpen} onClose={onClose} >
              <ModalOverlay />
              <ModalContent>
                <FormProduct disclosure={onClose} />
              </ModalContent>
            </Modal>
          </Stack>
        </Box>
      </Flex>
    </div>

  )
}

export default MainMenu