import { useNavigate, useRoutes } from 'react-router-dom';
import { useEffect } from 'react';
import publicRoutes from './public';
import privateRoutes from './private';

const auth = true;

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) navigate('/dashboard');
  }, [navigate]);

  const route = auth ? privateRoutes : publicRoutes;

  const element = useRoutes(route);

  return <>{element}</>;
};

export default AppRoutes;
