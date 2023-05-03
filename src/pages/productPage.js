import Navbar from "../component/navbar";
import { Grid, GridItem, Container,Box } from '@chakra-ui/react'
import MenuProduk from '../component/productList'
import ListCategories from '../component/category'

const MainMenu = () => {
    return (
        <div className="App">
            <Navbar />
            <Box position="relative" bgGradient="linear(to-r, red.300, blue.400, red.200)"  p={100}>

            <Container>
                <Grid templateColumns='repeat(3, 1fr)' gap={6} justifyContent="space-around" alignContent="center"> 
                  <MenuProduk/>
                </Grid>
                <Grid> 
                  <ListCategories/>
                </Grid>

            </Container>
            </Box>
            



        </div>






        // <div className="mt-5">
        //     <Container>
        //         <Navbar />
        //     </Container>

        // </div>




    )
}

export default MainMenu