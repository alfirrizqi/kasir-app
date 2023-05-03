import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Box } from '@chakra-ui/react'



export default function Category() {


    const [categories, setCategories] = useState([]);

    const ListCategories = () => {
        return (
            <Box md={2} mt-5>
                <h1><strong>Daftar Kategori</strong></h1>
                <hr />
                <Category />
            </Box>
        )
    }
    ListCategories()


    const getCategory = async () => {
        try {
            const res = await axios.get("http://localhost:8000/auth/category/get");
            setCategories(res.data.data)
        } catch (err) {
            console.log(err);
        }
    }




    useEffect(() => {
        getCategory()
    }, [])

    return (
        categories?.map((Category, index) => {
            return (
                <div className='Category' key={Category.Category_id}>
                    <h1 className="Category_name">{Category.name}</h1>
                </div>
            )
        })
    )
}