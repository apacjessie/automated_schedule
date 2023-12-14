import publicRoutes from './public';
import { useNavigate, useRoutes } from 'react-router-dom';
import privateRoutes from './private';
import { useEffect } from 'react';
const auth = true;

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) navigate('/dashboard');
  }, []);

  const route = auth ? privateRoutes : publicRoutes;

  const element = useRoutes(route);

  return <>{element}</>;
};

export default AppRoutes;
