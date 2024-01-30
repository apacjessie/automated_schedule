import { useNavigate, useRoutes } from 'react-router-dom';
import { useEffect } from 'react';
import auth from '@/utils/auth';
import publicRoutes from './public';
import privateRoutes from './private';

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticated) navigate('/');
    else navigate('/auth/signin');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const route = auth.authenticated ? privateRoutes : publicRoutes;

  return useRoutes(route);
};

export default AppRoutes;
