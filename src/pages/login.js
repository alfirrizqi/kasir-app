import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,InputGroup,InputRightElement
  } from '@chakra-ui/react'
  import  React from 'react'



export default function Login(){

        const [show, setShow] = React.useState(false);
        const handleClick = () => setShow(!show);

    return(
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6">
            {/* <Logo /> */}
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={{ base: 'transparent', sm: 'bg-surface' }}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" />
                 
                  
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input type={show ? 'text' : 'password'} placeholder='Enter password' />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                    </InputGroup>

                </FormControl>
                {/* <PasswordField /> */}
              </Stack>
              <HStack justify="space-between">
                {/* <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button> */}
              </HStack>
              <Stack spacing="6">
                <Button variant="primary">Sign in</Button>
               
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>  
    )
}