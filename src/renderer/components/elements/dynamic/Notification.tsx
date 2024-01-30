import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown';
import { Bell } from 'lucide-react';

const Notification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border border-slate rounded-full p-2">
        <Bell />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default Notification;
