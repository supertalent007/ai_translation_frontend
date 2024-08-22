import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

// project imports
import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/translations');
    }
    return () => {
      console.log('Cleanup on unmount');
    };
  }, []);

  return (
    <>
      <Outlet />
      <Customization />
    </>
  )
}

export default MinimalLayout;
