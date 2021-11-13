import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';

import AllProduct from './AllProduct';

const Explore = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('https://young-springs-44594.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
       <div  style={{backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)'}}>
           <Header></Header>
            <Typography variant='h4' sx={{textAlign:'center',marginX:'auto',my:5,color:'wheat'}}>Watch Collection</Typography>
            <Grid container sx={{mt:'30px'}}>
           {
               products.map(product => <AllProduct product={product}></AllProduct>)
           }
        </Grid>
        </div>
    );
};

export default Explore;