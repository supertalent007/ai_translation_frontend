import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Slider, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStripe } from "@stripe/react-stripe-js";
import { jwtDecode } from 'jwt-decode';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

const tiers = [
  {
    title: 'Starter',
    price: 9.99,
    characterLimit: 100000,
    pageLimit: 50,
    fileSizeLimit: 10 * 1024 * 1024,
    description: [
      'Get 100,000 Characters ~50 Pages (approx 20,000 words)',
      'Translate 130+ languages',
      'Up to 10 MB per document',
      'Up to 100 pages per PDF',
    ],
    buttonText: 'Buy Now',
    buttonVariant: 'contained',
  },
  {
    title: 'Professional',
    subheader: 'Recommended',
    characterLimit: 200000,
    pageLimit: 100,
    baseCharacterLimit: 200000,
    basePageLimit: 100,
    fileSizeLimit: 40 * 1024 * 1024,
    basePrice: 19.99,
    maxPrice: 199.99,
    description: [
      'Get 200,000 Characters ~100 Pages (approx 40,000 words)',
      'Translate 130+ languages',
      'Up to 40 MB per document',
      'Up to 1000 pages per PDF',
    ],
    buttonText: 'Buy Now',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    description: [
      'Unlimited characters or No Word limit',
      'Translate 130+ languages',
      'No File Size Limit',
      'No Page Limit',
    ],
    buttonText: 'Contact Us',
    buttonVariant: 'contained',
  },
];

export default function Pricing({ isAuthenticated }) {
  const navigate = useNavigate();
  const [id, setId] = React.useState('');
  const [sliderValue, setSliderValue] = React.useState(0);
  const stripe = useStripe();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      setId(jwtDecode(localStorage.getItem('token')).id);
    }
    return () => {
      console.log('Cleanup on unmount');
    };
  }, []);

  const handleSubscription = async (item) => {
    if (isAuthenticated) {
      if (item.title === 'Enterprise') {
        navigate('/contact-us');
        return;
      }

      const response = await axios.post(`${BACKEND_API}/create_checkout_session`, {
        items: [{ name: item.title, price: item.title === 'Professional' ? getPrice() : item.price, quantity: 1 }],
        id: id,
        plan: item
      });

      const session = await response.data;
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error(result.error.message);
      }
    } else {
      navigate('/login');
    }
  }

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    tiers[1].characterLimit = tiers[1].baseCharacterLimit + newValue * 100000;
    tiers[1].pageLimit = tiers[1].basePageLimit + newValue * 50;
  };

  const getPrice = () => {
    return tiers[1].basePrice + sliderValue * 10;
  };

  return (
    <Container
      id="pricing"
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
          Pricing
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Quickly build an effective pricing table for your potential customers with
          this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Professional' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'Professional' ? 'primary.main' : undefined,
                background:
                  tier.title === 'Professional'
                    ? 'linear-gradient(#033363, #021F3B)'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: tier.title === 'Professional' ? 'grey.100' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Professional' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color: tier.title === 'Professional' ? 'grey.50' : undefined,
                  }}
                >
                  <Typography component="h1" variant="h2" sx={{ color: 'primary' }}>
                    {
                      tier.title === 'Professional' ?
                        `$${getPrice().toFixed(2)}` : tier.title === 'Enterprise' ?
                          'Custom' :
                          `$${tier.price}`
                    }
                  </Typography>
                  <Typography component="h3" variant="h64" sx={{ color: '#primary', ml: 2 }}>
                    {
                      tier.title !== 'Enterprise' &&
                      ' One Time'
                    }
                  </Typography>
                </Box>
                {
                  tier.title === 'Professional' &&
                  <Stack sx={{ mt: 2 }}>
                    <Typography sx={{ color: '#fff' }}>
                      {(tier.characterLimit).toLocaleString()} Characters (~{tier.pageLimit} Pages)
                    </Typography>
                    <Slider
                      value={sliderValue}
                      onChange={handleSliderChange}
                      aria-labelledby="continuous-slider"
                      max={18}
                      step={1}
                      sx={{ color: '#fff' }}
                    />
                  </Stack>
                }
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === 'Professional'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Professional' ? 'grey.200' : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  component="a"
                  onClick={e => handleSubscription(tier)}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
