"use client";
import { Button, Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from "@mui/system";
import AddProductModal from "./addProductModal";

export default function Product() {

    const [productData, setProductData] = useState([])
    const [productDataById, setProductDataById] = useState(null)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        getAllProducts()

        return () => {
            setProductData([])
            setProductDataById(null);
            setOpen(false);
        }
    }, [])

    const handleClickOpen = () => {
        console.log("handleClickOpen called");
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setProductDataById(null);

    };

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

    const handleClickDelete = () => {
        console.log("Delete button clicked");
        // Implement delete functionality here
    }
    const handleClickEdit = (productId) => {
        console.log("Edit button clicked");
        getAllProductsById(productId)
        // Implement Edit functionality here
    }

    const getAllProductsById = async (id) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            if (response.status === 200) {
                console.log("Product fetched successfully:", response.data);
                setProductDataById(response.data);
                handleClickOpen();

                // Handle the fetched product data
            }
        } catch (error) {
            console.error("Error fetching product by ID:", error);
        }
    }

    return (
        <Box component={Paper}>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Product List</h1>
                <Button variant="outlined" size="small" onClick={handleClickOpen}>
                    Add Product
                </Button>
                <AddProductModal openModal={open} handleClose={handleClose} productDataById={productDataById}></AddProductModal>
            </Box>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Discription</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Action</TableCell>

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
                                        <IconButton aria-label="delete" size="small" onClick={handleClickDelete}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                        <IconButton aria-label="edit" size="small" onClick={() => handleClickEdit(row.id)}>
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