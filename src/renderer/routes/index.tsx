import { useNavigate, useRoutes } from 'react-router-dom';
import { useEffect } from 'react';
import auth from '@/utils/auth';
import publicRoutes from './public';
import privateRoutes from './private';

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticated) navigate('/dashboard');
  }, [navigate]);

  const route = auth.authenticated ? privateRoutes : publicRoutes;

  return useRoutes(route);
};

export default AppRoutes;
