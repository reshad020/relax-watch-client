import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const ExtraSection = () => {
    return (
    <Container sx={{mt:5}}>
        <Typography sx={{textAlign:'center',fontWeight:'600',margin:'50px auto',fontSize:'20px'}}>Stories by- Relax Watch Writers</Typography>
            <Grid container spacing={2} >
                <Grid xs={12} md={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2017/10/Phillips-Watch-Auction-gear-patrol-lead-full.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Antique Watch from 1800s
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus quasi doloremque hic corrupti incidunt quidem similique enim minus possimus.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Avatar alt="Remy Sharp" src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/s206x206/221552437_359880775580196_6898417274898338819_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeH-mj1QOxAf2NBhP1TIpNhAAz2L1knHhU0DPYvWSceFTV2IccQO5IuY_WvHFVPcpP-s_7Yo786wj9Ui9_Mgc_04&_nc_ohc=867Mda1tZisAX8IOS1u&tn=BFN210AQLSPjc7z3&_nc_ht=scontent.fdac5-2.fna&oh=149afa5e6e5d35a82793a1d6fc0ba023&oe=618F4666" />
                        <Button size="small">Shad Ahmed</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/paul-newman-rolex-1567591928.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Most expensive Watches in history
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati delectus ad accusamus totam placeat.
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Avatar alt="Remy Sharp" src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/p206x206/185555896_1404700263213557_4309245603712043137_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeHyGafnhInnG9mGY8V4t02sC1Pgp50qcX8LU-CnnSpxf3qv7icShhBzl70bvhbjB7QCKZGlawvpDu0tdiOPDY3Z&_nc_ohc=OyPUb0uTO04AX9fxcxD&tn=BFN210AQLSPjc7z3&_nc_ht=scontent.fdac5-1.fna&oh=ef050b99cd117e3c623dcb35f1b70f2f&oe=61B12CF0" />
                        <Button size="small">Nowshad Ahmed</Button>
                    </CardActions>
                    </Card>
                </Grid>
        </Grid>

    </Container>
        
    );
};

export default ExtraSection;