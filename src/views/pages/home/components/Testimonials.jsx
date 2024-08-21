import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import user1 from 'assets/images/users/1.jpg';
import user2 from 'assets/images/users/2.jpg';
import user3 from 'assets/images/users/3.jpg';
import user4 from 'assets/images/users/4.jpg';
import user5 from 'assets/images/users/5.jpg';
import user6 from 'assets/images/users/6.jpg';

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src={user1} />,
    name: 'Remy Sharp',
    occupation: '@remy',
    testimonial:
      "I recently used AI TranslateDocs to translate some crucial business documents, and I'm extremely impressed. The interface is user-friendly, the translations are accurate, and the customer support was prompt and helpful. Highly recommended!",
  },
  {
    avatar: <Avatar alt="Travis Howard" src={user2} />,
    name: 'Travis Howard',
    occupation: '@travis',
    testimonial:
      "I entrusted them with sensitive medical documents, and they ensured confidentiality while delivering an accurate translation. Top-notch translation service!",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src={user3} />,
    name: 'Cindy Baker',
    occupation: '@cindy',
    testimonial:
      'I used this translation service for my personal documents, and I was impressed by the precision and attention to detail. The process was smooth, and the final result exceeded my expectations',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src={user4} />,
    name: 'Julia Stewart',
    occupation: '@juliastewart',
    testimonial:
      "Outstanding service! I needed an important document translated for a business meeting, and this site delivered beyond my expectations. Quick turnaround, accurate translation, and excellent customer support. Highly recommended!",
  },
  {
    avatar: <Avatar alt="Travis Howard" src={user5} />,
    name: 'John Smith',
    occupation: '@johnsmith',
    testimonial:
      "They tackled my academic transcripts swiftly and accurately.A reliable choice for academic translations.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src={user6} />,
    name: 'Daniel Wolf',
    occupation: '@danielwolf',
    testimonial:
      "Efficient and accurate translations for our business contracts. The team understood the legal nuances and provided translations that maintained the integrity of the content. Will definitely use their services again for future projects.",
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                {/* <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                /> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
