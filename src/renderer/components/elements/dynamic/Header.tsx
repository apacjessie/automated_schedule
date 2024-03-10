import New from '@/components/ui/new';
import auth, { AccountType } from '@/utils/auth';
import { useLocation } from 'react-router-dom';
import LOA from 'assets/image/loa-logo.png';
import Notification from './Notification';
import Initials from './Initials';
import SearchBox from './SearchBox';

const messages: { [key: string]: string } = {
  Activity: 'Latest changes in schedule.',
  Schedules: 'List of all active schedules.',
  Curriculums: 'Approved Curriculum list.',
  Professors: 'List of Professors',
  Rooms: 'List of Rooms',
  'Help Center': 'Contact ITM',
  'Generate Schedule': 'Enter the parameters to create a schedule.',
};

const labels: { [key: string]: string } = {
  Schedules: 'Schedules',
  Curriculums: 'Curriculums',
  Professors: 'Professors',
  Rooms: 'Rooms',
  Contact: 'Help Center',
  'Schedules/generate': 'Generate Schedule',
};

const Header = ({
  newButton,
  committe,
  useSearch,
}: {
  newButton?: boolean;
  committe?: boolean;
  useSearch?: { value: boolean; data: any[] | null };
}) => {
  const location = useLocation();
  const { pathname } = location;
  const displayPathname =
    pathname === '/'
      ? 'Activity'
      : labels[pathname[1].toUpperCase() + pathname.slice(2)];

  return (
    <header
      className="flex justify-between items-center
    px-12 p-5 border-b-2 border-slate"
    >
      <div>
        {auth.accountType === AccountType.ITM ? (
          <div className="flex items-center gap-3">
            <img src={LOA} alt="Lyceum of Alabang" className="w-6" />
            <h1 className="font-bold text-xl">ITM Dashboard</h1>
          </div>
        ) : (
          <h1 className="font-bold text-lg">
            {committe && displayPathname === 'Activity'
              ? 'Pending Request'
              : displayPathname}
          </h1>
        )}
        {auth.accountType !== AccountType.ITM && (
          <p className="text-gray-500">
            {committe && displayPathname === 'Activity'
              ? 'Request pending for approval.'
              : (messages[displayPathname] as string)}
          </p>
        )}
      </div>
      <div className="flex gap-6 2xl:gap-10 items-center">
        {displayPathname !== 'Help Center' && <SearchBox />}
        {newButton && <New />}
        <div className="ml-8 flex items-center gap-6">
          <Notification />
          <Initials username="John Doe" />
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  newButton: true,
  committe: false,
  useSearch: { value: false, data: null },
};

export default Header;
