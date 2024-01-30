import MainLayout from '@/components/layout/MainLayout';
import Contact from '@/pages/Contact';
import Curriculum from '@/pages/dean/Curriculum';
import Dashboard from '@/pages/dean/Dashboard';
import GenerateSchedule from '@/pages/dean/GenerateSchedule';
import Professors from '@/pages/dean/Professors';
import Rooms from '@/pages/dean/Rooms';
import Schedules from '@/pages/dean/Schedules';

const DeanRoute = [
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
        children: [
          { index: true, element: <Schedules /> },
          { path: 'generate', element: <GenerateSchedule /> },
        ],
      },
      {
        path: '/curriculums',
        element: <Curriculum />,
      },
      {
        path: '/professors',
        element: <Professors />,
      },
      {
        path: '/rooms',
        element: <Rooms />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
];

export default DeanRoute;
