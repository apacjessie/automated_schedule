import DataTable from '@/components/elements/dynamic/DataTable';
import Header from '@/components/elements/dynamic/Header';
import ViewProfessor from '@/components/elements/dynamic/ViewProfessor';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown';
import { ProfessorTypes, professor } from '@/utils/mock';
import { ColumnDef, Row } from '@tanstack/react-table';
import {
  FileText,
  MoreHorizontal,
  PencilLine,
  View,
  XCircle,
} from 'lucide-react';
import { useState } from 'react';

const generateColumns = (
  handleViewDetails: (row: { original: ProfessorTypes }) => void,
): ColumnDef<ProfessorTypes>[] => {
  return [
    { accessorKey: 'username', header: 'Username' },
    { accessorKey: 'department', header: 'Department' },
    {
      accessorKey: 'employment_type',
      header: 'Employment type',
      cell: ({ row }) => (
        <div className="bg-badge w-fit m-auto px-4 py-0.5 rounded-full text-accent font-medium">
          {row.original.employment_type}
        </div>
      ),
    },
    { accessorKey: 'date_employed', header: 'Date employed' },
    {
      header: 'Action',
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className="m-auto cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white mr-10 2xl:mr-24">
            <DropdownMenuItem
              className="dropdown-label gap-2"
              onClick={() => handleViewDetails(row)}
            >
              <FileText width={17} /> View details
            </DropdownMenuItem>
            <DropdownMenuItem className="dropdown-label gap-2">
              <PencilLine width={17} /> Edit professor
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate/75" />
            <DropdownMenuItem className="dropdown-label gap-2 text-red-600">
              <XCircle width={17} /> Delete professor
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
};

const mockData = {
  name: 'Steve Jobs',
  employment: 'Full time',
  hired_date: 'September 06, 2023',
  department: 'College of Computer Studies',
  specialties: ['Math', 'Data Structure', 'Web development', 'Database'],
};

const Professor = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleViewDetails = (row: { original: ProfessorTypes }) => {
    setShowDetails((prev) => !prev);
  };

  const columns = generateColumns(handleViewDetails);

  return (
    <main className="w-full">
      <section className="">
        <Header />
        <DataTable columns={columns} data={professor} />
        {showDetails && (
          <ViewProfessor data={mockData} setController={setShowDetails} />
        )}
      </section>
    </main>
  );
};

export default Professor;
