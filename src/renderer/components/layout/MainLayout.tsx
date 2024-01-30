import { Outlet } from 'react-router-dom';

import Sidebar from '../elements/sidebar/Desktop';
import auth, { AccountType } from '@/utils/auth';

const MainLayout = () => {
  return (
    <main className="flex font-poppins">
      {auth.accountType !== AccountType.ITM && <Sidebar />}
      <Outlet />
    </main>
  );
};

export default MainLayout;
