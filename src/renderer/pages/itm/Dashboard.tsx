import Header from '@/components/elements/dynamic/Header';
import { ColumnDef } from '@tanstack/react-table';

import { Users, allUsers } from '@/utils/mock';
import {
  Filter,
  MoreHorizontal,
  PlusCircle,
  Search,
  Settings,
  User,
  XCircle,
} from 'lucide-react';
import Button from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown';
import Checkbox from '@/components/ui/checkbox';
import DataTable from '@/components/elements/dynamic/DataTable';
import { SetStateAction, useState, Dispatch } from 'react';
import Modal from '@/components/ui/modal';
import CreateUser from '@/components/form/CreateUser';
import UpdateUser from '@/components/form/UpdateUser';
import Warning from '@/components/elements/dynamic/Warning';

const generateColumns = (
  handleUpdateUser: (row: { original: UserTypes }) => void,
  deleteWarning: Dispatch<SetStateAction<boolean>>,
): ColumnDef<Users>[] => {
  return [
    {
      id: 'select',
      header: ({ table }) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label htmlFor="username" className="flex justify-start  ">
          <Checkbox
            className="border-gray-400 rounded-md mr-3"
            id="username"
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
          Username
        </label>
      ),
      cell: ({ row }) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className="flex justify-start">
          <Checkbox
            className="border-gray-400 rounded-md mr-2"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
          {row.original.username}
        </label>
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        return (
          <div className="flex items-center w-full justify-center ">
            <p className="rounded-full py-1 font-semibold text-accent/75 bg-badge tracking-wide px-4">
              {row.original.status}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: 'account_type',
      header: 'Account type',
      cell: ({ row }) => (
        <div className="capitalize">{row.original.account_type}</div>
      ),
    },
    {
      accessorKey: 'last_updated',
      header: 'Last updated',
    },
    {
      accessorKey: 'created_on',
      header: 'Created on',
    },
    {
      header: 'Action',
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-20 bg-white 2xl:mr-28">
              <DropdownMenuItem className="dropdown-label gap-2">
                <User width={17} /> View profile
              </DropdownMenuItem>
              <DropdownMenuItem
                className="dropdown-label gap-2"
                onClick={() => handleUpdateUser(row)}
              >
                <Settings width={17} /> Update profile
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-slate/75" />
              <DropdownMenuItem
                className="dropdown-label gap-2 text-red-600"
                onClick={() => deleteWarning((prev) => !prev)}
              >
                <XCircle width={17} /> Delete user
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
};

const Dashboard = () => {
  const [createUserShowModal, setCreateUserShowModal] =
    useState<boolean>(false);

  const [updateUserShowModal, setUpdateUserShowModal] =
    useState<boolean>(false);

  const [userData, setUserData] = useState<Users>();

  const [deleteWarning, setDeleteWarning] = useState<boolean>(false);

  const handleUpdateUser = (row: { original: Users }) => {
    setUpdateUserShowModal((prev) => !prev);
    setUserData(row.original);
  };

  const columns = generateColumns(handleUpdateUser, setDeleteWarning);
  return (
    <main className="w-full ">
      <Header
        newButton={false}
        committe
        useSearch={{ value: true, data: [] }}
      />
      <section className="w-full h-full ">
        <div className="px-16 py-5 flex items-center justify-between ">
          <div className="flex items-center gap-16 ">
            <div>
              <h1 className="font-bold text-xl">Users</h1>
              <p>All active user profiles.</p>
            </div>
            <div
              className="border-gray-500 border focus-within:border-accent flex gap-2 py-1.5 px-2 rounded-md
            2xl:w-80 w-64"
            >
              <Search width={18} />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-full"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              label="New user"
              Icon={PlusCircle}
              onClick={() => setCreateUserShowModal((prev) => !prev)}
              className="text-sm flex items-center px-2.5"
            />
            <Button
              label="Filter"
              Icon={Filter}
              className="text-black bg-transparent border text-sm flex items-center px-3
               border-gray-500 hover:bg-transparent"
            />
          </div>
        </div>
        <div className="mx-10 border border-gray-400 rounded-lg h-[calc(100vh_-_17rem)]">
          <DataTable columns={columns} data={allUsers} />
        </div>
      </section>
      {createUserShowModal && (
        <Modal>
          <CreateUser setController={setCreateUserShowModal} />
        </Modal>
      )}
      {updateUserShowModal && (
        <Modal>
          <UpdateUser setController={setUpdateUserShowModal} user={userData} />
        </Modal>
      )}
      {deleteWarning && (
        <Warning
          label="Delete user"
          message="Are you sure you want to delete this user? This action cannot be undone."
          cancelController={setDeleteWarning}
        />
      )}
    </main>
  );
};

export default Dashboard;
