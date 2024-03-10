import MainLayout from '@/components/layout/MainLayout';
import Contact from '@/pages/Contact';
import Curriculum from '@/pages/committe/Curriculum';
import Dashboard from '@/pages/committe/Dashboard';

import Schedules from '@/pages/committe/Schedules';

const CommitteRoute = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/schedules',
        element: <Schedules />,
      },
      {
        path: '/curriculums',
        element: <Curriculum />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
];

export default CommitteRoute;
