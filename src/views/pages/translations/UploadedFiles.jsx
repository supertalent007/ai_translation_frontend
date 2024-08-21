import { useState, useEffect } from 'react';
import { Stack, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';
import { useStripe } from "@stripe/react-stripe-js";
import { jwtDecode } from 'jwt-decode';
import { IconDownload } from '@tabler/icons-react';
import { useNotifications } from '@toolpad/core/useNotifications';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

const UploadedFiles = () => {
    const [savedData, setSavedData] = useState([]);
    const stripe = useStripe();
    const [subscription, setSubscription] = useState(null);
    const userId = jwtDecode(localStorage.getItem('token')).id;
    const notifications = useNotifications();

    async function fetchData() {
        const response = await axios.get(`${BACKEND_API}/saved_data?userId=${userId}`);
        if (response.status === 200) {
            setSavedData([...response.data]);
        }
    }

    const compareWithCurrentTime = (endTime) => {
        const dateObject = new Date(endTime);
        const endTimestamp = dateObject.getTime();

        let now = Date.now();

        if (endTimestamp > now) {
            return true;
        } else if (endTimestamp < now) {
            return false;
        } else {
            return true;
        }
    }

    useEffect(async () => {
        await fetchData();

        const res = await axios.get(`${BACKEND_API}/current_subscription/${userId}`);
        setSubscription(res.data);
        return () => {
            console.log('Cleanup on unmount');
        };
    }, []);

    const handleSubmit = async (event, item) => {
        event.preventDefault();

        console.log(subscription.currentPeriodEnd)

        if (!compareWithCurrentTime(subscription.currentPeriodEnd)) {
            notifications.show('Subscription Ended. Please purchase a new plan.', {
                autoHideDuration: 3000,
                severity: 'error',
                position: 'top-right'
            });
            return;
        }

        const response = await axios.post(`${BACKEND_API}/translate`, {
            id: item._id
        });

        if (response.status === 200) {
            notifications.show('Translation Success!', {
                autoHideDuration: 5000,
                severity: 'success',
            });
            fetchData();
        } else {
            notifications.show('Translation Failed. Please try again.', {
                autoHideDuration: 5000,
                severity: 'error',
            });
        }
    };

    return (
        <>
            {
                savedData.length ?
                    <Stack
                        spacing={2}
                        sx={{
                            padding: 3,
                            background: '#fff',
                            boxShadow: '0px 9px 20px rgba(46, 35, 94, 0.4)',
                            borderRadius: '15px'
                        }}>
                        <Typography variant='h2'>My Data</Typography>
                        <Grid container spacing={2}>
                            {
                                savedData.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={`saved_data_${index}`} sx={{ pr: 2 }}>
                                        <form onSubmit={e => handleSubmit(e, item)}>
                                            <Stack
                                                spacing={2}
                                                sx={{
                                                    border: '1px solid',
                                                    borderRadius: '10px',
                                                    padding: 2,
                                                    position: 'relative'
                                                }}
                                            >
                                                {
                                                    item.translated &&
                                                    <Button sx={{ position: 'absolute', top: 8, right: 8 }}>
                                                        <a href={`${BACKEND_API}/${item.translatedFilePath}`} download="translated-document" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <IconDownload />
                                                        </a>
                                                    </Button>
                                                }
                                                <Typography>File Name: {item.originName}</Typography>
                                                <Typography>Target Language: {item.toLanguage}</Typography>
                                                <Stack direction='row' spacing={2}>
                                                    <Button
                                                        variant="outlined"
                                                        type="submit"
                                                        disabled={!stripe}
                                                        sx={{
                                                            bgcolor: '#ede7f6',
                                                            color: '#4527a0',
                                                            '&:hover': {
                                                                bgcolor: '#5e35b1',
                                                                color: '#fff'
                                                            }
                                                        }}
                                                    >
                                                        Translate using AI
                                                    </Button>
                                                    <Button
                                                        variant="outlined"
                                                        type="submit"
                                                        disabled={!stripe}
                                                        sx={{
                                                            bgcolor: '#ede7f6',
                                                            color: '#4527a0',
                                                            '&:hover': {
                                                                bgcolor: '#5e35b1',
                                                                color: '#fff'
                                                            }
                                                        }}
                                                    >
                                                        Translate using AI +
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                        </form>
                                    </Grid >
                                ))
                            }
                        </Grid >
                    </Stack > : ''
            }
        </>
    );
}

export default UploadedFiles;