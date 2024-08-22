import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import { Button, TextField, Box } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import axios from 'axios';
import { useNotifications } from '@toolpad/core/useNotifications';

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

// ================================|| AUTH3 - LOGIN ||================================ //

const ForgotPassword = () => {
    const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const [email, setEmail] = useState('');
    const [step, setStep] = useState(1);
    const notifications = useNotifications();

    const handleReset = async () => {
        try {
            await axios.post(`${BACKEND_API}/auth/request_reset`, { email: email });
            setStep(2);
        } catch (error) {
            alert('Error sending reset code.');
        }
    };

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <Link to="/home" aria-label="logo">
                                            <Logo />
                                        </Link>
                                    </Grid>
                                    {
                                        step === 1 ?
                                            <>
                                                <Grid item xs={12}>
                                                    <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems="center" justifyContent="center">
                                                        <Grid item>
                                                            <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                                <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                                                                    Forgot Password
                                                                </Typography>
                                                                <Typography variant="caption" fontSize="16px" textAlign={{ xs: 'center', md: 'inherit' }}>
                                                                    Enter your email to reset password
                                                                </Typography>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Email Address"
                                                        variant="outlined"
                                                        type="email"
                                                        value={email}
                                                        fullWidth
                                                        onChange={e => setEmail(e.target.value)}
                                                    />

                                                    <Box sx={{ mt: 5 }}>
                                                        <AnimateButton>
                                                            <Button
                                                                fullWidth
                                                                size="large"
                                                                variant="contained"
                                                                color="secondary"
                                                                onClick={handleReset}
                                                            >
                                                                Send
                                                            </Button>
                                                        </AnimateButton>
                                                    </Box>
                                                </Grid>
                                            </>
                                            : (
                                                step === 2 ?
                                                    <VerificationCode
                                                        email={email}
                                                        setStep={setStep}
                                                        notifications={notifications} />
                                                    : <ResetPassword
                                                        email={email}
                                                        setEmail={setEmail}
                                                        setStep={setStep}
                                                        notifications={notifications} />
                                            )
                                    }

                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

const VerificationCode = ({ email, setStep, notifications }) => {
    const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const [pin, setPin] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value) && value.length <= 6) {
            setPin(value);
        }
    };

    const handleSubmit = async () => {
        try {
            await axios.post(`${BACKEND_API}/auth/verify_code`, { email: email, code: pin });
            setStep(3);
        } catch (error) {
            alert('Error sending reset code.');
        }
    };

    return (
        <>
            <Grid item xs={12}>
                <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems="center" justifyContent="center">
                    <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                            <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                                Verify Code
                            </Typography>
                            <Typography variant="caption" fontSize="16px" textAlign={{ xs: 'center', md: 'inherit' }}>
                                Enter verification code you've received
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Enter 6-Digit PIN"
                    variant="outlined"
                    value={pin}
                    onChange={handleChange}
                    inputProps={{ maxLength: 6 }}
                    fullWidth
                    sx={{ mb: 2 }}
                />

                <Box sx={{ mt: 3 }}>
                    <AnimateButton>
                        <Button
                            fullWidth
                            size="large"
                            variant="contained"
                            color="secondary"
                            onClick={handleSubmit}
                        >
                            Verify
                        </Button>
                    </AnimateButton>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <AnimateButton>
                        <Button
                            fullWidth
                            size="large"
                            variant="contained"
                            color="secondary"
                            onClick={e => {
                                setStep(1);
                            }}
                        >
                            Back
                        </Button>
                    </AnimateButton>
                </Box>
            </Grid>
        </>
    )
}

const ResetPassword = ({ email, setStep, notifications, setEmail }) => {
    const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const navigate = useNavigate();

    const validatePasswords = () => {
        if (newPassword && confirmPassword) {
            setPasswordMismatch(newPassword !== confirmPassword);
        } else {
            setPasswordMismatch(false);
        }
    };

    useEffect(() => {
        validatePasswords();
    }, [newPassword, confirmPassword]);

    const handleReset = async () => {

        try {
            await axios.post(`${BACKEND_API}/auth/reset_password`, {
                email: email,
                password: newPassword
            });
            notifications.show('Password updated successfully!', {
                autoHideDuration: 3000,
                severity: 'success',
            });
            setStep(1);
            setEmail('');
            navigate('/login');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <>
            <Grid item xs={12}>
                <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems="center" justifyContent="center">
                    <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                            <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                                Reset Password
                            </Typography>
                            <Typography variant="caption" fontSize="16px" textAlign={{ xs: 'center', md: 'inherit' }}>
                                Enter new password to reset your password
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-basic"
                    label="New Password"
                    variant="outlined"
                    type="password"
                    value={newPassword}
                    fullWidth
                    required
                    onChange={e => {
                        setNewPassword(e.target.value);
                    }}
                    sx={{ mb: 3 }}
                />

                <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    value={confirmPassword}
                    fullWidth
                    required
                    onChange={e => {
                        setConfirmPassword(e.target.value);
                    }}
                />

                {passwordMismatch && (
                    <Typography color="error" sx={{ mb: 2 }}>
                        Passwords do not match
                    </Typography>
                )}

                <Box sx={{ mt: 5 }}>
                    <AnimateButton>
                        <Button
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                            onClick={handleReset}
                            disabled={passwordMismatch || !newPassword || !confirmPassword}
                        >
                            Reset
                        </Button>
                    </AnimateButton>
                </Box>
            </Grid>
        </>
    )
}

export default ForgotPassword;
