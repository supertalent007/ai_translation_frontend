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
                    Our online translation tool is compatible with a wide range of file formats to accommodate various document types. We support all Microsoft Office formats, including .DOC, .DOCX, .XLS, .XLSX, .PPT, .PPTX, .CSV, and .TXT, as well as JSON files. Additionally, we accept Adobe InDesign .IDML files and PDFs. Our platform is also capable of processing various image formats and scanned documents, ensuring comprehensive support for your translation needs.
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
                    I understand that you are concerned about the "FAILED" status of your recent translation request. I'm truly sorry for any inconvenience caused and would like to assist you further in this matter.

                    The issue you've encountered is, unfortunately, something that can happen from time to time. While our advanced AI technology is highly effective at handling and translating a wide range of documents, there are certain complexities in some PDF files that may challenge the current system. This could be due to various reasons including, but not limited to, complex layouts, non-standard fonts, or encrypted text.

                    We've already credited back your deposit into your account on our website. This credit is not going to expire and can be used at your convenience for any future projects that you wish to undertake with us.

                    Thank you once again for using PowerTranslator. We look forward to serving you better in your future translation projects.
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
                    PowerTranslator provides high quality automatic translations that preserves the original layout and formatting. Our tool has a built-in OCR tool that is capable of deciphering even obscure images and provide legible results. You will receive your results almost instantly.
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