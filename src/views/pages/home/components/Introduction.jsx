import { useNavigate } from "react-router-dom";
import { Typography, Container, Button } from "@mui/material";

const Introduction = () => {
    const navigate = useNavigate();

    return (
        <Container id="features" sx={{ pt: { xs: 10, sm: 20 } }}>
            <Typography variant="h1" color="text.primary" textAlign='center' sx={{
                fontSize: {
                    xs: '40px',
                    sm: '50px'
                },
            }}>
                FluentDocuments Translate with AI  Document Translation
            </Typography>
            <Typography color="text.primary" textAlign='center' sx={{ maxWidth: '600px', mx: 'auto', mt: 3, fontSize: '18px' }}>
                Delivering precise AI translation for a wide array of docs - PDF, Word, Excel, TXT and more... offering translations in a diverse range of languages
            </Typography>
            <Button
                variant="contained"
                sx={{ display: 'flex', mx: 'auto', mt: 5 }}
                onClick={e => navigate('/register')}
            >Start with our Free Online Translator</Button>
        </Container>
    )
}

export default Introduction;