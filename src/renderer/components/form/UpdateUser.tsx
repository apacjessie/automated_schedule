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
import { Users } from '@/utils/mock';

const labelClass = 'flex flex-col my-1 font-medium gap-0.5';

const UpdateUser = ({
  setController,
  user,
}: {
  setController: Dispatch<SetStateAction<boolean>>;
  user: Users;
}) => {
  const [dataDisabled, setDataDisabled] = useState<{
    username: boolean;
    accessLevel: boolean;
    password: boolean;
  }>({
    username: true,
    accessLevel: true,
    password: true,
  });

  return (
    <form className="bg-white px-7 py-8 shadow-lg rounded-md w-[32rem] 2xl:w-3/12">
      <h1 className="text-xl font-medium">Update user profile</h1>
      <p className="text-sm text-gray-500 font-normal">
        Enter users information below to update his/her account.
      </p>
      <div className="flex flex-col gap-4 mt-4">
        <label htmlFor="name" className={`${labelClass}`}>
          Name
          <div className="flex gap-2">
            <input
              disabled={dataDisabled.username}
              id="name"
              type="text"
              className="form-input flex-1 disabled:border-slate/25 disabled:text-gray-400"
              placeholder={user.username}
            />
            <Button
              label={dataDisabled.username ? 'Edit' : 'Done'}
              onClick={() =>
                setDataDisabled({
                  ...dataDisabled,
                  username: !dataDisabled.username,
                })
              }
            />
          </div>
          <p className="text-sm text-gray-500 font-normal">
            Enter your username
          </p>
        </label>
        <label htmlFor="department" className={`${labelClass}`}>
          Access level
          <div className="flex gap-2">
            <Select disabled={dataDisabled.accessLevel}>
              <SelectTrigger id="deparment">
                <SelectValue
                  placeholder={
                    user.account_type[0].toUpperCase() +
                    user.account_type.slice(1)
                  }
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value={AccountType.ITM}>ITM</SelectItem>
                <SelectItem value={AccountType.DEAN}>Dean</SelectItem>
                <SelectItem value={AccountType.COMMITTE}>
                  Schedule Committe
                </SelectItem>
              </SelectContent>
            </Select>
            <Button
              label={dataDisabled.accessLevel ? 'Edit' : 'Done'}
              onClick={() =>
                setDataDisabled({
                  ...dataDisabled,
                  accessLevel: !dataDisabled.accessLevel,
                })
              }
            />
          </div>
          <p className="text-sm text-gray-500 font-normal">
            Select the account access level
          </p>
        </label>

        <label htmlFor="password" className={`${labelClass}`}>
          Password
          <div className="flex gap-2">
            <input
              disabled={dataDisabled.password}
              id="password"
              type="text"
              className="form-input flex-1 disabled:border-slate/25 disabled:text-gray-400"
              placeholder="*********"
            />
            <Button
              label={dataDisabled.password ? 'Edit' : 'Done'}
              onClick={() =>
                setDataDisabled({
                  ...dataDisabled,
                  password: !dataDisabled.password,
                })
              }
            />
          </div>
          <p className="text-sm text-gray-500 font-normal">
            Enter your password
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

export default UpdateUser;
