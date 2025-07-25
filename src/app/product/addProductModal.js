import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Form from 'next/form'
import { Container, Grid, TextField } from '@mui/material';
import DeleteDialogModal from './deleteDialogModal';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function AddProductModal(props) {
    const { handleClose, openModal = false, productDataById = null } = props;
    console.log("AddProductModal props:", props);

    async function onSubmit(event) {
        event.preventDefault()
        console.log("Form submitted with data:", event.target);
        // const formData = new FormData(event.target)
        // const response = await fetch('/api/submit', {
        //     method: 'POST',
        //     body: formData,
        // })

        // // Handle response if necessary
        // const data = await response.json()
        // // ...
    }

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openModal}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Product Form
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Form >
                        <Container>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <TextField fullWidth id="Title" name="Title" label="Title" variant="outlined" />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth type='number' name="Price" id="Price" label="Price" variant="outlined" value={productDataById?.price ?? ''} />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth id="Category" name="Category" label="Category" variant="outlined" value={productDataById?.category ?? ''} />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth id="Description" name="Description" minRows="2" label="Description" variant="outlined" value={productDataById?.description ?? ''} />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth id="Image-URL" name="Image URL" label="Image URL" variant="outlined" value={productDataById?.image ?? ''} />
                                </Grid>
                            </Grid>
                        </Container>

                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus >
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
