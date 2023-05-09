import React from 'react';
import CardProduct from './card';
import { GridItem, Grid } from '@chakra-ui/react'



export default function ProductList(props) {
    //kondisi untuk menampilkan card semua daftar produk
    if (props.dataProducts.length > 0) {

        return (
            <Grid templateColumns='repeat(3, 1fr)' >

             {props.dataProducts.map((product, index) => {

              return (
                <div>

                    <GridItem  sm={6} key={product.product_id} width='80%'>
                        <CardProduct data={product} />
                    </GridItem>
                </div>
                )
         })}
            </Grid>

        )
    } else {
        return (<h3>Tidak ada data</h3>)
    }
}


