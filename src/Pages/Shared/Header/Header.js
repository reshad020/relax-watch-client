import react from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Avatar } from '@mui/material';
import bg from '../../../images/top-banner.png'

const Header =() => {
  const bgBanner = {
    background:`url(${bg})`,
    backgroundPosition: 'center',
    
}
  const { user,logOut } =useAuth();
    return(
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={bgBanner} sx={{mb:3}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Relax Watch
          </Typography>
          
          {
            user.email?
            <div style={{display:'flex'}}>
               <Link to="/dashboard">
              <Button color="inherit" sx={{textDecoration:'none',color:'white'}}>Dashboard</Button>
              </Link>
              <Avatar alt={user.email} src='nothing' sx={{width:'30px',height:'30px'}}></Avatar>
              <Button color="inherit" sx={{textDecoration:'none',color:'white'}} onClick={logOut}>Logout</Button>
            </div>
            :
            <Link to="/login">
              <Button color="inherit" sx={{textDecoration:'none',color:'white'}}>Login</Button>
            </Link>
          }
         
          
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Header;