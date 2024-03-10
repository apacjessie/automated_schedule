import MainLayout from '@/components/layout/MainLayout';
import Dashboard from '@/pages/itm/Dashboard';

const ItmRoute = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
];

export default ItmRoute;
