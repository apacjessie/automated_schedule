import { ReactNode } from 'react';
import publicRoutes from './public';
import { useRoutes } from 'react-router-dom';

const AppRoutes = () => {
  const auth = false;

  const route = auth
    ? [{ path: '/', element: <h1>Hello world</h1> }]
    : publicRoutes;

  const element = useRoutes(route);

  return <>{element}</>;
};

export default AppRoutes;
