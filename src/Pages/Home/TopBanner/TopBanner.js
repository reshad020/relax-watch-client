import React from 'react';
import { Timeline } from '@mui/lab';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WatchIcon from '@mui/icons-material/Watch';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import LinkedCameraRoundedIcon from '@mui/icons-material/LinkedCameraRounded';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import bg from '../../../images/top-banner.png';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';





const TopBanner = () => {
    const bgBanner = {
        background:`url(${bg})`,
        backgroundPosition: 'center',
        height:'600px'
    }
    return (
        <Grid container spacing={2} style={bgBanner}>
            <Grid  xs={12} md={6} sx={{margin:'auto auto'}}>
                <Paper
                    component="form"
                    sx={{  display: 'flex', alignItems: 'center',margin:'auto auto', width: 400 }}
                    >
                    
                    <InputBase
                        sx={{ml: 1, flex: 1 }}
                        placeholder="Search For your favourite watch"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>

                
                
                
            </Grid>
        <Grid  xs={12} md={6} sx={{margin:'auto auto'}}>
                <Timeline position="alternate">
                    
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0',color:'wheat',fontWeight:'500'}}
                    align="right"
                    variant="body2"
                    
                    >
                    Be Stylish
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <WatchIcon color="success" />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" sx={{color:'whitesmoke',fontWeight:'700'}}>
                        Buy Watches
                    </Typography>
                    <Typography sx={{color:'gray',fontWeight:'500',fontSize:'12px'}}>Because It gives you a premium look.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0',color:'wheat',fontWeight:'500'}}
                    variant="body2"
                    
                    >
                    Just order it
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <ShoppingCartTwoToneIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" sx={{color:'whitesmoke',fontWeight:'700'}}>
                        Place order with one tap
                    </Typography>
                    <Typography sx={{color:'gray',fontWeight:'500',fontSize:'12px'}}>Because it's limited edition</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="success" >
                        <LinkedCameraRoundedIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" sx={{color:'whitesmoke',fontWeight:'700'}}>
                        Click more pictures
                    </Typography>
                    <Typography sx={{color:'gray',fontWeight:'500',fontSize:'12px'}}>Because now you look awesome!</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" sx={{color:'whitesmoke',fontWeight:'700'}}>
                        Repeat
                    </Typography>
                    <Typography sx={{color:'gray',fontWeight:'500',fontSize:'12px'}}>Because this is the life you love!</Typography>
                    </TimelineContent>
                </TimelineItem>

                </Timeline>
            </Grid>
            
        </Grid>
    );
};

export default TopBanner;