import { Avatar, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/top-banner.png'

const ReviewCard = (props) => {
    const bgBanner = {
        background:`url(${bg})`,
        backgroundPosition: 'center top',
        
    }
    const {name,review,rating} = props.review;

    return (
        <Grid xs={12} sm={4}sx={{margin:'15px auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Paper sx={{width:'300px',p:3}} style={bgBanner}>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',my:2}}>
                <Avatar
                    alt={name}
                    
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56,backgroundColor:'tomato' }}
                    />
                </Box>
                <Typography variant="h5" sx={{color:'wheat'}}>
                    {name}
                </Typography>
                <p style={{color:'skyblue'}}>
                    "{review}"
                </p>
                <Rating
                    name="read-only"
                    value={rating}
                    
                />

            </Paper>
        </Grid>
    );
};

export default ReviewCard;