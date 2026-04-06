import React from 'react';
import { Box, Container, Typography, TextField, Button, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../assets/images/logo1.png';

const Footer = () => {
  const footerLinkStyle = {
    display: 'block',
    color: '#666',
    textDecoration: 'none',
    mb: 1.5,
    fontSize: '0.9rem',
    transition: '0.3s',
    '&:hover': { color: '#5bb1e2', transform: 'translateX(5px)' }
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    minWidth: { xs: '100%', sm: '200px' }, // Mobile pe full width, desktop pe fixed
    flex: 1
  };

  return (
    <Box component="footer" sx={{ bgcolor: '#fdfbf7', pt: 10, pb: 4, borderTop: '1px solid #eee' }}>
      <Container maxWidth="lg">
        
        {/* MAIN FLEX CONTAINER */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4, 
          justifyContent: 'space-between',
          mb: 6
        }}>
          
          {/* Column 1: Brand (Flexible Width) */}
          <Box sx={{ ...columnStyle, flex: 1.5, minWidth: '250px' }}>
           {/* Footer.jsx ke andar */}
<Box sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
  <img 
    src={logo} 
    alt="Footer Logo" 
    style={{ 
      // Mobile pe 80px, Desktop pe 110px
      height: 'auto', 
      width: '100%',
      maxWidth: '150px', // Max size cap
      display: 'block'
    }} 
  />
</Box>
            <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
              Your Journey to Global Success.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#031040' }}>
              Got Questions? Call us
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#031040' }}>
              +91 9825063813
            </Typography>
          </Box>

          {/* Column 2: About */}
          <Box sx={columnStyle}>
            <Typography variant="h6" sx={{ color: '#5bb1e2', fontWeight: 700, mb: 2 }}>About</Typography>
            {['About Us', 'Courses', 'News & Blogs', 'Become a Teacher', 'Events'].map(text => (
              <Typography key={text} component="a" href="#" sx={footerLinkStyle}>{text}</Typography>
            ))}
          </Box>

          {/* Column 3: Quick Links */}
          <Box sx={columnStyle}>
            <Typography variant="h6" sx={{ color: '#5bb1e2', fontWeight: 700, mb: 2 }}>Quick links</Typography>
            {['Students', 'Admission', 'Faculty & Staffs', 'Alumni', 'Visit'].map(text => (
              <Typography key={text} component="a" href="#" sx={footerLinkStyle}>{text}</Typography>
            ))}
          </Box>

          {/* Column 4: Newsletter (Wider Column) */}
          <Box sx={{ ...columnStyle, flex: 2, minWidth: '300px' }}>
            <Typography variant="h6" sx={{ color: '#5bb1e2', fontWeight: 700, mb: 2 }}>Our Newsletter</Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 3 }}>
              Enter your email and we'll send you more information.
            </Typography>
            
            {/* Newsletter Input Box (Flex) */}
            <Box sx={{ 
              display: 'flex', 
              bgcolor: '#fff', 
              p: 0.5, 
              borderRadius: '5px', 
              border: '1px solid #ddd',
              mb: 3
            }}>
              <TextField 
                variant="standard" 
                placeholder="Your email" 
                fullWidth 
                InputProps={{ disableUnderline: true, sx: { px: 2 } }} 
              />
              <Button variant="contained" sx={{ bgcolor: '#5bb1e2', textTransform: 'none', px: 3 }}>
                Subscribe
              </Button>
            </Box>

            {/* Social Icons (Flex) */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[<FacebookIcon />, <TwitterIcon />, <LinkedInIcon />, <YouTubeIcon />].map((icon, i) => (
                <IconButton key={i} sx={{ bgcolor: '#eee', '&:hover': { bgcolor: '#5bb1e2', color: '#fff' } }}>
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>

        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* COPYRIGHT FLEX BOX */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          textAlign: 'center' 
        }}>
          <Typography variant="caption" sx={{ color: '#888' }}>
            © 2026 Tirth Abroad Education. All rights reserved.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;