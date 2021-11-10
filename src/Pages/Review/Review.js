import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Header from '../Shared/Header/Header';
import axios from 'axios';

const Review = () => {
    const [name,setName] = useState('');
    const [review,setReview] = useState('')

    const getName = e =>{
        const customerName = e.target.value;
        setName(customerName);
    }
    const getReview = e =>{
        const customerReview = e.target.value;
        setReview(customerReview);
    }
    const reviewDetail = {
        name:name,
        review:review
    }
    const handleReviewSubmit = e =>{
        e.preventDefault();

        axios.post('http://localhost:5000/reviews',reviewDetail)
        .then(res =>{
            alert("added successfully");
            document.getElementById("form").reset()
        })
       
        console.log(reviewDetail);
    }
    return (
        <div>
            <Header></Header>
            <Typography variant="h4" sx={{my:5,textAlign:'center'}}>Add a review</Typography>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <form style={{display:'flex',flexDirection:'column',width:'500px'}} onSubmit={handleReviewSubmit} id="form">
                    <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Your Name"
                    variant="filled"
                    size="small"
                    sx={{my:5}}
                    onBlur={getName}
                    />
                    
                    <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    sx={{my:3}}
                    onBlur={getReview}
                    />
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Box>
        </div>
    );
};

export default Review;