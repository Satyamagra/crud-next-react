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
                                    <TextField fullWidth id="outlined-basic" label="Title" variant="outlined" value={productDataById?.title ?? ''} />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth type='number' id="outlined-basic" label="Price" variant="outlined" value={productDataById?.price ?? ''} />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth id="outlined-basic" label="Category" variant="outlined" value={productDataById?.category ?? ''} />
                                </Grid>
                                <Grid item>
                                    <TextField fullWidth id="outlined-basic" minRows="2" label="Description" variant="outlined" value={productDataById?.description ?? ''} />
                                </Grid>
                            </Grid>
                        </Container>

                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}
