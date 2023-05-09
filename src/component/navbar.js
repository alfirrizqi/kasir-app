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
                    <MenuItem>Fashion</MenuItem>
                    <MenuItem>Electronic</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Kategori Lain'>
                    <MenuItem>Tambahkan Kategori</MenuItem>
                  
                </MenuGroup> 
            </MenuList>
        </Menu>
        <Menu>
        <MenuButton as={Button} colorScheme='blue' my="20px" >TRANSAKSI</MenuButton>
        <MenuList>
            <MenuGroup title='Transaksi'>
                <MenuItem>History Transaksi</MenuItem>
            </MenuGroup>
        </MenuList>
        </Menu>
        <Button colorScheme="red">LOGOUT</Button>
        </Flex>
    )

}