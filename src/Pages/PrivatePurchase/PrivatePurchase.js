import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';



const PrivatePurchase = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const history = useHistory();

    const [singleProduct,setSingleProduct] = useState({});
    useEffect(() =>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setSingleProduct(data))
    },[])

    const { register, handleSubmit,reset , formState: { errors } } = useForm();

    const onSubmit = data =>{
       
     axios.post('http://localhost:5000/orders',data)
     .then(res =>{
        alert("added successfully");
         reset();
         history.replace('/')
     })
  }

    return (
        <Grid container>
            <Grid xs={12} sm={6} sx={{display:'flex',justifyContent:'center',mt:5}}>
            <Card sx={{ maxWidth: 285 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={singleProduct.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {singleProduct.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   {singleProduct.details}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">$ {singleProduct.price}</Button>
                    
                </CardActions>
            </Card>
            </Grid>
            <Grid xs={12} sm={6}>
                <Typography variant="h4" sx={{my:5}}>Confirm Order</Typography>

                <Box sx={{}}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("name", { required: true })} placeholder="Name" style={{width:'400px',height:'40px',marginBottom:'15px'}} />
                    
                    <br />
                    <input type="number" {...register("phoneNumber")} placeholder="Phone Number" style={{width:'400px',height:'40px',marginBottom:'15px'}} />
                    <br />
                    <input {...register("address")} placeholder="Your Address"style={{width:'400px',height:'40px',marginBottom:'15px'}}/>
                    <br />
                    <input type="submit" style={{width:'400px',height:'30px',backgroundColor:'indigo',color:'whitesmoke'}} />
                </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default PrivatePurchase;