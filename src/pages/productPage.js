import Navbar from "../component/navbar";
import { Grid, GridItem, Container, Box, Text } from '@chakra-ui/react'
import MenuProduk from '../component/productList'
import ListCategories from '../component/category'

const MainMenu = () => {
  return (
    <div className="App">
      <Navbar />
      <Box bgGradient="linear(to-r, red.300, blue.400, red.300)" p={100}>
        <Container>
          <Grid gap={6} justifyContent="start" alignContent="center" >
            <GridItem gridColumn={1} width="100%">
              <Text>Daftar Kategori</Text>
              <ListCategories />
            </GridItem>
            <GridItem gridColumn={11} width="100%">
              <MenuProduk />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </div>

  )
}

export default MainMenu