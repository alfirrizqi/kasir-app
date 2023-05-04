import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    MenuGroup,
    Button,
    MenuDivider,
    Heading,
} from '@chakra-ui/react';




export default function Navbar() {
    return (
        <Flex bg="cyan.700" border="2px" borderColor="black" alignItems="center" justify="space-around" wrap="wrap" gap="2">
            <Heading>KASIR KU</Heading>
            <Menu justify="center">
            <MenuButton as={Button} colorScheme='blue' my="20px" justifyItems="center">PRODUK</MenuButton>
            <MenuList>
                <MenuGroup title='Kategori Produk'>
                    <MenuItem>Food And Beverages</MenuItem>
                    {/* <MenuItem>Minuman</MenuItem> */}
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Fashion'>
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
        <Menu>
        <MenuButton as={Button} colorScheme='blue' my="20px" justifyItems="center">TRANSAKSI</MenuButton>
        <MenuList>
            <MenuGroup title='Transaksi'>
                <MenuItem>History Transaksi</MenuItem>
            </MenuGroup>
        </MenuList>
        </Menu>
        <Button colorScheme="red">LOGOUT</Button>
        </Flex>
        
        // <Flex as="nav" p="10px" alignItems="center" background="gray.500">
        //     <Heading as="h1">KASIR KU</Heading>
        //     {/* <Spacer/> */}
        //     <Link href="/" passHref>
        //     <Button colorScheme='blue'>MENU PRODUK</Button>
        //     </Link>

        //     <Link href="/" passHref>
        //     <Button colorScheme='red'>LOGOUT</Button>
        //     </Link>
            
            /* <Button colorScheme='red'>LOGOUT</Button> */ 

            
            

    

        // <Flex bg="grat.200" justify="space-around" wrap="wrap" gap="2">
        //     <Box w="150px" h="50px" bg="red">1</Box>
        //     <Box w="150px" h="50px" bg="blue">1</Box>
        //     <Box w="150px" h="50px" bg="green">1</Box>
        //     <Box w="150px" h="50px" bg="red">1</Box>
        // </Flex>
    )

}