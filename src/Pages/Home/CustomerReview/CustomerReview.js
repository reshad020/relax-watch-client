import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

import ReviewCard from './ReviewCard';

const CustomerReview = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetch('https://young-springs-44594.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

  return (
   <Container sx={{my:5}}>
       <h1 style={{textAlign:'center'}}>Customer Feedback</h1>
        <Grid container>
        {
            reviews.map(review => <ReviewCard review={review}></ReviewCard>)
        }
    </Grid>
   </Container>
  );
};
    
    
export default CustomerReview;