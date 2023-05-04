import Navbar from "../component/navbar";
import { Grid, GridItem, Container, Box, Text, Button, Stack, SimpleGrid } from '@chakra-ui/react'
import MenuProduk from '../component/productList'
// import ListCategories from '../component/category'

const MainMenu = () => {
  return (
    <div className="App">
      <Navbar />
      <SimpleGrid columns={3} spacing='500px' px='10px'>
        <Box height='100%' bg='blue.200' mt='16' textAlign='center'>
          <Text as='b' fontSize='3xl' mt='10' spacing='3' size='md'>Daftar Kategori</Text>
          <Stack direction='row' spacing={4} mt='16' justifyContent='center'>
            <Button colorScheme='teal' variant='outline' >
             Makanan
            </Button>
            <Button colorScheme='teal' variant='outline'>
              Minuman
            </Button>
          </Stack>
        </Box>
        <Box bg='blue.200' height='80px' mt='16' >
        <MenuProduk />
        </Box>
        <Box bg='blue.200' height='80px' mt='16' textAlign='center'>
        <Text as='b' fontSize='3xl' mt='10' spacing='3' >Product Config</Text>
        <Stack direction='row' spacing={4} mt='16' justifyContent='center'>
            <Button colorScheme='teal' variant='outline'>
             Insert Product
            </Button>
            <Button colorScheme='teal' variant='outline'>
              Edit Product
            </Button>
          </Stack>
        </Box>
      </SimpleGrid>
      {/* <Box position='relative' gap={12} p={12} columns={2} bgGradient="linear(to-r, red.300, blue.400, red.300)" >
        <Container>
          <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem w='100%' colSpan={2} h='10'  />
             <Text mt='10' spacing='3' size='md' width='300px' >Daftar Kategori</Text>
             <Stack direction='row' spacing={4}>
                <Button colorScheme='blue'>Makanan</Button>
                <Button colorScheme='blue'>Minuman</Button>
              </Stack>

            <GridItem w='100%' h='10' />
          </Grid>
          <Grid gap={6} >
            <GridItem width="100%">
              
              

            </GridItem>
            <GridItem width="100%" >
              <MenuProduk />
            </GridItem>
          </Grid>
        </Container>
      </Box> */}
    </div>

  )
}

export default MainMenu