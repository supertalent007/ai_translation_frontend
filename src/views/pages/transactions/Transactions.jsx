import { useLocation } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

const TransactionsPage = () => {
    const location = useLocation();
    const [subscription, setSubscription] = useState(null);

    const formatDate = (timestamp) => {
        let date = new Date(timestamp);
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        let year = date.getFullYear();

        return `${month}/${day}/${year}`;
    }

    useEffect(() => {
        const fetchData = async () => {
            const params = new URLSearchParams(location.search);
            const id = params.get('id');
            if (id) {
                try {
                    const res = await axios.get(`${BACKEND_API}/current_subscription/${id}`);
                    setSubscription(res.data)
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
        return () => {
            console.log('Cleanup on unmount');
        };
    }, [location.search]);

    return (
        <Stack spacing={1}>
            <Typography variant="h1">Congratulations!</Typography>
            <Typography>
                Your new subscription started from {formatDate(subscription.currentPeriodStart)}.
            </Typography>
            <Typography>
                It will be ended at {formatDate(subscription.currentPeriodEnd)}.
            </Typography>
            <Typography>
                Now you can translate and download the document <Link href="/translations">here</Link>
            </Typography>
        </Stack>
    );
}

export default TransactionsPage;
