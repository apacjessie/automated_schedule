import DataTable from '@/components/elements/dynamic/DataTable';
import Header from '@/components/elements/dynamic/Header';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tab';
import { twmerge } from '@/utils';
import { data } from '@/utils/mock';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

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

const Sorter = () => {
  const tabActive: string = 'data-[state=active]:bg-gray-100';

  return (
    <div className="border-l-2 border-slate h-screen p-3 2xl:p-5 flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-medium">Sort list</h1>
        <p className="text-gray-500 tracking-wide">
          Directory of schedules in the current group.
        </p>
      </div>

      <div className="space-y-3">
        <h1>Group by</h1>
        <Tabs defaultValue="year">
          <TabsList className="border border-slate">
            <TabsTrigger value="year" className={twmerge(tabActive, '')}>
              Year
            </TabsTrigger>
            <TabsTrigger value="section" className={twmerge(tabActive, '')}>
              Section
            </TabsTrigger>
            <TabsTrigger value="course" className={twmerge(tabActive, '')}>
              Course
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-3 w-full">
        <h1>Sort by</h1>
        <Select key="sort">
          <SelectTrigger className=" font-normal w-[13rem]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem></SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3 w-full">
        <h1>Category</h1>
      </div>
    </div>
  );
};

const Schedules = () => {
  return (
    <main className="w-full">
      <Header />
      <section className="grid grid-cols-[70%_40%]">
        <DataTable columns={columns} data={data} />
        <Sorter />
      </section>
    </main>
  );
};

export default Schedules;
