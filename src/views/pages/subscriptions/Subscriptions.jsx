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
import { useStripe } from "@stripe/react-stripe-js";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

const tiers = [
    {
        title: 'Free',
        price: 0,
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
        price: 19.99,
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
        price: 49.99,
        description: [
            'Unlimited characters or No Word limit',
            'Translate 130+ languages',
            'No File Size Limit',
            'No Page Limit',
        ],
        buttonText: 'Buy Now',
        buttonVariant: 'contained',
    },
];

export default function SubscriptionsPage() {
    const stripe = useStripe();
    const [id, setId] = React.useState('');

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            setId(jwtDecode(localStorage.getItem('token')).id);
        }
        return () => {
            console.log('Cleanup on unmount');
        };
    }, [])

    const handleSubscription = async (item) => {
        const response = await axios.post(`${BACKEND_API}/create_checkout_session`, {
            items: [{ name: item.title, price: item.price, quantity: 1 }],
            id: id
        });

        const session = await response.data;
        const result = await stripe.redirectToCheckout({ sessionId: session.id });

        if (result.error) {
            console.error(result.error.message);
        }
    }

    return (
        <Container
            id="pricing"
            sx={{
                pt: { xs: 4, sm: 4 },
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
                <Typography component="h2" variant="h2" color="text.primary">
                    Pricing
                </Typography>
            </Box>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
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
                                borderColor: 'primary.main',
                                background: 'linear-gradient(#5e35b1, #5e35ca)'
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        mb: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography component="h3" variant="h3" sx={{ color: '#fff' }}>
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
                                        color: '#fff',
                                    }}
                                >
                                    <Typography component="h1" variant="h1" sx={{ color: '#fff' }}>
                                        ${tier.price}
                                    </Typography>
                                    <Typography component="h3" variant="h64" sx={{ color: '#fff' }}>
                                        &nbsp; per month
                                    </Typography>
                                </Box>
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
                                                color: 'primary.light'
                                            }}
                                        />
                                        <Typography
                                            component="text"
                                            variant="subtitle2"
                                            sx={{
                                                color: 'primary.light'
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
