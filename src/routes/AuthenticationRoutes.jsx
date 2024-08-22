import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import ForgotPassword from 'views/pages/auth/ForgotPassword';
import VerifyEmail from 'views/pages/auth/VerifyEmail';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/auth/Login')));
const AuthRegister = Loadable(lazy(() => import('views/pages/auth/Register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '/register',
      element: <AuthRegister />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/verify-email',
      element: <VerifyEmail />
    },
  ]
};

export default AuthenticationRoutes;
