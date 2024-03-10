import { twmerge } from '@/utils';
import {
  LayoutDashboard,
  ClipboardList,
  BookCopy,
  Boxes,
  BadgeHelp,
  Settings,
  LogOut,
  Users,
} from 'lucide-react';
import { ButtonHTMLAttributes, ElementType, FC } from 'react';
import { NavLink } from 'react-router-dom';
import auth, { AccountType } from '@/utils/auth';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  Icon: ElementType;
  to: string;
}

const Tab: FC<TabProps> = ({ label, Icon, to }) => {
  const defstyle = `font-poppins rounded-md font-medium active:scale-95 text-black py-2 px-3
  hover:bg-slate/20 active:text-semibold w-[100%] text-start flex items-center gap-2
  transition-transform duration-100 font-poppins`;
  return (
    <NavLink
      to={to}
      type="button"
      className={({ isActive }) =>
        isActive ? twmerge(defstyle, 'bg-gray-100') : defstyle
      }
    >
      <Icon className="w-5 h-5" />
      <div className="text-md">{label}</div>
    </NavLink>
  );
};

function DesktopSidebar() {
  return (
    <aside className=" w-80 h-screen bg-white text-black py-8 px-10 border-r-slate border-r-2 font-poppins">
      <div className="flex flex-col justify-between h-[100%]">
        <div>
          <h1 className="font-poppins tracking-wide font-bold md:text-xl lg:text-2xl mb-5 pl-3">
            Manage
          </h1>
          <Tab label="Dashboard" Icon={LayoutDashboard} to="/" />
          <Tab label="Schedules" Icon={ClipboardList} to="/schedules" />
          <Tab label="Curriculum" Icon={BookCopy} to="/curriculums" />
          {auth.accountType !== AccountType.COMMITTE && (
            <>
              <Tab label="Professors" Icon={Users} to="/professors" />
              <Tab label="Rooms" Icon={Boxes} to="/rooms" />
            </>
          )}
        </div>
        <div>
          <Tab label="Contact ITM" Icon={BadgeHelp} to="/contact" />
          <Tab label="Settings" Icon={Settings} to="/settings" />
          <hr className="text-slate my-5" />
          <Tab label="Logout" Icon={LogOut} to="/logout" />
        </div>
      </div>
    </aside>
  );
}

export default DesktopSidebar;
