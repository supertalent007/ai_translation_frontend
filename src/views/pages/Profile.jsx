import { jwtDecode } from "jwt-decode";
import { Divider, Stack, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNotifications } from '@toolpad/core/useNotifications';
import { useNavigate } from "react-router-dom";

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const notifications = useNotifications();
    const navigate = useNavigate();

    useEffect(async () => {
        if (localStorage.getItem('token')) {
            const id = jwtDecode(localStorage.getItem('token')).id;

            const response = await axios.get(`${BACKEND_API}/user/${id}`);

            if (response.status === 200) {
                setUser(response.data);
            }
        }
        return () => {
            console.log('Cleanup on unmount');
        };
    }, []);

    const handleDeActive = async () => {
        const response = await axios.delete(`${BACKEND_API}/user/${user._id}`);

        if (response.status === 200) {
            notifications.show('Your account is deactived.', {
                autoHideDuration: 3000,
                severity: 'success',
            });
            localStorage.removeItem('token');
            navigate('login');
        } else {
            notifications.show('You are not abled to deactive your account.', {
                autoHideDuration: 3000,
                severity: 'error',
            });
        }
    }

    return (
        <Stack
            spacing={2}
            sx={{
                padding: 3,
                background: '#fff',
                boxShadow: '0px 9px 20px rgba(46, 35, 94, 0.4)',
                borderRadius: '15px',
                maxWidth: '400px'
            }}>
            <Typography variant="h2">My Profile</Typography>
            <Divider />
            <Typography variant="h4">{user?.firstName} {user?.lastName}</Typography>
            <Typography>{user?.email}</Typography>
            <Divider />
            <Button variant="contained" color="error" onClick={e => handleDeActive()}>Deactive</Button>
        </Stack>
    )
}

export default ProfilePage;