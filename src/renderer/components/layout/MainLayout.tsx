import Dashboard from '@/pages/Dashboard';
import { DesktopSidebar } from '../elements/sidebar';

const MainLayout = () => {
  return (
    <main className="flex gap-2">
      <DesktopSidebar />
      <Dashboard />
    </main>
  );
};

export default MainLayout;
