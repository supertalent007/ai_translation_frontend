import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Autocomplete, Stack, Typography, TextField, Box } from "@mui/material";
import { countries } from 'utils/constants';
import { jwtDecode } from "jwt-decode";

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

const UploadPage = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [toLanguage, setToLanguage] = useState('');
    const navigate = useNavigate();

    const handleFileUpload = () => {
        fileInputRef.current.click();
    };

    const onFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = async () => {
        if (!selectedFile || !toLanguage) {
            alert('Please select a file and both languages.');
            return;
        }

        const formData = new FormData();
        const userData = jwtDecode(localStorage.getItem('token'));
        formData.append('userId', userData.id);
        formData.append('file', selectedFile);
        formData.append('toLanguage', toLanguage.code);

        const response = await axios.post(`${BACKEND_API}/upload`, formData);

        if (response.status === 200) {
            navigate('/translations');
        }
    };

    return (
        <Stack>
            <Stack spacing={5}>

                <Stack
                    spacing={2}
                    sx={{
                        padding: 3,
                        background: '#fff',
                        boxShadow: '0px 9px 20px rgba(46, 35, 94, 0.4)',
                        borderRadius: '15px'
                    }}>
                    <Typography variant="h2">1. Upload any document and get your AI Translations instantly!</Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            bgcolor: '#ede7f6',
                            color: '#4527a0',
                            '&:hover': {
                                bgcolor: '#5e35b1',
                                color: '#fff'
                            }
                        }}
                        onClick={handleFileUpload}
                    >
                        Choose File
                    </Button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={onFileChange}
                        accept=".doc,.docx"
                    />
                </Stack>

                <Stack
                    spacing={2}
                    sx={{
                        padding: 3,
                        background: '#fff',
                        boxShadow: '0px 9px 20px rgba(46, 35, 94, 0.4)',
                        borderRadius: '15px'
                    }}>
                    <Typography variant="h2">2. Target Language</Typography>
                    <CountrySelect
                        language={toLanguage}
                        setLanguage={setToLanguage}
                    />
                </Stack>

                <Stack
                    spacing={2}
                    sx={{
                        padding: 3,
                        background: '#fff',
                        boxShadow: '0px 9px 20px rgba(46, 35, 94, 0.4)',
                        borderRadius: '15px'
                    }}>
                    <Button
                        variant="outlined"
                        sx={{
                            bgcolor: '#ede7f6',
                            color: '#4527a0',
                            '&:hover': {
                                bgcolor: '#5e35b1',
                                color: '#fff'
                            }
                        }}
                        onClick={handleUpload}
                    >
                        Upload
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

const CountrySelect = ({ language, setLanguage }) => {

    const handleSelectCountry = (event, value) => {
        setLanguage(value);
    };

    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            onChange={handleSelectCountry}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box
                        key={key}
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                    >
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a language"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    );
};

export default UploadPage;