import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Stack, Avatar, IconButton  } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import bgImage from '../assets/images/bg1.jpg'; // Aapki building wali image


import bg1 from '../assets/images/bg1.jpg';
import bg2 from '../assets/images/bg2.jpg';
import bg3 from '../assets/images/bg3.jpg';
import about from '../assets/images/about-thumb-1.jpg';
import program1 from '../assets/images/program1.jpg';
import program2 from '../assets/images/program2.jpg';
import program3 from '../assets/images/program3.jpg';

const sliderImages = [bg1, bg2, bg3];

// Dummy Data
const moduleData = [
  { title: "Major in Economics", category: "Economics", img: program1 },
  { title: "Business Media", category: "Business & Administration", img: program2 },
  { title: "Public Speaking", category: "Sciences", img: program3 },
  { title: "Digital Marketing", category: "Business", img: program1 },
];

const blogPosts = [
  {
    category: "Software",
    title: "Unlocking the power of strategies effective.",
    author: "admin",
    date: "August 11, 2024",
    img: program1
  },
  {
    category: "Education",
    title: "The role of technology in modern classrooms enhancing.",
    author: "admin",
    date: "August 11, 2024",
    img: program2
  }
];

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
{/* --- NEW ABOUT SECTION START --- */}
<Box 
  sx={{ 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    py: { xs: 8, md: 15 }, 
    backgroundColor: '#fcfbf7', 
    position: 'relative' 
  }}
>
  <Box 
    sx={{ 
      width: '100%', 
      maxWidth: '1200px', // Stats Section ke barabar width
      px: { xs: 2, md: 0 },
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      gap: { xs: 8, md: 6 }, 
      alignItems: 'center' 
    }}
  >
    
    {/* Left Side: Single Image with Experience Badge */}
    <Box sx={{ 
      flex: 1, 
      position: 'relative', 
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start' // Content ke sath align karne ke liye
    }}>
      <Box sx={{ position: 'relative', width: { xs: '100%', md: '90%' } }}>
        <Box 
          component="img" 
          src={about}
          alt="About Us"
          sx={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '20px', 
            boxShadow: '20px 20px 60px rgba(0,0,0,0.05)',
            display: 'block'
          }} 
        />

        {/* Floating Experience Badge */}
        <Box sx={{ 
          position: 'absolute', 
          bottom: '30px', 
          right: { xs: '10px', md: '-20px' }, 
          bgcolor: 'white', 
          p: 3, 
          borderRadius: '15px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderLeft: '5px solid #5bb1e2'
        }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#031040', lineHeight: 1 }}>
            27
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#555', lineHeight: 1.2 }}>
            Years of <br /> Experience
          </Typography>
        </Box>
      </Box>
    </Box>

    {/* Right Side: Content */}
    <Box sx={{ flex: 1 }}>
      <Typography 
        variant="subtitle2" 
        sx={{ 
          color: '#5bb1e2', 
          fontWeight: 700, 
          mb: 1, 
          textTransform: 'uppercase',
          letterSpacing: 1
        }}
      >
        About Our Center
      </Typography>
      
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 800, 
          color: '#031040', 
          mb: 3, 
          lineHeight: 1.2,
          fontSize: { xs: '2.2rem', md: '3rem' }
        }}
      >
        High Stake <br />
        <span style={{ color: '#5bb1e2' }}>Test Center</span>
      </Typography>

      <Typography 
        variant="body1" 
        sx={{ 
          color: '#444', 
          mb: 4, 
          lineHeight: 1.8, 
          borderLeft: '4px solid #5bb1e2', 
          pl: 2.5 
        }}
      >
        <strong>Tirth Abroad Education</strong> is an authorized centre for conducting the 
        LanguageCert Academic English Test...
      </Typography>

      {/* Features List */}
      <Stack spacing={3} sx={{ mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          <Box sx={{ bgcolor: '#eef8ff', p: 1.5, borderRadius: '50%', display: 'flex', color: '#5bb1e2' }}>
             <CheckCircleIcon fontSize="medium" />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#031040' }}>Building Trust</Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>We are committed to building trust</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          <Box sx={{ bgcolor: '#eef8ff', p: 1.5, borderRadius: '50%', display: 'flex', color: '#5bb1e2' }}>
             <CheckCircleIcon fontSize="medium" />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#031040' }}>Trusted by Students</Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>Most trusted & recommended by students</Typography>
          </Box>
        </Box>
      </Stack>

      <Button 
        variant="contained" 
        sx={{ 
          bgcolor: '#031040', 
          px: 5, 
          py: 2, 
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: '8px',
          textTransform: 'none',
          '&:hover': { bgcolor: '#5bb1e2', transform: 'translateY(-2px)', transition: 'all 0.3s' } 
        }}
      >
        Book an Appointment &rarr;
      </Button>
    </Box>

  </Box>
</Box>
{/* --- NEW ABOUT SECTION END --- */}

{/* --- STATS COUNTER SECTION START --- */}
<Box 
  sx={{ 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    mt: -0, 
    mb: 10, 
    position: 'relative', 
    zIndex: 10, 
    px: { xs: 2, md: 0 } 
  }}
>
  <Box 
    sx={{ 
      backgroundColor: '#031040', // Aapka original Dark Blue theme
      borderRadius: '15px', 
      padding: { xs: '30px 10px', md: '45px 0' },
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
      width: '100%', 
      maxWidth: '1200px', 
    }}
  >
    {/* Stat 1 */}
    <Box sx={{ textAlign: 'center', flex: 1 }}>
      <Typography variant="h2" sx={{ color: 'white', fontWeight: 600, mb: 1, fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
        100 <span style={{ color: '#5bb1e2' }}>+</span>
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1 }}>
        Countries accepting exams
      </Typography>
    </Box>

    {/* Divider */}
    <Box sx={{ width: '1px', height: '80px', bgcolor: 'rgba(255,255,255,0.15)', display: { xs: 'none', md: 'block' } }} />

    {/* Stat 2 */}
    <Box sx={{ textAlign: 'center', flex: 1 }}>
      <Typography variant="h2" sx={{ color: 'white', fontWeight: 600, mb: 1, fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
        200 <span style={{ color: '#5bb1e2' }}>+</span>
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1 }}>
        Countries and territories
      </Typography>
    </Box>

    {/* Divider */}
    <Box sx={{ width: '1px', height: '80px', bgcolor: 'rgba(255,255,255,0.15)', display: { xs: 'none', md: 'block' } }} />

    {/* Stat 3 */}
    <Box sx={{ textAlign: 'center', flex: 1 }}>
      <Typography variant="h2" sx={{ color: 'white', fontWeight: 600, mb: 1, fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
        7 <span style={{ fontSize: '1.8rem' }}>lkh</span> <span style={{ color: '#5bb1e2' }}>+</span>
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1 }}>
        Exams delivered worldwide
      </Typography>
    </Box>

    {/* Divider */}
    <Box sx={{ width: '1px', height: '80px', bgcolor: 'rgba(255,255,255,0.15)', display: { xs: 'none', md: 'block' } }} />

    {/* Stat 4 */}
    <Box sx={{ textAlign: 'center', flex: 1 }}>
      <Typography variant="h2" sx={{ color: 'white', fontWeight: 600, mb: 1, fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
        3000 <span style={{ color: '#5bb1e2' }}>+</span>
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1 }}>
        Recognising institutions
      </Typography>
    </Box>
  </Box>
</Box>
{/* --- STATS COUNTER SECTION END --- */}

{/* --- SECTION TITLE START --- */}
<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 10 }}>
      
      {/* --- 1. SECTION TITLE START --- */}
      <Box sx={{ width: '100%', maxWidth: '1200px', px: { xs: 2, md: 0 }, display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Box sx={{ display: 'inline-block', position: 'relative' }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800, 
              fontSize: { xs: '1.8rem', md: '3.5rem' }, 
              lineHeight: 1.2,
              fontFamily: "'Playfair Display', serif", 
              display: 'flex',
              gap: 2, 
              flexWrap: 'wrap', 
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Box component="span" sx={{ color: '#5bb1e2' }}>LanguageCert</Box>
            <Box component="span" sx={{ color: '#031040' }}>Exam Modules</Box>
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 0.5, ml: 2 }}>
            <svg width="180" height="13" viewBox="0 0 180 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '150px', height: 'auto' }}>
              <path d="M173.163 12.3756C97.1838 -3.8242 30.6496 5.67799 7.32494 12.2553C5.30414 12.8252 2.43544 12.6722 0.917529 11.9135C-0.600387 11.11549 -0.192718 10.0779 1.82808 9.50807C27.5427 2.25675 98.002 -7.60121 177.683 9.38783C179.881 9.85641 180.65 10.9051 179.402 11.7301C178.154 12.5552 175.361 12.8442 173.163 12.3756Z" fill="#5bb1e2" />
            </svg>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '0.85rem', md: '1.1rem' }, fontWeight: 500, fontFamily: 'sans-serif' }}>
              English certification for international success.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* --- SECTION TITLE END --- */}

      {/* --- 2. SWIPER SLIDER START --- */}
      <Box sx={{ width: '100%', maxWidth: '1200px', px: { xs: 2, md: 0 } }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '60px' }}
        >
          {moduleData.map((item, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ 
                bgcolor: '#f8f7f2', // Light cream color from your image
                borderRadius: '24px', 
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }
              }}>
                {/* Card Image */}
                <Box component="img" src={item.img} sx={{ width: '100%', height: '230px', objectFit: 'cover', p: 1.5, borderRadius: '35px' }} />

                {/* Card Body */}
                <Box sx={{ p: 3, pt: 1, flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#031040', mb: 2 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 3, lineHeight: 1.7 }}>
                    The Economics Major can be combined with a Major in another subject in order Double Major Degree.
                  </Typography>

                  <Stack direction="row" spacing={1} alignItems="center" sx={{ color: '#031040', mb: 3 }}>
                    <SchoolIcon fontSize="small" />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{item.category}</Typography>
                  </Stack>

                  <Button 
                    fullWidth 
                    variant="contained" 
                    sx={{ 
                      bgcolor: 'white', color: '#031040', fontWeight: 700, py: 1.5, borderRadius: '12px', textTransform: 'none', boxShadow: 'none', border: '1px solid rgba(0,0,0,0.05)',
                      '&:hover': { bgcolor: '#5bb1e2', color: 'white', border: '1px solid #5bb1e2' }
                    }}
                  >
                    Apply Now
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- 3. BOTTOM FOOTER LINK --- */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Explore the most appropriate program. {' '}
            <Box component="span" sx={{ color: '#5bb1e2', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline', '&:hover': { color: '#031040' } }}>
              View all Programs →
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* Global CSS for Swiper Dots to match theme */}
      <style>{`
        .swiper-pagination-bullet { width: 10px; height: 10px; }
        .swiper-pagination-bullet-active { background: #5bb1e2 !important; width: 25px; border-radius: 5px; }
      `}</style>
    </Box>
{/* --- SECTION TITLE END --- */}

{/* --- SECTION Upcoming Events --- */}
<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', py: 8 }}>
      <Box sx={{ width: '100%', maxWidth: '1200px', px: { xs: 2, md: 0 } }}>
        
        {/* --- TOP HEADER: Title & Button --- */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 3,
            mb: 4
          }}
        >
          {/* Left: Title Area */}
          <Box sx={{ position: 'relative' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '2rem', md: '3.5rem' }, 
                color: '#031040', 
                lineHeight: 1.1,
                fontFamily: "'Playfair Display', serif" 
              }}
            >
              Recent & <br />
              Upcoming <span style={{ color: '#5bb1e2' }}>Events</span>
            </Typography>

            {/* SVG Curve - Exactly under "Events" */}
            <Box sx={{ display: 'flex', ml: { xs: 0, md: 25 }, mt: 0.5 }}>
               <svg width="150" height="12" viewBox="0 0 180 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M173.163 12.3756C97.1838 -3.8242 30.6496 5.67799 7.32494 12.2553C5.30414 12.8252 2.43544 12.6722 0.917529 11.9135C-0.600387 11.11549 -0.192718 10.0779 1.82808 9.50807C27.5427 2.25675 98.002 -7.60121 177.683 9.38783C179.881 9.85641 180.65 10.9051 179.402 11.7301C178.154 12.5552 175.361 12.8442 173.163 12.3756Z" fill="#5bb1e2" />
               </svg>
            </Box>
          </Box>

          {/* Right: Button */}
          <Button 
            variant="contained" 
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              bgcolor: '#031040', 
              color: 'white', 
              px: 4, 
              py: 1.8, 
              borderRadius: '8px',
              fontWeight: 700,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': { bgcolor: '#5bb1e2' }
            }}
          >
            See More Events
          </Button>
        </Box>

        {/* --- BOTTOM: No Event Found Bar --- */}
        <Box 
          sx={{ 
            width: '100%', 
            bgcolor: '#fdf2f2', // Light reddish background from image
            p: 2.5, 
            borderRadius: '4px',
            borderLeft: '4px solid #5bb1e2', // Theme accent color
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ color: '#555', fontWeight: 500, fontSize: '1rem' }}
          >
            No Event Found
          </Typography>
        </Box>

      </Box>
    </Box>
{/* --- SECTION Upcoming Events --- */}

{/* --- SECTION Testimonial --- */}
    <Box 
      sx={{ 
        width: '100%', 
        height: { xs: 'auto', md: '800px' },
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(3, 16, 64, 0.5), rgba(3, 16, 64, 0.5)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 0 }
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', px: { xs: 2, md: 0 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
        
        {/* --- LEFT SIDE: Video Play Button --- */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
          <Box 
            sx={{ 
              width: '80px', height: '80px', bgcolor: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', mb: 2,
              boxShadow: '0 0 0 10px rgba(255,255,255,0.2)',
              '&:hover': { transform: 'scale(1.1)', transition: '0.3s' }
            }}
          >
            <PlayArrowIcon sx={{ color: '#b21e35', fontSize: 40 }} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>Video Tour in logo</Typography>
        </Box>

        {/* --- RIGHT SIDE: Floating Testimonial Card --- */}
        <Box sx={{ flex: 1, width: '100%', maxWidth: '550px' }}>
          <Box sx={{ bgcolor: 'white', p: { xs: 4, md: 6 }, borderRadius: '15px', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
            
            {/* Large Quote Icon in Background */}
            <FormatQuoteIcon sx={{ position: 'absolute', top: 20, right: 30, fontSize: 100, color: 'rgba(0,0,0,0.05)', transform: 'rotate(180deg)' }} />

            <Typography variant="subtitle2" sx={{ color: '#b21e35', fontWeight: 700, textTransform: 'uppercase', mb: 1, letterSpacing: 1 }}>
              Testimonial
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#031040', mb: 4 }}>
              What Students Says
            </Typography>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000 }}
              navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
            >
              {[1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                  <Box sx={{ mb: 4 }}>
                    <Avatar 
                      src="https://i.pravatar.cc/150?img=32" 
                      sx={{ width: 70, height: 70, border: '4px solid #f8f7f2', mb: 3 }} 
                    />
                    <Typography variant="body1" sx={{ color: '#555', fontStyle: 'italic', lineHeight: 1.8, mb: 3 }}>
                      "Solicitudin venenatis risus dolor in dictumst faucibus egestas. Justo at nibh odio lectus malesuada. Enim cras vitae libero nibh tincidunt justo scelerisque."
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#031040' }}>William Smith</Typography>
                    <Typography variant="body2" sx={{ color: '#b21e35', fontWeight: 600 }}>Alumnus</Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <IconButton className="prev-btn" sx={{ border: '1px solid #ddd', '&:hover': { bgcolor: '#031040', color: 'white' } }}>
                <WestIcon fontSize="small" />
              </IconButton>
              <IconButton className="next-btn" sx={{ border: '1px solid #ddd', '&:hover': { bgcolor: '#031040', color: 'white' } }}>
                <EastIcon fontSize="small" />
              </IconButton>
            </Stack>

          </Box>
        </Box>

      </Box>
    </Box>
    {/* --- SECTION Testimonial --- */}

{/* --- BLOG UPDATES SECTION START --- */}
<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', py: 10, bgcolor: '#fcfbf7' }}>
  <Box sx={{ width: '100%', maxWidth: '1200px', px: { xs: 2, md: 0 } }}>
    
    {/* --- SECTION TITLE --- */}
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <Typography variant="subtitle2" sx={{ color: '#5bb1e2', fontWeight: 700, mb: 1 }}>
        BLOG UPDATES
      </Typography>
      <Box sx={{ display: 'inline-block', position: 'relative' }}>
        <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', md: '3.5rem' }, color: '#031040' }}>
          Latest News & <span style={{ color: '#5bb1e2' }}>Articles.</span>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -1, mr: 2 }}>
          <svg width="120" height="10" viewBox="0 0 180 13" fill="none">
            <path d="M173.163 12.3756C97.1838 -3.8242 30.6496 5.67799 7.32494 12.2553C5.30414 12.8252 2.43544 12.6722 0.917529 11.9135C-0.600387 11.11549 -0.192718 10.0779 1.82808 9.50807C27.5427 2.25675 98.002 -7.60121 177.683 9.38783C179.881 9.85641 180.65 10.9051 179.402 11.7301C178.154 12.5552 175.361 12.8442 173.163 12.3756Z" fill="#5bb1e2" />
          </svg>
        </Box>
      </Box>
    </Box>

    {/* --- BLOG CARDS CONTAINER (CUSTOM FLEXBOX) --- */}
    <Box 
      sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '30px' // Cards ke beech ka gap
      }}
    >
      {blogPosts.map((post, index) => (
        <Box 
          key={index}
          sx={{ 
            position: 'relative', 
            pb: 4,
            width: { xs: '100%', md: 'calc(50% - 15px)' }, // Do cards side-by-side (gap adjust karke)
            maxWidth: { xs: '500px', md: 'none' } 
          }}
        >
          <Box 
            sx={{ 
              bgcolor: 'white', 
              borderRadius: '25px', 
              boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
              transition: '0.4s ease',
              height: '100%',
              '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }
            }}
          >
            {/* Image Wrapper */}
            <Box sx={{ p: 2 }}>
              <Box 
                component="img" 
                src={post.img} 
                sx={{ 
                  width: '100%', 
                  height: '300px', 
                  objectFit: 'cover', 
                  borderRadius: '35px' 
                }} 
              />
            </Box>

            {/* Content Area */}
            <Box sx={{ p: 4, pt: 1, textAlign: 'center' }}>
              <Typography variant="subtitle2" sx={{ color: '#5bb1e2', fontWeight: 700, mb: 1.5 }}>
                {post.category}
              </Typography>
              
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#031040', mb: 3, lineHeight: 1.4 }}>
                {post.title}
              </Typography>

              <Stack direction="row" spacing={3} justifyContent="center" sx={{ color: '#888' }}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <PersonOutlineIcon sx={{ fontSize: 18 }} />
                  <Typography variant="body2">{post.author}</Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <CalendarMonthIcon sx={{ fontSize: 18 }} />
                  <Typography variant="body2">{post.date}</Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          {/* Floating Circle Arrow Button */}
          <IconButton 
            sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: '50%', 
              transform: 'translateX(-50%)',
              bgcolor: 'white', 
              color: '#031040',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              width: '60px',
              height: '60px',
              '&:hover': { bgcolor: '#031040', color: 'white' }
            }}
          >
            <EastIcon />
          </IconButton>
        </Box>
      ))}
    </Box>

  </Box>
</Box>
{/* --- BLOG UPDATES SECTION END --- */}


      <Box sx={{ height: '100vh', backgroundColor: '#f5f5f5' }} /> {/* Footer Placeholder */}
      
    </Box>
  );
};
export default Home;