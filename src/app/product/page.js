"use client";
import { Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from "@mui/system";

export default function Product() {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        getAllProducts()

        return () => {
            setProductData([])
        }
    }, [])

    const getAllProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            if (response.status === 200) {
                console.log("Products fetched successfully:", response.data);
                setProductData(response.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    return (
        <Box>

            Product List

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell >Image</TableCell>
                            <TableCell >Title</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >Discription</TableCell>
                            <TableCell >Category</TableCell>
                            <TableCell >Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productData.length > 0 && productData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>
                                    <img src={row.image} height={50} width={50} alt="Image" />
                                </TableCell>
                                <TableCell >{row.title}</TableCell>
                                <TableCell >{row.price}</TableCell>
                                <TableCell >{row.description}</TableCell>
                                <TableCell >{row.category}</TableCell>
                                <TableCell >
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <IconButton aria-label="delete" size="small">
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="edit" size="small">
                                            <EditIcon fontSize="inherit" />
                                        </IconButton>
                                    </Box>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box >
    );
}