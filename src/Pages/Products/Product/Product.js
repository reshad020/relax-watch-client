import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const bgStyle={
        backgroundColor:'rgba(22,44,55,0.1)'
    }
    
    const { name,details,price,img,_id } = props.product;
    return (
        <Grid sx={12} sm={4} sx={{margin:'15px auto'}}>
            <Card sx={{ maxWidth: 285,margin:'auto auto',height:'420px' }} style={bgStyle}>
                <CardMedia
                    component="img"
                    height="250"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:'thistle'}}>
                    {name}
                    </Typography>
                    <Typography variant="body2" sx={{color:'goldenrod'}}>
                   {details}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">$ {price}</Button>
                    <Link to={`/purchase/${_id}`} sx={{textDecoration:'none',}}> <Button size="small" sx={{textDecoration:'none',backgroundColor:' #44a08d',color:'ThreeDLightShadow', background: 'linear-gradient(to right, #44a08d, #093637)',fontSize:'12px',fontWeight:'700',p:1}}>Purchase Now</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;