import { useNavigate } from "react-router-dom";
import { Stack, Typography, Container, Button } from "@mui/material";

const Introduction = () => {
    const navigate = useNavigate();

    return (
        <Container id="features" sx={{ pt: { xs: 8, sm: 20 } }}>
            <Typography variant="h1" color="text.primary" textAlign='center'>
                AI PowerTranslate - Translate with AI  Document Translation
            </Typography>
            <Typography color="text.primary" textAlign='center' sx={{ maxWidth: '600px', mx: 'auto', mt: 3, fontSize: '18px' }}>
                Delivering precise AI translation for a wide array of docs - PDF, Word, Excel, TXT and more... Using the power of google translate, offering translations in a diverse range of languages
            </Typography>
            <Button
                variant="contained"
                sx={{ display: 'flex', mx: 'auto', mt: 5 }}
                onClick={e => navigate('/login')}
            >Start with our Free Online Translator</Button>
        </Container>
    )
}

export default Introduction;