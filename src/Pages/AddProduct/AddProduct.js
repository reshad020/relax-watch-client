import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Header from '../Shared/Header/Header';

const AddProduct = () => {
    const { register, handleSubmit,reset , formState: { errors } } = useForm();
    const onSubmit = data =>{
  
  //     fetch('http://localhost:4000/services')
  //     .then(res=>res.json())
  //     .then(data => console.log(data));
  
  //    console.log(data);
  
     axios.post('http://localhost:5000/products',data)
     .then(res =>{
         alert("added successfully");
         reset();
     })
  }
    return (
        <div>
            <Header></Header>
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