import { Button, Grid, Paper, Typography,Box } from '@mui/material';
import React from 'react';
import bg from '../../../images/top-banner.png'

const Order = (props) => {
    const { name,address,phoneNumber,_id } = props.order;
    const setMyOrder = props.setMyOrder;
    const myOrder = props.myOrder;

    const bgBanner = {
        background:`url(${bg})`,
        backgroundPosition: 'center top',
        
    }
    const handleDelete = id =>{
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = myOrder.filter(order => order._id !== id);
            setMyOrder(remaining);
        })
    }

    return (
        <Grid xs={12} sm={12} >
            <Box>
                <Paper style={bgBanner} sx={{my:2,p:3,backgroundColor:'black',color:'wheat'}}>
                    <Typography>
                        Name:{name}
                    </Typography>
                    <Typography>
                        Product Name: Product
                    </Typography>
                    <Typography>
                        Contact: {phoneNumber}
                    </Typography>
                    <Typography>
                        Location: {address}
                    </Typography>
                    <Button onClick={() => handleDelete(_id)}>Delete</Button>

                </Paper>
            </Box>
        </Grid>
    );
};

export default Order;