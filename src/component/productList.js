import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import CardProduct from './card';
import { Box } from '@chakra-ui/react'



export default function ProductList() {

    const [products, setProducts] = React.useState([]);

    // function untuk menampilkan daftar produk
     const MenuProduct = () => {
         return(
            <>
            <ProductList />
            </>
         )
     }
     MenuProduct()

     // function untuk get data semua produk
    const getProducts = async () => {
        const products = await axios.get('http://localhost:8000/auth/product/get').then(function (response) {
            //    console.log(response.data);
            setProducts(response.data.data)

        })
    }


    useEffect(() => {
        getProducts()
    }, []);

    //kondisi untuk menampilkan card semua daftar produk
    if (products.length > 0) {
        return (
            products.map((product, index) => {
                console.log(product);
                return (
                        <Box md={4}>
                                <CardProduct data = {product}/>
                         </Box>
                )

            })


            
        )
    } else {
        return (<h3>Tidak ada data</h3>)
    }

}


