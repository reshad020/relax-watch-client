import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';

const Review = () => {
    const [name,setName] = useState('');
    const [review,setReview] = useState('')
    const [value, setValue] = React.useState(2);

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
        review:review,
        rating:value
    }
    const handleReviewSubmit = e =>{
        e.preventDefault();

        axios.post('https://young-springs-44594.herokuapp.com/reviews',reviewDetail)
        .then(res =>{
            alert("added successfully");
            document.getElementById("form").reset()
        })
       
        console.log(reviewDetail);
    }
    return (
        <div>
            
            <Typography variant="h4" sx={{my:2,textAlign:'center'}}>Add a review</Typography>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <form style={{display:'flex',flexDirection:'column',width:'300px'}} onSubmit={handleReviewSubmit} id="form">
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

                    <Typography component="legend">Add rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                    <Button variant="contained" type="submit" sx={{my:3}}>Submit</Button>
                </form>
            </Box>
        </div>
    );
};

export default Review;