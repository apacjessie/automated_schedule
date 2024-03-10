import DataTable from '@/components/elements/dynamic/DataTable';
import Header from '@/components/elements/dynamic/Header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown';
import { rooms, RoomType } from '@/utils/mock';
import { ColumnDef } from '@tanstack/react-table';
import { FileText, MoreHorizontal, PencilLine, XCircle } from 'lucide-react';

const columns: ColumnDef<RoomType>[] = [
  { accessorKey: 'no', header: 'Room no' },
  { accessorKey: 'type', header: 'Room type' },
  {
    accessorKey: 'avaibility',
    header: 'Availability',
    cell: ({ row }) => (
      <div className="bg-badge w-fit m-auto px-4 py-0.5 rounded-full text-accent font-medium">
        {row.original.avaibility === true ? 'Yes' : 'No'}
      </div>
    ),
  },
  { accessorKey: 'scheduled_use', header: 'Scheduled use' },
  {
    header: 'Action',
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal className="m-auto cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white mr-10 2xl:mr-24">
          <DropdownMenuItem className="dropdown-label gap-2">
            <FileText width={17} /> View details
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-label gap-2">
            <PencilLine width={17} /> Edit room
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-slate/75" />
          <DropdownMenuItem className="dropdown-label gap-2 text-red-600">
            <XCircle width={17} /> Delete room
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

const Rooms = () => {
  return (
    <main className="w-full">
      <section className="">
        <Header />
        <DataTable columns={columns} data={rooms} />
      </section>
    </main>
  );
};

export default Rooms;
