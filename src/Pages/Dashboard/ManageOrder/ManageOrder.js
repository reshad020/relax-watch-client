import React, { useEffect,useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ManageOrder = () => {
    const [orders,setOrders] = useState([]);
    useEffect(() =>{
        fetch('https://young-springs-44594.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])

    const handleDelete = id =>{
        const url = `https://young-springs-44594.herokuapp.com/orders/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
        })
    }
    return (
        <TableContainer component={Paper} sx={{display:'flex',justifyContent:'center'}}>
            <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                    <TableHead >
                    <TableRow sx={{backgroundColor:'black',color:'white'}}>
                        <TableCell sx={{color:'white'}}>Customer Name</TableCell>
                        <TableCell align="right" sx={{color:'white'}}>Contact</TableCell>
                        <TableCell align="right" sx={{color:'white'}}>Address</TableCell>
                        <TableCell align="right" sx={{color:'white'}}>Option</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
            {
                orders.map(order => <TableRow
                    key={order.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {order.name}
                    </TableCell>
                    <TableCell align="right">{order.phoneNumber}</TableCell>
                    <TableCell align="right">{order.address}</TableCell>
                    <TableCell align="right"><Button variant="contained" onClick={() => handleDelete(order._id)}>Delete</Button></TableCell>
                    
                  </TableRow>)
            }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageOrder;