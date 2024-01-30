import Header from '@/components/elements/dynamic/Header';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import auth, { AccountType } from '@/utils/auth';
import { UploadCloud } from 'lucide-react';
import { FormEvent, ReactNode } from 'react';

const problemSelection = [
  { value: 'bug', label: 'Bug' },
  {
    value: 'application mechanics',
    label: 'Application Mechanics',
  },
  { value: 'flow/user boarding issue', label: 'Flow/user boarding issue' },
  { value: 'other', label: 'Other' },
];

const severitySelection = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

const Label = ({ text, children }: { text: string; children: ReactNode }) => {
  return (
    <div className="font-medium flex flex-col gap-2">
      {text}
      {children}
    </div>
  );
};

const Contact = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full ">
      <Header newButton={auth.accountType !== AccountType.COMMITTE} />
      <form
        onSubmit={onSubmit}
        className="w-full h-full flex flex-col p-12 2xl:px-60 2xl:py-20 gap-8"
      >
        <div className="grid grid-cols-2 w-full gap-8">
          <Label text="Problem">
            <Select key="problem">
              <SelectTrigger className=" font-normal">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {problemSelection.map((selection) => (
                  <SelectItem key={selection.value} value={selection.value}>
                    {selection.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Label>
          <Label text="Severity">
            <Select key="severity">
              <SelectTrigger className=" font-normal">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {severitySelection.map((selection) => (
                  <SelectItem key={selection.value} value={selection.value}>
                    {selection.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Label>
        </div>
        <Label text="Details (Required)">
          <textarea
            className="border border-slate rounded-md p-3 resize-none focus:outline-blue-300
            h-32 xl:h-44"
            placeholder="Enter a description..."
          />
        </Label>
        <Label text="Other Attachments">
          <label
            htmlFor="attachments"
            className="w-full border-dashed border-2 border-slate h-32 xl:h-44
            flex items-center justify-center m-auto flex-col relative rounded-md"
          >
            <UploadCloud className="text-gray-400" />
            <p className="text-gray-400 text-sm">
              Upload relevant files/screenshot of the problem
            </p>
            <input
              type="file"
              id="attachments"
              className="opacity-0 absolute"
            />
          </label>
        </Label>
        <div className="flex w-full justify-end">
          <input
            type="submit"
            value="Submit"
            className="bg-accent text-white px-8 py-2 rounded-md font-bold leading-2
            cursor-pointer"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
