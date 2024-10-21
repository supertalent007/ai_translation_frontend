import * as React from 'react';
import { Stack, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';
import { useStripe } from "@stripe/react-stripe-js";
import { jwtDecode } from 'jwt-decode';
import { IconDownload } from '@tabler/icons-react';
import { useNotifications } from '@toolpad/core/useNotifications';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

const TranslationsPage = () => {
    return (
        <Stack>
            <Stack spacing={5}>
                <UploadedFiles />
            </Stack>
        </Stack>
    )
}

const UploadedFiles = () => {
    const [data, setData] = React.useState([]);
    const stripe = useStripe();
    const notifications = useNotifications();
    const [userId, setUserId] = React.useState('');

    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            setUserId(jwtDecode(localStorage.getItem('token')).id);
        }
    }, []);

    async function fetchData() {
        const response = await axios.get(`${BACKEND_API}/saved_data?userId=${userId}`);
        if (response.status === 200) {
            setData([...response.data]);
        }
    }

    React.useEffect(() => {
        fetchData();
    }, [userId]);

    const handleSubmit = async (event, item) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${BACKEND_API}/translate`, {
                id: item._id,
                userId: userId
            });

            if (response.status === 200) {
                notifications.show('Translation Success!', {
                    autoHideDuration: 5000,
                    severity: 'success',
                });
                fetchData();
            }
        } catch (err) {
            notifications.show(err.response.data.message, {
                autoHideDuration: 5000,
                severity: 'error',
            });
        }
    };

    return (
        <>
            {
                data.length ?
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
                                data.map((item, index) => (
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

export default TranslationsPage;