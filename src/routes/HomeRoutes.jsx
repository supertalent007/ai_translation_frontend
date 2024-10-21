import PrivacyPolicyPage from 'views/pages/PrivacyPolicy';
import TermsPage from 'views/pages/Terms';
import LandingPage from 'views/pages/home/LandingPage';

// ==============================|| MAIN ROUTING ||============================== //

const HomeRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/policy',
            element: <PrivacyPolicyPage />
        },
        {
            path: '/terms',
            element: <TermsPage />
        }
    ]
};

export default HomeRoutes;
