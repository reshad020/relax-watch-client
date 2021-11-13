import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Order from './Order';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder,setMyOrder] = useState([]);
    console.log(user.email)
    useEffect(() =>{
        fetch(`https://young-springs-44594.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyOrder(data)
            console.log(data)
        } )
    },[])
    return (
        
            <Grid container sx={{p:5}} >
                {
                    myOrder.map(order => <Order key={order._id} order={order} myOrder={myOrder} setMyOrder={setMyOrder}></Order>)
                }
            </Grid>
        
    );
};

export default MyOrders;