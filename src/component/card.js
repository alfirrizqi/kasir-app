import { Card, CardBody, CardFooter, Text, Divider, ButtonGroup, Button, Image, Stack, Heading, GridItem} from '@chakra-ui/react'
import { numberWithCommas } from '../utilities/fontsNumber';


function CardProduct({ data }) {
    console.log(data);
    return (

        <Card maxW='md' width='330px' >
            <CardBody width="250px" >
                <GridItem>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    objectFit='fill' 
                    alignItems='center'
                />
                </GridItem>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'width='300px' textAlign='center' >{data.name}</Heading>
                    <Text textAlign='center'>
                       {data.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl' textAlign='center'>
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
                </ButtonGroup>
            </CardFooter>
        </Card>

    );

}

export default CardProduct;