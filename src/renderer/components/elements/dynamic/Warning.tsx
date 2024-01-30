import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { AlertCircle } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

const Warning = ({
  label,
  message,
  cancelController,
}: {
  label: string;
  message: string;
  cancelController: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal>
      <div
        className="bg-white p-8 shadow-lg rounded-lg flex flex-col
      items-center justify-center w-[28rem] gap-3"
      >
        <div className="p-3.5 bg-red-100/50 w-fit rounded-full">
          <div className="p-2.5 bg-red-200/75 w-fit rounded-full">
            <AlertCircle className="text-red-500" width={50} height={50} />
          </div>
        </div>

        <h1 className="text-lg font-bold">{label}</h1>
        <p className="text-gray-600">{message}</p>
        <div className="grid grid-cols-2 w-full mt-4 gap-4 items-center justify-center">
          <Button
            label="Cancel"
            className="flex justify-center text-black border border-slate bg-transparent hover:bg-transparent"
            onClick={() => cancelController((prev) => !prev)}
          />
          <Button
            label="Delete"
            className="flex justify-center bg-red-500 text-white hover:bg-red-600"
          />
        </div>
      </div>
    </Modal>
  );
};

export default Warning;
