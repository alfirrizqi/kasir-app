import { Card, CardBody, CardFooter, Text, Divider, ButtonGroup, Button, Image, Stack, Heading, GridItem, SimpleGrid, Flex} from '@chakra-ui/react'
import { numberWithCommas } from '../utilities/fontsNumber';


function CardProduct({ data }) {
    console.log(data);
    return (
        
        <Flex>
            <Card maxW='md' width='300px' >
            <CardBody width="250px" >
                
                <Image
                    src=''
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                     
                />
                
                <Stack mt='6' spacing='3'>
                    <Heading size='md'width='300px' >{data.name}</Heading>
                    <Text >
                       {data.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl' >
                       Rp. {numberWithCommas(data.price)}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2' >
                    <Button variant='solid' colorScheme='blue'>
                        Add to cart
                    </Button>
                    <Button variant='solid' colorScheme='blue'>
                        Edit Produk
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        </Flex>
            
    
        

    );

}

export default CardProduct;