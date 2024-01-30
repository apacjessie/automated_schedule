import React, { useState } from 'react';
import DataTable from '@/components/elements/dynamic/DataTable';
import Header from '@/components/elements/dynamic/Header';
import PendingRequest from '@/components/elements/dynamic/PendingRequest';
import { UserTypes, data } from '@/utils/mock';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, FileText, PencilLine, XCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown';
import ViewCurriculum from '@/components/elements/dynamic/ViewCurriculum';

const generateColumns = (
  handleViewDetails: (row: { original: UserTypes }) => void,
): ColumnDef<UserTypes>[] => {
  return [
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
      cell: (row) => (
        <div className="rounded-full py-1 font-semibold text-accent/75 bg-badge tracking-wide">
          {row.row.original.feature}
        </div>
      ),
    },
    {
      accessorKey: 'date_modified',
      header: 'Date modified',
    },
    {
      header: 'Action',
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-20 bg-white">
            <DropdownMenuItem
              className="dropdown-label gap-2"
              onClick={() => handleViewDetails(row)}
            >
              <FileText width={17} /> View details
            </DropdownMenuItem>
            <DropdownMenuItem className="dropdown-label gap-2">
              <PencilLine width={17} /> Edit curriculum
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-slate/75" />
            <DropdownMenuItem className="dropdown-label gap-2 text-red-600">
              <XCircle width={17} /> Delete curriculum
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
};

const Curriculum = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [shownDetailsData, setShownDetailsData] = useState<UserTypes>();

  const handleViewDetails = (row: { original: UserTypes }) => {
    setShowDetails((prev) => !prev);
    setShownDetailsData(row.original);
  };

  const columns = generateColumns(handleViewDetails);

  return (
    <main className="w-full">
      <Header />
      <section className="w-full h-full grid grid-cols-[60%,40%]">
        <DataTable columns={columns} data={data} />
        <PendingRequest
          data={[]}
          message="Curriculum waiting for committee approval."
        />
        {showDetails && (
          <ViewCurriculum
            setController={setShowDetails}
            academicYearStart={shownDetailsData?.academicYearStart as number}
            course={shownDetailsData?.course as string}
            curriculumYear={shownDetailsData?.curriculumYear as string}
          />
        )}
      </section>
    </main>
  );
};

export default Curriculum;
