import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import CardProduct from './card';
import { Box } from '@chakra-ui/react'



export default function ProductList() {
    const [products, setProducts] = React.useState([]);

     const MenuProduct = () => {
         return(
            <>
            <ProductList />
            </>
         )
     }
     MenuProduct()

    const getProducts = async () => {
        const products = await axios.get('http://localhost:8000/auth/product/get').then(function (response) {
            //    console.log(response.data);
            setProducts(response.data.data)

        })
    }


    useEffect(() => {
        getProducts()
    }, []);

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


