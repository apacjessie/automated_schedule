import DataTable from '@/components/elements/dynamic/DataTable';
import Header from '@/components/elements/dynamic/Header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown';
import { UserTypes, committe } from '@/utils/mock';
import { FileText, MoreHorizontal } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import Checkbox from '@/components/ui/checkbox';

const columns: ColumnDef<UserTypes>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label htmlFor="username" className="flex items-center justify-center">
        <Checkbox
          className="border-gray-400 rounded-md mr-3"
          id="username"
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
        Username
      </label>
    ),
    cell: ({ row }) => (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className="flex items-center justify-center">
        <Checkbox
          className="border-gray-400 rounded-md mr-2"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
        {row.original.username}
      </label>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'department',
    header: 'Department',
  },
  {
    accessorKey: 'feature',
    header: 'Status',
    cell: (row) => {
      return (
        <div className="flex items-center w-full justify-center">
          <p className="rounded-full py-1 font-semibold text-accent/75 bg-badge tracking-wide px-4">
            {row.row.original.feature}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: 'last_updated',
    header: 'Last updated',
  },
  {
    accessorKey: 'created_on',
    header: 'Created on',
  },
  {
    header: 'Action',
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-20 bg-white">
            <DropdownMenuItem className="dropdown-label gap-2">
              <FileText width={17} /> View details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const Curriculum = () => {
  return (
    <main className="w-full">
      <Header committe newButton={false} />
      <DataTable columns={columns} data={committe} />
    </main>
  );
};

export default Curriculum;
