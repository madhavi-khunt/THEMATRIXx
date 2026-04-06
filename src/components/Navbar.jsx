import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, useScrollTrigger, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../assets/images/logo1.png'

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
      // Scroll hone par navbar patla ho jayega
      paddingTop: trigger ? "5px" : "15px",
      paddingBottom: trigger ? "5px" : "15px",
    },
  });
}

const Navbar = (props) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* 1. TOP RED BAR */}
      <Box sx={{ 
        bgcolor: '#031040', 
        color: 'white', 
        py: 1.4, 
        position: 'relative', 
        zIndex: 1400, // AppBar se upar rahega starting mein
        display: { xs: 'none', md: 'block' } 
      }}>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
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

      {/* 2. FIXED MAIN NAVBAR */}
      <ElevationScroll {...props}>
        <AppBar 
          position="fixed" 
          sx={{ 
            // Top bar ki height (approx 35px) ke baad start hoga initial state mein
            top: trigger ? 0 : { md: '35px', xs: 0 }, 
            background: 'transparent', 
            boxShadow: 'none',
            color: 'inherit',
            zIndex: 1300 
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ cursor: 'pointer' }}>
                <img src={logo} alt="Logo" style={{ height: '80px', width: 'auto' }} />
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                {['Home', 'Academics', 'Admissions', 'Pages', 'Blog'].map((item) => (
                  <Button 
                    key={item} 
                    color="inherit" 
                    endIcon={item !== 'Home' && <KeyboardArrowDownIcon />}
                    sx={{ textTransform: 'none', fontWeight: 700, fontSize: '1rem' }}
                  >
                    {item}
                  </Button>
                ))}
                <IconButton color="inherit" sx={{ ml: 1 }}><SearchIcon /></IconButton>
                <Button 
                  variant={trigger ? "contained" : "outlined"} 
                  sx={{ 
                    ml: 2, 
                    bgcolor: trigger ? '#5bb1e2' : 'transparent',
                    borderColor: trigger ? '#5bb1e2' : '#fff',
                    color: trigger ? '#fff' : 'inherit',
                    borderRadius: '4px',
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
};

export default Navbar;