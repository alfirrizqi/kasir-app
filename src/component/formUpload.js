import { React, useState } from 'react';
import axios from 'axios';

import {
    FormControl,
    FormLabel,
    Input,
    NumberInputField,
    NumberInput,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
    Button,
    Container,
    Stack

} from '@chakra-ui/react'
import Swal from 'sweetalert2'


// function form produk memakai props untuk button close
function FormProduct(props) {


    
    const handleClick = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }



    //membuat state untuk mengirim data sesuai form isi untuk produk baru
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [deskripsi, setDeskripsi] = useState('');
    const [stok, setStok] = useState(0);
    const [kategori, setKategori] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
    const handleQtyChange = (e) => {
        setStok(e.target.value);
    };
    const handleDescChange = (e) => {
        setDeskripsi(e.target.value);
    };
    const handleCategChange = (e) => {
        setKategori(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', deskripsi);
        formData.append('qty', stok);
        formData.append('category_id', kategori);
        formData.append('thumbnail', file);

        console.log(formData);

        axios
            .post('http://localhost:8000/auth/product/create', formData)
            .then((response) => {
                console.log(response);
                // Handle the API response
            })
            .catch((error) => {
                console.log(error);
                // Handle errors
            });
    };

    return (

        <Container>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel mt={3}>Nama Produk</FormLabel>
                    <Input type="name" value={name} onChange={handleNameChange} />
                    <FormLabel mt={3}>Harga Produk</FormLabel>
                    <Input type="number" value={price} onChange={handlePriceChange}></Input>
                    <FormLabel mt={3}>Deskripsi Produk</FormLabel>
                    <Input type="text" value={deskripsi} onChange={handleDescChange}></Input>
                    <FormLabel mt={3}>Stok Produk</FormLabel>
                    <NumberInput max={100} min={10} >
                        <NumberInputField value={stok} onChange={handleQtyChange} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel mt={3}>Kategori</FormLabel>
                    <Select placeholder='Pilih Kategori' type="kategori" value={kategori} onChange={handleCategChange} >
                        <option value={1}>Makanan</option>
                        <option value={2}>Minuman</option>
                    </Select>
                    <FormLabel mt={3} mb={4}>Foto Produk
                        <Container mt={2}> <input type="file" name="file" onChange={handleFileChange} />
                        </Container>
                    </FormLabel>
                    <hr></hr>
                    <hr></hr>
                    <Stack direction='row' spacing={4} align='center' mt={5} mb={5}>
                        <Button colorScheme='teal' variant='solid' type='submit' onClick={handleClick} >
                            Simpan
                        </Button>
                        <Button colorScheme='teal' variant='solid' onClick={props.disclosure}>
                            Tutup
                        </Button>
                    </Stack>
                </FormControl>
            </form>
        </Container>

    )
}


export default FormProduct;