import { ListItem, Stack, Typography, Paper } from "@mui/material";

const PrivacyPolicyPage = () => {
    return (
        <Paper sx={{ padding: 5 }}>
            <Stack spacing={2}>
                <Typography variant="h1" textAlign='center' sx={{ py: 3 }}>Privacy Policy</Typography>
                <Stack spacing={1}>
                    <Typography variant='h2'>
                        1. Introduction
                    </Typography>
                    <Typography>
                        Welcome to FluentDocuments. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, particularly in relation to document translation services provided by AI. By accessing or using our services, you agree to this Privacy Policy.
                    </Typography>
                </Stack>

                <Stack spacing={1}>
                    <Typography variant='h2'>
                        2. Information We Collect
                    </Typography>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            2.1 Personal Information
                        </Typography>
                        <Typography>
                            When you sign up for an account, subscribe to a plan, or interact with our services, we may collect personal information, including but not limited to: <br />

                            Name <br />
                            Email address <br />
                            Payment information <br />
                            Contact details <br />
                            Account login credentials <br />
                        </Typography>
                    </Stack>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            2.2 Document Data
                        </Typography>
                        <Typography>
                            When you upload documents for translation, we collect and temporarily store the content of these documents to provide the translation service. This content is securely processed and stored only for the duration necessary to perform the translation.
                        </Typography>
                    </Stack>
                </Stack>

                <Stack spacing={1}>
                    <Typography variant='h2'>
                        3. Data Storage and Security
                    </Typography>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            3.1 Storage
                        </Typography>
                        <Typography>
                            Your personal information and document data are stored on secure servers located in US. We retain your data only as long as necessary for the purposes outlined in this policy.
                        </Typography>
                    </Stack>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            3.2 Security Measures
                        </Typography>
                        <Typography>
                            We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                        </Typography>
                    </Stack>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            3.3 Document Data Security
                        </Typography>
                        <Typography>
                            Document data is encrypted during transmission and storage. Once the translation is complete, we securely delete your document data.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack spacing={1}>
                    <Typography variant='h2'>
                        4. Cookies and Tracking Technologies
                    </Typography>
                    <Typography>
                        We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage, and personalize content. You can control cookie settings through your browser.
                    </Typography>
                </Stack>
                <Stack spacing={1}>
                    <Typography variant='h2'>
                        5. Changes to This Policy
                    </Typography>
                    <Typography>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. Your continued use of the service after such changes will be subject to the then-current policy.
                    </Typography>
                </Stack>
                <Stack spacing={1}>
                    <Typography variant='h2'>
                        6. Contact Us
                    </Typography>
                    <Typography>
                        If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </Typography>
                    <ListItem>Email: support@fluentdocuments.com</ListItem>
                    <ListItem>Address: 2062 Asylum Avenue, Wallingford, CT, US</ListItem>
                    <ListItem>Phone: 1 323 906 7062</ListItem>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default PrivacyPolicyPage;