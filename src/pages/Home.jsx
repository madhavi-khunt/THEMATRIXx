import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import bg1 from '../assets/images/bg1.jpg';
import bg2 from '../assets/images/bg2.jpg';
import bg3 from '../assets/images/bg3.jpg';

const sliderImages = [bg1, bg2, bg3];

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Box sx={{ 
        height: { xs: '80vh', md: '90vh' }, // Shorter on mobile
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center',
      }}>
        
        {/* Background Images Slider */}
        {sliderImages.map((img, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2,
              opacity: activeStep === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* Content Area */}
        <Container maxWidth="lg">
          <Box sx={{ 
            maxWidth: '800px', 
            color: 'white', 
            zIndex: 1,
            textAlign: { xs: 'center', md: 'left' } // Center text on mobile
          }}>
            <Typography variant="subtitle1" 
              sx={{ 
                fontWeight: 600, mb: 1, letterSpacing: 2,
                fontSize: { xs: '0.8rem', md: '1rem' } 
              }}>
              BE APART OF OUR HISTORY
            </Typography>
            
            <Typography variant="h1" 
              sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '2.2rem', sm: '3.5rem', md: '5.5rem' }, 
                lineHeight: 1.2, mb: 4 
              }}>
              Education to <br /> Create the Future.
            </Typography>
            
            <Button variant="contained" 
              sx={{ 
                bgcolor: '#5bb1e2', 
                px: { xs: 3, md: 5 }, 
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}>
              Enroll Now &rarr;
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Next Section Placeholder */}
      <Box sx={{ py: 10, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
         <Typography variant="h4">Next Content Section</Typography>
      </Box>
    </Box>
  );
};
export default Home;