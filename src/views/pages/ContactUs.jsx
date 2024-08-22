import React, { useState } from 'react';
import { Stack, TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useNotifications } from '@toolpad/core/useNotifications';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const notifications = useNotifications();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        notifications.show('Your message sent successfully!', {
            autoHideDuration: 5000,
            severity: 'success',
        });

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
                <Typography variant="h1" gutterBottom textAlign='center' sx={{ mb: 5 }}>
                    Contact Us
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            required
                        />
                        <Button type="submit" variant="contained" color="secondary" fullWidth>
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    );
};

export default ContactUs;
