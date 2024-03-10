/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch, SetStateAction, useState } from 'react';
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

const DepartmentSelection = () => {
  return (
    <label htmlFor="department" className={`${labelClass}`}>
      Department
      <Select>
        <SelectTrigger id="deparment">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value={AccountType.ITM}>
            College of Computer Studies
          </SelectItem>
          <SelectItem value={AccountType.DEAN}>
            College of Engineering
          </SelectItem>
          <SelectItem value={AccountType.COMMITTE}>
            College of Education
          </SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm text-gray-500 font-normal">
        Select the account deparment
      </p>
    </label>
  );
};

const CreateUser = ({
  setController,
}: {
  setController: Dispatch<SetStateAction<boolean>>;
}) => {
  const [accessLevel, setAccessLevel] = useState<AccountType>();

  return (
    <form className="bg-white px-7 py-8 shadow-lg rounded-md w-[32rem] 2xl:w-3/12">
      <h1 className="text-xl font-medium">Create account</h1>
      <p className="text-sm text-gray-500 font-normal">
        Enter users information below to create his/her account.
      </p>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={`${labelClass}`}>
          Name
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="John Doe"
          />
          <p className="text-sm text-gray-500 font-normal">
            Enter your username
          </p>
        </label>
        <label htmlFor="department" className={`${labelClass}`}>
          Access level
          <Select onValueChange={(value) => setAccessLevel(value)}>
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
        {accessLevel === AccountType.DEAN && <DepartmentSelection />}

        <label htmlFor="password" className={`${labelClass}`}>
          Password
          <input
            id="password"
            type="text"
            className="form-input"
            placeholder="Must atleast contain 8 characters"
          />
          <p className="text-sm text-gray-500 font-normal">
            Enter your password
          </p>
        </label>
        <label htmlFor="repassword" className={`${labelClass}`}>
          Confirm Password
          <input
            id="repassword"
            type="text"
            placeholder="Confirm your password"
            className="form-input"
          />
          <p className="text-sm text-gray-500 font-normal">
            Enter your password again
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
          label="Save Changes"
          className="flex items-center text-sm justify-center"
        />
      </div>
    </form>
  );
};

export default CreateUser;
