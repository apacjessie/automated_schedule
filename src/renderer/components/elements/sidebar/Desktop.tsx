import {
  LayoutDashboard,
  ClipboardList,
  BookCopy,
  Boxes,
  BadgeHelp,
  Settings,
  LogOut,
} from 'lucide-react';
import { ButtonHTMLAttributes, ElementType, FC } from 'react';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  Icon: ElementType;
  url: string;
}

// eslint-disable-next-line react/function-component-definition
const Tab: FC<TabProps> = ({ label, Icon, url }) => {
  return (
    <a
      href={url}
      type="button"
      className="font-poppins rounded-md font-medium active:scale-95 text-black py-2 px-3 hover:bg-slate/20 active:text-semibold w-[100%] text-start flex items-center gap-2"
    >
      <Icon className="w-5 h-5" />
      <div className="text-md">{label}</div>
    </a>
  );
};

function DesktopSidebar() {
  return (
    <aside className=" w-80 h-screen bg-white text-black py-8 px-10 border-r-slate border-r-2 ">
      <div className="flex flex-col justify-between h-[100%]">
        <div>
          <h1 className="font-poppins tracking-wide font-bold md:text-xl lg:text-2xl mb-5 pl-3">
            Manage
          </h1>
          <Tab label="Dashboard" Icon={LayoutDashboard} url="./" />
          <Tab label="Schedules" Icon={ClipboardList} url="./" />
          <Tab label="Curriculum" Icon={BookCopy} url="./" />
          <Tab label="Rooms" Icon={Boxes} url="./" />
        </div>
        <div>
          <Tab label="Contact ITM" Icon={BadgeHelp} url="./" />
          <Tab label="Settings" Icon={Settings} url="./" />
          <hr className="text-slate my-5" />
          <Tab label="Logout" Icon={LogOut} url="./" />
        </div>
      </div>
    </aside>
  );
}

export default DesktopSidebar;
