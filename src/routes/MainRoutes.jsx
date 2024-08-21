import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import TranslationsPage from 'views/pages/translations/Translations';
import TransactionsPage from 'views/pages/transactions/Transactions';
import FaqPage from 'views/pages/Faq';
import ProfilePage from 'views/pages/Profile';
import SubscriptionsPage from 'views/pages/subscriptions/Subscriptions';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const UploadPage = Loadable(lazy(() => import('views/pages/translations/Uploads')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'uploads',
      element: <UploadPage />
    },
    {
      path: 'translations',
      element: <TranslationsPage />
    },
    {
      path: 'transactions',
      element: <TransactionsPage />
    },
    {
      path: 'plans',
      element: <SubscriptionsPage />
    },
    {
      path: 'faq',
      element: <FaqPage />
    },
    {
      path: 'profile',
      element: <ProfilePage />
    }
  ]
};

export default MainRoutes;
