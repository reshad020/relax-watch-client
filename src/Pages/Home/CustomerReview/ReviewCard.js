import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const ReviewCard = (props) => {
    const {name,review} = props.review;

    return (
        <Grid xs={12} sm={4}sx={{margin:'auto auto'}}>
            <Paper sx={{width:'300px',p:3}}>
                <Typography variant="h5">
                    {name}
                </Typography>
                <p>
                    "{review}"
                </p>
            </Paper>
        </Grid>
    );
};

export default ReviewCard;