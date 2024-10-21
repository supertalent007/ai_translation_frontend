import { ListItem, Stack, Typography, Paper } from "@mui/material";

const TermsPage = () => {
    return (
        <Paper sx={{ padding: 5 }}>
            <Stack spacing={2}>
                <Typography variant="h1" textAlign='center' sx={{ py: 3 }}>Terms & Conditions</Typography>
                <Stack spacing={1}>
                    <Typography variant='h2'>
                        1. Introduction
                    </Typography>
                    <Typography>
                        Welcome to FluentDocuments. These Terms and Conditions govern your access to and use of our website, services, and applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should not use our Services.
                    </Typography>
                </Stack>

                <Stack spacing={1}>
                    <Typography variant='h2'>
                        2. User Accounts
                    </Typography>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            2.1 Account Creation
                        </Typography>
                        <Typography>
                            To use certain features of our Services, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </Typography>
                    </Stack>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            2.2 Account Responsibility
                        </Typography>
                        <Typography>
                            You are responsible for any activity on your account, whether or not you authorized that activity. You must notify us immediately of any unauthorized use of your account.
                        </Typography>
                    </Stack>
                </Stack>

                <Stack spacing={1}>
                    <Typography variant='h2'>
                        3. Subscription Plans
                    </Typography>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            3.1 Subscription Terms
                        </Typography>
                        <Typography>
                            We offer various subscription plans with different features and pricing. By subscribing to a plan, you agree to pay the fees associated with that plan. Subscription fees are charged on one-time basis unless otherwise specified.
                        </Typography>
                    </Stack>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            3.2 Payment and Renewal
                        </Typography>
                        <Typography>
                            Payments for subscription plans are processed through our secure payment gateway. Your subscription will automatically renew at the end of each billing cycle unless you cancel it before the renewal date. We may change the subscription fees at any time, but we will notify you in advance of any changes.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack spacing={1}>
                    <Typography variant='h2'>
                        4. Termination
                    </Typography>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            4.1 Termination by You
                        </Typography>
                        <Typography>
                            You may terminate your account at any time by following the instructions provided in your account settings. Termination will take effect immediately, but you will still be responsible for any charges incurred prior to termination.
                        </Typography>
                    </Stack>
                    <Stack spacing={1} sx={{ ml: '15px !important' }}>
                        <Typography variant="h3">
                            4.2 Termination by Us
                        </Typography>
                        <Typography>
                            We reserve the right to suspend or terminate your account and access to the Services at any time, with or without cause, and without prior notice. Reasons for termination may include, but are not limited to, violation of these Terms, non-payment of fees, or engagement in fraudulent or illegal activities.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack spacing={1}>
                    <Typography variant='h2'>
                        5. Changes to These Terms
                    </Typography>
                    <Typography>
                        We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on our website. Your continued use of the Services after any changes constitutes your acceptance of the new Terms.
                    </Typography>
                </Stack>
                <Stack spacing={1}>
                    <Typography variant='h2'>
                        6. Contact Information
                    </Typography>
                    <Typography>
                        If you have any questions or concerns about these Terms, please contact us at:
                    </Typography>
                    <ListItem>Email: support@fluentdocuments.com</ListItem>
                    <ListItem>Address: 2062 Asylum Avenue, Wallingford, CT, US</ListItem>
                    <ListItem>Phone: 1 323 906 7062</ListItem>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default TermsPage;