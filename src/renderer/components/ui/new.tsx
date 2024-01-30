import { Link } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';
import dot from 'assets/image/dot.svg';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from './dropdown';

const New = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex gap-2 rounded-md bg-accent text-white px-3 py-1.5
      "
      >
        <PlusCircle />
        New
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white mr-12 border border-slate p-1.5 ">
        <DropdownMenuItem className="focus:bg-hovers">
          <Link
            className="dropdown-label flex align-center gap-1.5"
            to="/schedules/generate"
          >
            <img src={dot} alt="Dot" />
            New Schedule
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="dropdown-label flex align-center gap-1.5 focus:bg-hovers">
          <img src={dot} alt="Dot" />
          New Professor
        </DropdownMenuItem>
        <DropdownMenuItem className="dropdown-label flex align-center gap-1.5 focus:bg-hovers">
          <img src={dot} alt="Dot" />
          New Room
        </DropdownMenuItem>
        <DropdownMenuItem className="dropdown-label flex align-center gap-1.5 focus:bg-hovers">
          <img src={dot} alt="Dot" />
          New Curriculum
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default New;
