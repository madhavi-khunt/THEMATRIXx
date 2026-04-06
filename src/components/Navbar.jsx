import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Box, Container, 
  useScrollTrigger, IconButton, Drawer, List, ListItem, ListItemText, Divider 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/images/logo1.png';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "#ffffff" : "transparent",
      color: trigger ? "#000000" : "#ffffff",
      transition: "0.4s ease-in-out",
      paddingTop: trigger ? "5px" : "10px",
      paddingBottom: trigger ? "5px" : "10px",
    },
  });
}

const Navbar = (props) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['Home', 'Academics', 'Admissions', 'Locations', 'Blog'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* 1. TOP BAR - Hidden on Mobile */}
      <Box sx={{ 
        bgcolor: '#031040', color: 'white', py: 1, 
        display: { xs: 'none', md: 'block' },
        position: 'relative', zIndex: 1400 
      }}>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography variant="caption">info@taeducation.in</Typography>
            <Typography variant="caption">+91 9825063813</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['CAMPUS', 'STUDENTS', 'STAFFS', 'ALUMNI', 'HELP DESK'].map(item => (
              <Typography key={item} sx={{ fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>{item}</Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 2. MAIN NAVBAR */}
      <ElevationScroll {...props}>
        <AppBar position="fixed" sx={{ 
          top: trigger ? 0 : { md: '35px', xs: 0 }, 
          background: 'transparent', boxShadow: 'none', color: 'inherit', zIndex: 1300 
        }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* Logo - Responsive height */}
              <Box sx={{ cursor: 'pointer' }}>
                <img src={logo} alt="Logo" style={{ height: trigger ? '50px' : '70px', width: 'auto', transition: '0.3s' }} />
              </Box>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Button key={item} color="inherit" 
                    endIcon={item !== 'Home' && <KeyboardArrowDownIcon />}
                    sx={{ textTransform: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
                    {item}
                  </Button>
                ))}
                <IconButton color="inherit"><SearchIcon /></IconButton>
                <Button variant={trigger ? "contained" : "outlined"} 
                  sx={{ ml: 2, bgcolor: trigger ? '#5bb1e2' : 'transparent', borderColor: trigger ? '#5bb1e2' : '#fff', color: trigger ? '#fff' : 'inherit' }}>
                  Apply Now
                </Button>
              </Box>

              {/* Mobile Menu Icon */}
              <IconButton color="inherit" sx={{ display: { md: 'none' } }} onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      {/* 3. MOBILE DRAWER */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item} onClick={handleDrawerToggle}>
                <ListItemText primary={item} sx={{ fontWeight: 700 }} />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          <Button fullWidth variant="contained" sx={{ bgcolor: '#5bb1e2' }}>Apply Now</Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;