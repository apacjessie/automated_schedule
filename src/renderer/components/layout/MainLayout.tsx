import Dashboard from '@/pages/Dashboard';
import { DesktopSidebar } from '../elements/sidebar';

const MainLayout = () => {
  return (
    <main>
      <DesktopSidebar />
      <Dashboard />
    </main>
  );
};

export default MainLayout;
