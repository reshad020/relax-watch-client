import React, { useEffect,useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ManageProduct = () => {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://young-springs-44594.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const handleDelete = id =>{
        const url = `https://young-springs-44594.herokuapp.com/orders/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = products.filter(product => product._id !== id);
            setProducts(remaining);
        })
    }
    return (
        
        <TableContainer component={Paper} sx={{display:'flex',justifyContent:'center'}}>
            <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                    <TableHead >
                    <TableRow sx={{backgroundColor:'black',color:'white'}}>
                        <TableCell sx={{color:'white'}}>Product name</TableCell>
                        <TableCell align="right" sx={{color:'white'}}>Product Details</TableCell>
                        <TableCell align="right" sx={{color:'white'}}>Price</TableCell>
                        <TableCell align="right" sx={{color:'white'}}>Option</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
            {
                products.map(product => <TableRow
                    key={product.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell align="right">{product.details}</TableCell>
                    <TableCell align="right">${product.price}</TableCell>
                    <TableCell align="right"><Button variant="contained" onClick={() => handleDelete(product._id)}>Delete</Button></TableCell>
                    
                  </TableRow>)
            }
                </TableBody>
            </Table>
        </TableContainer>
        
    );
};

export default ManageProduct;