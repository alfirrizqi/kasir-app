import React from 'react';
import CardProduct from './card';
import { Box } from '@chakra-ui/react'



export default function ProductList(props) {
    //kondisi untuk menampilkan card semua daftar produk
    if (props.dataProducts.length > 0) {
        return (
            props.dataProducts.map((product, index) => {

                return (
                    <Box md={4} key={product.product_id}>
                        <CardProduct data={product} />
                    </Box>
                )

            })
        )
    } else {
        return (<h3>Tidak ada data</h3>)
    }
}


