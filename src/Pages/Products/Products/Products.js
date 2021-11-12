import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import bg from '../../../images/top-banner.png'

const Products = () => {
    const bgBanner = {
        background:`url(${bg})`,
        backgroundPosition: 'center',
        
        
    }

    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // const loadProducts = async () =>{
    //     const res = await fetch('http://localhost:5000/products');
    //     const data = await res.json();
    //     setProducts(data);
    // }
    // loadProducts();

    // fetch('http://localhost:5000/products')
    // .then(res => res.json())
    // .then(data => 
    return (
        <Container style={bgBanner} >
            <Typography variant='h4' sx={{textAlign:'center',marginX:'auto',my:5,color:'wheat'}}>Watch Collection</Typography>
            <Grid container sx={{mt:'30px'}}>
           {
               products.map(product => <Product product={product}></Product>)
           }
        </Grid>
        </Container>
    );
};

export default Products;