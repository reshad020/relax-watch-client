import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = (props) => {
    const {name,details,price,img} = props.product;
    return (
        <Grid sx={12} sm={4} sx={{margin:'20px auto'}}>
            <Card sx={{ maxWidth: 285 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   {details}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">$ {price}</Button>
                    <Button size="small">Purchase Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;