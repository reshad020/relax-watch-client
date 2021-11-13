import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../Hooks/useAuth'

const AddProduct = () => {
    const { user } = useAuth();
    const { register, handleSubmit,reset , formState: { errors } } = useForm();
    const onSubmit = data =>{
  
 
  
     axios.post('https://young-springs-44594.herokuapp.com//products',data)
     .then(res =>{
         alert("added successfully");
         reset();
     })
  }
    return (
        <div>
            
            <Typography variant="h4" sx={{textAlign:'center',my:5}}>Add a new product</Typography>

            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input {...register("name", { required: true })} placeholder="Name" style={{width:'400px',height:'40px',marginBottom:'15px'}} />
                <br />
                
                <textarea {...register("details")} placeholder="write details" style={{width:'400px',height:'80px',marginBottom:'15px'}}/>
                <br />
                <input type="number" {...register("price")} placeholder="Price" style={{width:'400px',height:'40px',marginBottom:'15px'}} />
                <br />
                <input {...register("img")} placeholder="Image url"style={{width:'400px',height:'40px',marginBottom:'15px'}}/>
                <br />
                <input type="submit" style={{width:'400px',height:'30px',backgroundColor:'indigo',color:'whitesmoke'}} />
            </form>
            </Box>
        </div>
    );
};

export default AddProduct;