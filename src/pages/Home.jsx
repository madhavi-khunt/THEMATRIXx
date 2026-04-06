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
        height: '90vh', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center',
      }}>
        
        {/* Background Images Slider (Absolutely Positioned) */}
        {sliderImages.map((img, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -2, // Pura piche
              opacity: activeStep === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* Content Area */}
        <Container maxWidth="lg" sx={{ pt: '80px' }}> {/* Space for fixed navbar */}
          <Box sx={{ maxWidth: '800px', color: 'white', zIndex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, letterSpacing: 2 }}>
              BE APART OF OUR HISTORY
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '5.5rem' }, lineHeight: 1.1, mb: 4 }}>
              Education to <br /> Create the Future.
            </Typography>
            <Button variant="contained" sx={{ bgcolor: '#5bb1e2', px: 5, py: 2 }}>
              Enroll Now &rarr;
            </Button>
          </Box>
        </Container>
      </Box>
      <Box sx={{ height: '100vh', backgroundColor: '#f5f5f5' }} /> {/* Footer Placeholder */}
      
    </Box>
  );
};
export default Home;