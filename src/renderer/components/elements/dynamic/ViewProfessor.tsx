import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { Dispatch, SetStateAction, useState } from 'react';
import { BadgeAlert, Calendar, Contact, Tag } from 'lucide-react';

interface Props {
  data: {
    name: string;
    employment: string;
    hired_date: string;
    department: string;
    specialties: string[];
  };
  setController: Dispatch<SetStateAction<boolean>>;
}

const ViewProfessor = ({ data, setController }: Props) => {
  const [slice, setSlice] = useState<number>(3);

  return (
    <Modal>
      <div className="bg-white p-6 2xl:p-8  w-fit rounded-lg shadow-lg">
        <h2 className="text-gray-500 font-medium">Professor Details</h2>
        <p className="text-4xl py-5 font-semibold">{data.name}</p>

        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="flex gap-2 items-center text-gray-500">
              <BadgeAlert /> Employment
            </span>
            <span className="bg-[#02530014] px-5 py-1.5 rounded-full">
              {data.employment}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex gap-2 items-center text-gray-500">
              <Calendar /> Hired date
            </span>
            <span className="px-5 py-2">{data.hired_date}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex gap-2 items-center text-gray-500">
              <Contact /> Department
            </span>
            <span className="px-5 py-2 ">{data.department}</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="flex gap-2 items-center text-gray-500 mt-3">
              <Tag /> Specialties
            </span>
            <span className="px-5 py-2 grid grid-cols-[repeat(3,min-content)]  gap-1">
              {data.specialties
                .map((specialty) => (
                  <p className="text-sm bg-[#C3E1FF] px-3 py-1 rounded-md truncate text-center">
                    {specialty}
                  </p>
                ))
                .slice(0, slice)}
              {slice < data.specialties.length && (
                <button
                  type="button"
                  className="text-gray-400 col-span-4 justify-self-end mr-2 mt-1"
                >
                  +{data.specialties.length - slice} more
                </button>
              )}
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-3 mt-20">
          <Button
            className="bg-transparent border border-slate text-black hover:bg-transparent px-14
            text-sm flex items-center justify-center"
            label="Close"
            onClick={() => setController((prev) => !prev)}
          />
          <Button label="Edit" className="flex items-center justify-center" />
        </div>
      </div>
    </Modal>
  );
};

export default ViewProfessor;
