import Dashboard from '@/pages/Dashboard';
import Sidebar from '../elements/sidebar/Desktop';

const MainLayout = () => {
  return (
    <main className="flex gap-2">
      <Sidebar />
      <Dashboard />
    </main>
  );
};

export default MainLayout;
