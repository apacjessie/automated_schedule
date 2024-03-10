import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown';

const Initials = ({ username }: { username: string }) => {
  const split = username.split(' ');
  const initial =
    split[0].charAt(0).toUpperCase() + split[1].charAt(0).toUpperCase();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-[#F46600] rounded-full p-2 px-2.5 text-white font-bold">
        {initial}
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default Initials;
