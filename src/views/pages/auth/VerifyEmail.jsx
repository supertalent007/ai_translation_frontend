import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useNotifications } from '@toolpad/core/useNotifications';
import { Stack, Typography } from '@mui/material';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

const VerifyEmail = () => {
    const navigate = useNavigate();
    const notifications = useNotifications();

    useEffect(() => {
        const verifyToken = async () => {
            const params = new URLSearchParams(window.location.search);
            const token = params.get('token');

            try {
                const response = await axios.get(`${BACKEND_API}/auth/verify`, { params: { token } });

                if (response.status === 200) {
                    notifications.show('Email verified successfully!', {
                        autoHideDuration: 3000,
                        severity: 'success',
                    });
                    navigate('/login');
                }
            } catch (error) {
                notifications.show('Verification failed. Invalid or expired token.', {
                    autoHideDuration: 5000,
                    severity: 'error',
                });
            }
        };

        verifyToken();
    }, [navigate]);

    return (
        <Stack>
            <Typography variant='h2'>Verifying your email...</Typography>
            <Typography>Please wait while we verify your email.</Typography>
        </Stack>
    );
};

export default VerifyEmail;
