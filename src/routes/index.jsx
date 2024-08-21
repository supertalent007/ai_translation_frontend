import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './AuthenticationRoutes';
import HomeRoutes from './HomeRoutes';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([MainRoutes, LoginRoutes, HomeRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
