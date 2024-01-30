import GreetBoard from '@/components/elements/dynamic/GreetBoard';
import Header from '@/components/elements/dynamic/Header';
import PendingRequest from '@/components/elements/dynamic/PendingRequest';
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '@/components/elements/dynamic/DataTable';
import { data } from '@/utils/mock';
import { MoreHorizontal } from 'lucide-react';

export type User = {
  username: string;
  department: string;
  feature: string;
  date_modified: string;
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'department',
    header: 'Department',
  },
  {
    accessorKey: 'feature',
    header: 'Feature',
    cell: (row) => {
      return (
        <div className="rounded-full py-1 font-semibold text-accent/75 bg-badge tracking-wide">
          {row.row.original.feature}
        </div>
      );
    },
  },
  {
    accessorKey: 'date_modified',
    header: 'Date modified',
  },
  {
    header: 'Action',
    cell: () => {
      return (
        <div className="flex justify-center">
          <MoreHorizontal className="cursor-pointer" />
        </div>
      );
    },
  },
];

const Dashboard = () => {
  return (
    <main className="w-full ">
      <GreetBoard />

      <Header />
      <section className="w-full h-full grid grid-cols-[60%,40%]">
        <DataTable columns={columns} data={data} />
        <PendingRequest
          data={[]}
          message="Schedules waiting for committee approval."
        />
      </section>
    </main>
  );
};

export default Dashboard;
