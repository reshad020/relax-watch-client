import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../images/top-banner.png'
const Footer = () => {
  const bgBanner = {
    background:`url(${bg})`,
    backgroundPosition: 'center',
    
}
    return (
        <AppBar position="static" color="primary" style={bgBanner}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2019 Gistia
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Footer;