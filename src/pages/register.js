import React from "react";
import {  Center, Stack, useColorModeValue, Heading, FormControl, FormLabel, Input, 
     InputRightElement, Button, InputGroup, InputLeftAddon, Text, Link, Box, Grid, Alert, AlertIcon,Toast, useToast, ToastPosition } from "@chakra-ui/react";

import { useState } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import axios from "axios";
export default function Register(){

        const [show, setShow] = React.useState(false);
        const handleClick = () => setShow(!show);

        const defaultToastProps = {
          position: "top-right",
          duration: 5000,
          isClosable: true,
         };

        const [username, setName] = useState("");
        const [password, setPass] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setTel] = useState("");
        
        const toast = useToast();

        const postRequestHandler = async () => {
          const data = {username, password, email, phone};

          if (username === "" || password === "" || email === "" || phone === "") {
              alert('ada data yang masih kosong')
          }else{
            try {
             await axios.post('http://localhost:8000/auth/register', data).then((res) => {
              console.log(res);
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                ...defaultToastProps,
              });
              setName("");
              setPass("");
              setEmail("");
              setTel("");
            }).then(()=>{ window.location = "/"})
            } catch (err) {
              console.log(err)
 
            }
            
          }
      
        }
        
    return(
        <Box textAlign="center" fontSize="xl">
        <Grid minH="50vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Center py={6}>
            <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: '100%', md: '540px' }}
            height={{ sm: '476px', md: '25rem' }}
            direction={{ base: 'column', md: 'row' }}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            padding={4}>     
                <FormControl>
                <Stack spacing={3}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
               <Center>User Registration </Center> 
                </Heading>
                    <InputGroup>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" value={username} onChange={(e) => setName(e.target.value)} placeholder='Enter username'/>
                    </InputGroup>

                    <InputGroup>
                    <FormLabel pr={'1'}>Password</FormLabel>
                    <Input value={password} onChange={(e) => setPass(e.target.value)}  pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                    </InputGroup>

                    <InputGroup>
                    <FormLabel pr={'8'}>Email</FormLabel>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="your-email@example.com"/>
                    </InputGroup>

                    <InputGroup>
                    <FormLabel pr={'6'}>Phone</FormLabel>
                    <InputLeftAddon children='+62' />
                    <Input type='tel' value={phone} onChange={(e) => setTel(e.target.value)} placeholder='phone number' />
                    </InputGroup>
                </Stack>
                <Stack spacing={10} pt={5}>
              <Button onClick={postRequestHandler}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link onClick={()=>{window.location="/"}} color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
                </FormControl>
            </Stack>
        </Center>
        </Grid>
        </Box>
       
    )
    

}
