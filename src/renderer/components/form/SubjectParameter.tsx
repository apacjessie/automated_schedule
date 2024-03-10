/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch, SetStateAction } from 'react';
import { AccountType } from '@/utils/auth';
import Button from '../ui/button';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from '../ui/select';

const labelClass = 'flex flex-col my-1 font-medium gap-0.5';

const SubjectParameterForm = ({
  setController,
}: {
  setController: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form className="bg-white px-7 py-8 shadow-lg rounded-md w-[32rem] 2xl:w-3/12">
      <h1 className="text-xl font-medium">Subject parameters</h1>
      <p className="text-sm text-gray-500 font-normal">
        Enter subject&apos;s parameters
      </p>
      <div className="flex flex-col gap-4 mt-4">
        <label htmlFor="department" className={`${labelClass}`}>
          Class session type
          <Select>
            <SelectTrigger id="deparment">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value={AccountType.ITM}>ITM</SelectItem>
              <SelectItem value={AccountType.DEAN}>Dean</SelectItem>
              <SelectItem value={AccountType.COMMITTE}>
                Schedule Committe
              </SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-500 font-normal">
            Select the account access level
          </p>
        </label>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <label htmlFor="department" className={`${labelClass}`}>
          Room requirement
          <Select>
            <SelectTrigger id="deparment">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value={AccountType.ITM}>ITM</SelectItem>
              <SelectItem value={AccountType.DEAN}>Dean</SelectItem>
              <SelectItem value={AccountType.COMMITTE}>
                Schedule Committe
              </SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-500 font-normal">
            Select the account access level
          </p>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button
          onClick={() => setController((prev) => !prev)}
          type="button"
          label="Cancel"
          className="text-black bg-transparent hover:bg-transparent border-gray-400
           border text-sm flex items-center justify-center"
        />
        <Button
          type="submit"
          label="Enter"
          className="flex items-center text-sm justify-center"
        />
      </div>
    </form>
  );
};

export default SubjectParameterForm;
