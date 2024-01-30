import Button from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { SubjectTypes, subjects } from '@/utils/mock';
import { ColumnDef } from '@tanstack/react-table';
import { Dispatch, SetStateAction } from 'react';
import Modal from '@/components/ui/modal';
import DataTable from './DataTable';

interface Props {
  course: string;
  curriculumYear: string;
  academicYearStart: number;
  setController: Dispatch<SetStateAction<boolean>>;
}

interface CurriculumDetailsProps {
  course: string;
  curriculumYear: string;
  academicYearStart: number;
}

interface CurriculumTableProps {
  data: any;
  semester: '1st' | '2nd';
}

const CurriculumDetails = ({
  course,
  curriculumYear,
  academicYearStart,
}: CurriculumDetailsProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-xl">{course}</h1>
      <h2 className="font-medium">
        Curriculum for Academic Year {academicYearStart}-{academicYearStart + 1}
      </h2>
      <p className="font-medium text-[#909090]">{curriculumYear}</p>
    </div>
  );
};

const columns: ColumnDef<SubjectTypes>[] = [
  {
    accessorKey: 'code',
    header: 'Code',
  },
  {
    accessorKey: 'name',
    header: 'Subject',
  },
  {
    accessorKey: 'lec',
    header: 'Lec',
  },
  {
    accessorKey: 'lab',
    header: 'Lab',
  },
  {
    header: 'Tot',
    cell: ({ row }) => <div>{row.original.lab + row.original.lec}</div>,
  },
];

const CurriculumTable = ({ data, semester }: CurriculumTableProps) => {
  const displaySemester =
    semester === '1st' ? 'First semester' : 'Second semester';
  return (
    <div>
      <h1 className="font-semibold  w-full text-center mb-2">
        {displaySemester}
      </h1>
      <div className="border border-slate rounded-lg">
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
};

const ViewCurriculum = ({
  course,
  curriculumYear,
  academicYearStart,
  setController,
}: Props) => {
  return (
    <Modal>
      <div className="bg-white p-6 2xl:p-8  w-fit rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <CurriculumDetails
            course={course}
            curriculumYear={curriculumYear}
            academicYearStart={academicYearStart}
          />
          <Button
            label="Print"
            Icon={Printer}
            className="bg-transparent text-black border-slate border py-1.5 px-5 hover:bg-transparent h-fit"
          />
        </div>

        <div className="grid grid-cols-2 gap-5 2xl:gap-10 mt-2">
          <CurriculumTable data={subjects} semester="1st" />
          <CurriculumTable data={subjects} semester="2nd" />
        </div>
        <div className="flex w-full justify-end mt-4 gap-4">
          <Button
            label="Close"
            className="bg-transparent border border-slate text-black hover:bg-transparent px-14
            text-sm flex items-center"
            onClick={() => setController((prev) => !prev)}
          />
          <Button label="Edit" className="px-14 text-sm flex items-center" />
        </div>
      </div>
    </Modal>
  );
};

export default ViewCurriculum;
