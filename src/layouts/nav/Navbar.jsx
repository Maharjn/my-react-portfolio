import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
        <Typography variant="h4" sx={{ flexGrow: 1 }} cursor="pointer">
          Maha's Portfolio
        </Typography>
            <Link style={{textDecoration: 'none',color:'white',marginRight:20}}  to="/">
                About Me
            </Link>
            <Link style={{textDecoration: 'none',color:'white',marginRight:20}} to="/contact">

                Contact Me
            
            </Link>
            <Link style={{textDecoration: 'none',color:'white',marginRight:20}} to="/portfolio">

                Portfolio
            
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}