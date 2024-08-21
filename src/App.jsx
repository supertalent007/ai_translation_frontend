import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import router from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { NotificationsProvider } from "@toolpad/core/useNotifications";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPTE_KEY);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <NotificationsProvider>
          <Elements stripe={stripePromise}>
            <CssBaseline />
            <NavigationScroll>
              <RouterProvider router={router} />
            </NavigationScroll>
          </Elements>
        </NotificationsProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
