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
function FormEdit(props) {

 
    


    //membuat state untuk mengirim data sesuai form isi untuk produk baru
    const [file, setFile] = useState(null);
    const [name, setName] = useState(props.dataProduk.name);
    const [price, setPrice] = useState(props.dataProduk.price);
    const [deskripsi, setDeskripsi] = useState(props.dataProduk.description);
    const [stok, setStok] = useState(props.dataProduk.qty);
    const [kategori, setKategori] = useState(props.dataProduk.category_id);
   
    

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

        

        console.log(props.dataProduk.product_id);
        //untuk setor update produk berdasarkan id
        axios
            .put('http://localhost:8000/auth/product/update/' + props.dataProduk.product_id, formData)
            .then((response) => {
                Swal.fire(
                    'Good job!',
                    'Produk berhasil diubah',
                    'success'
                )   

                props.disclosure()
                window.location.reload() 
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
                    <NumberInput max={100} min={10} value={stok} >
                        <NumberInputField  onChange={handleQtyChange} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel mt={3}>Kategori</FormLabel>
                    <Select placeholder='Pilih Kategori' type="kategori" onChange={handleCategChange} >
                        <option value={1} selected={kategori == '1' ? true : false}>Minuman</option>
                        <option value={2} selected={kategori == '2' ? true : false}>Makanan</option>
                    </Select>
                    <FormLabel mt={3} mb={4}>Foto Produk
                        <Container mt={2}> <input type="file" name="file" onChange={handleFileChange} />
                        </Container>
                    </FormLabel>
                    <hr></hr>
                    <hr></hr>
                    <Stack direction='row' spacing={4} align='center' mt={5} mb={5}>
                        <Button colorScheme='teal' variant='solid' type='submit'>
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


export default FormEdit;