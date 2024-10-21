import { Accordion, Stack, Typography } from "@mui/material";
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqPage = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h1" textAlign='center' sx={{ py: 3 }}>Frequently Asked Questions</Typography>
            <Accordion sx={{
                borderRadius: '10px',
                '&::before': {
                    display: 'none'
                },
            }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        fontWeight: '600',
                        fontSize: '18px',
                        boxShadow: '0px 4px 15px rgba(46, 35, 94, 0.2)',
                        borderRadius: '10px'
                    }}
                >
                    What File Types Do You Support?
                </AccordionSummary>
                <AccordionDetails sx={{ fontSize: '16px', lineHeight: 1.5 }}>
                    Our online translation tool is compatible with a wide range of file formats to accommodate various document types. We support all Microsoft Office formats, including .DOC, .DOCX, .XLS, .XLSX, .PPT, .PPTX, .CSV, and .TXT, as well as JSON files.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                borderRadius: '10px',
                '&::before': {
                    display: 'none'
                },
            }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        fontWeight: '600',
                        fontSize: '18px',
                        boxShadow: '0px 4px 15px rgba(46, 35, 94, 0.2)',
                        borderRadius: '10px'
                    }}
                >
                    Why did my document failed?
                </AccordionSummary>
                <AccordionDetails sx={{ fontSize: '16px', lineHeight: 1.5 }}>
                    Your document exceeds the file size, page numbers, or character limits allowed by your subscription plan.
                    Please try again or upgrade your membership.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                borderRadius: '10px',
                '&::before': {
                    display: 'none'
                },
            }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        fontWeight: '600',
                        fontSize: '18px',
                        boxShadow: '0px 4px 15px rgba(46, 35, 94, 0.2)',
                        borderRadius: '10px'
                    }}
                >
                    What is "Translate with AI" Option?
                </AccordionSummary>
                <AccordionDetails sx={{ fontSize: '16px', lineHeight: 1.5 }}>
                    FluentDocuments provides high quality automatic translations that preserves the original layout and formatting. Our tool has a built-in OCR tool that is capable of deciphering even obscure images and provide legible results. You will receive your results almost instantly.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                borderRadius: '10px',
                '&::before': {
                    display: 'none'
                },
            }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        fontWeight: '600',
                        fontSize: '18px',
                        boxShadow: '0px 4px 15px rgba(46, 35, 94, 0.2)',
                        borderRadius: '10px'
                    }}
                >
                    How can I Use This App?
                </AccordionSummary>
                <AccordionDetails sx={{ fontSize: '16px', lineHeight: 1.5 }}>
                    You can upload files to translate with original and target languages.
                    Then you can translate that file using "Translate with AI" button.
                    After that you will be able to download translated files from server into your local machine.
                </AccordionDetails>
            </Accordion>

        </Stack>
    )
}

export default FaqPage;