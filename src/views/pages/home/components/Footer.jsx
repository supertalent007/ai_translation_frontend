import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import logo from 'assets/images/logo.svg';

const logoStyle = {
  width: '140px',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="#">FluentDocuments&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '30%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <img
              src={logo}
              style={logoStyle}
              alt="logo of sitemark"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'flex-start !important' },
            mx: { xs: 'auto', sm: '0' },
            mb: 2,
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link color="text.secondary" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
            Features
          </Link>
          <Link color="text.secondary" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
            Testimonials
          </Link>
          <Link color="text.secondary" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('highlights'); }}>
            Services
          </Link>
          <Link color="text.secondary" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>
            Pricing
          </Link>
          <Link color="text.secondary" href="#" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'flex-start !important' },
            mx: { xs: 'auto', sm: '0' },
            mb: 2,
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link color="text.secondary" href="#">
            About us
          </Link>
          <Link color="text.secondary" href="/contact-us">
            Contact us
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'flex-start !important' },
            mx: { xs: 'auto', sm: '0' },
            mb: 2,
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link color="text.secondary" href="/terms" target="_blank">
            Terms & Conditions
          </Link>
          <Link color="text.secondary" href="/policy" target="_blank">
            Privacy Policy
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 4 },
          justifyContent: 'center',
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Copyright />
        {/* <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="#"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="#"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="#"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack> */}
      </Box>
    </Container >
  );
}
