/* eslint-disable jsx-a11y/label-has-associated-control */
import Header from '@/components/elements/dynamic/Header';
import SubjectParameterForm from '@/components/form/SubjectParameter';
import Button, { IconPosition } from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tab';
import { ArrowRight, FileText, LayoutList, PencilLine } from 'lucide-react';
import { SetStateAction, useState, Dispatch } from 'react';

type SubjectType = {
  name: string;
  unit: number;
  origin: string;
};

interface ICurriculum {
  id: string;
  name: string;
  subjectsLength: number;
  units: number;
  course: string;
  subjects: SubjectType[];
}

interface ListOfCurriculumTypes {
  data: ICurriculum[];
  firstSemController: [ICurriculum, Dispatch<SetStateAction<ICurriculum>>];
  secondSemController: [ICurriculum, Dispatch<SetStateAction<ICurriculum>>];
}

const ProgressButton = ({
  isActive,
  level,
  label,
}: {
  isActive?: boolean;
  level: number;
  label: string;
}) => {
  return (
    <button
      type="button"
      className={`
      ${isActive ? 'bg-accent text-white' : 'bg-white text-accent'}
      flex gap-3 items-center rounded-full font-bold text-xs
      px-3.5 py-2
      `}
    >
      <div
        className={`
      ${isActive ? 'bg-white text-black' : 'bg-accent text-white'}
      aspect-square w-5 items-center flex justify-center rounded-full text-xs font-bold`}
      >
        {level}
      </div>
      {label}
    </button>
  );
};

ProgressButton.defaultProps = {
  isActive: false,
};

const Progress = () => {
  return (
    <div className="w-full mt-4 flex justify-between relative">
      <ProgressButton label="Add Parameters" level={1} isActive />
      <ProgressButton label="Generate" level={2} />
      <ProgressButton label="Send for approval" level={3} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full border-2 border-dashed border-slate -z-50" />
    </div>
  );
};

const GenerateScheduleHead = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="font-bold text-xl tracking-wide ">
            Schedule Generation Procedure
          </h1>
          <p className="text-normal  text-gray-500 font-medium">
            Pick a curriculum and apply parameters.
          </p>
        </div>
        <Button
          label="Generate"
          className="h-fit bg-transparent text-black border border-black
          hover:bg-accent hover:text-white 2xl:px-6"
          Icon={ArrowRight}
          iconPosition={IconPosition.Ending}
        />
      </div>
      <Progress />
    </>
  );
};

const CurriculumParameter = ({
  data,
  checked,
  onChecked,
}: {
  data: ICurriculum;
  checked: string;
  onChecked: Dispatch<SetStateAction<ICurriculum>>;
}) => {
  return (
    <div className="flex border border-slate rounded-md px-4 py-[8px]">
      <div className="flex items-center gap-8">
        <div className="border border-slate rounded-full p-1.5">
          <LayoutList />
        </div>
        <h1 className="tracking-wide font-medium ">{data.name}</h1>
        <p className="tracking-wide">
          {data.subjectsLength} subjects &#8226; {data.units} units
        </p>
        <p className="bg-gray-200 rounded-full px-8 py-0.5 text-black font-medium">
          {data.course}
        </p>
        <a
          href="./"
          className="text-accent underline tracking-wide underline-offset-2"
        >
          See details
        </a>
      </div>
      <label
        htmlFor={data.id}
        className="flex-1 justify-end flex items-center cursor-pointer"
      >
        <div
          className={`${
            checked === data.id && 'bg-accent'
          } p-2 border border-slate  rounded-full border-style flex`}
        >
          <div className="aspect-square w-2 bg-white rounded-full" />
        </div>
        <input
          id={data.id}
          type="checkbox"
          checked={data.id === checked}
          onChange={() => onChecked(data)}
          className="hidden"
        />
      </label>
    </div>
  );
};

const SubjectParameter = ({ data }: { data: SubjectType }) => {
  const [showAddParameterForm, setShowAddParameterForm] =
    useState<boolean>(false);

  return (
    <div className="flex border border-slate rounded-md px-4 py-[8px] justify-between items-center">
      <div className="flex items-center gap-8">
        <div className="border border-slate rounded-full p-1.5">
          <FileText />
        </div>
        <h1 className="tracking-wide font-medium ">{data.name}</h1>
        <p className="tracking-wide">{data.unit} units</p>
        <p className="bg-gray-200 rounded-full px-8 py-0.5 text-black font-medium">
          {data.origin}
        </p>
      </div>

      <PencilLine
        className="cursor-pointer"
        onClick={() => setShowAddParameterForm((prev) => !prev)}
      />
      {showAddParameterForm && (
        <Modal>
          <SubjectParameterForm setController={setShowAddParameterForm} />
        </Modal>
      )}
    </div>
  );
};

const ListOfCurriculum = ({
  data,
  firstSemController,
  secondSemController,
}: ListOfCurriculumTypes) => {
  const tabActive: string = 'data-[state=active]:bg-gray-100';
  const [firstSem, setFirstSem] = firstSemController;
  const [secondSem, setSecondSem] = secondSemController;

  return (
    <div className="w-full mt-3 2xl:mt-8">
      <Tabs defaultValue="firstSem">
        <div className="flex justify-between items-center ">
          <h1 className="text-sm">Pick Curriculum</h1>
          <div className="flex space-x-4">
            <Select>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="How many sections" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
              </SelectContent>
            </Select>
            <TabsList className="border border-slate">
              <TabsTrigger
                value="firstSem"
                className={`${tabActive} rounded-sm`}
              >
                1st semester
              </TabsTrigger>
              <TabsTrigger
                value="secondSem"
                className={`${tabActive} rounded-sm`}
              >
                2nd semester
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="h-40 2xl:h-[12.6rem] border border-slate rounded-md mt-2 p-2 overflow-y-auto">
          <TabsContent value="firstSem" className="m-0 grid gap-2">
            {data.length &&
              data.map((curriculum) => (
                <CurriculumParameter
                  key={curriculum.id}
                  data={curriculum}
                  onChecked={setFirstSem}
                  checked={firstSem.id}
                />
              ))}
          </TabsContent>
          <TabsContent value="secondSem" className="m-0 grid gap-2">
            {data.length &&
              data.map((curriculum) => (
                <CurriculumParameter
                  key={curriculum.id}
                  data={curriculum}
                  onChecked={setSecondSem}
                  checked={secondSem.id}
                />
              ))}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

const ListOfSubject = ({ data }: { data: SubjectType[] }) => {
  const tabActive: string = 'data-[state=active]:bg-gray-100';

  return (
    <div className="w-full mt-3  2xl:mt-8">
      <Tabs defaultValue="firstYr">
        <div className="flex justify-between items-center ">
          <h1 className="text-sm">Input subject parameters</h1>
          <TabsList className="border border-slate">
            <TabsTrigger value="firstYr" className={`${tabActive} rounded-sm`}>
              1st year
            </TabsTrigger>
            <TabsTrigger value="secondYr" className={`${tabActive} rounded-sm`}>
              2nd year
            </TabsTrigger>
            <TabsTrigger value="thirdYr" className={`${tabActive} rounded-sm`}>
              3rd year
            </TabsTrigger>
            <TabsTrigger value="fourthYr" className={`${tabActive} rounded-sm`}>
              4th year
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="h-40 2xl:h-[12.6rem] border border-slate rounded-md mt-2 p-2 overflow-y-auto">
          <TabsContent value="firstYr" className="m-0 grid gap-2">
            {data.length > 0 &&
              data.map((subject, index) => (
                <SubjectParameter
                  key={index.toString().concat('KEYS')}
                  data={subject}
                />
              ))}
          </TabsContent>
          <TabsContent value="secondYr" className="m-0 grid gap-2">
            {data.length > 0 &&
              data.map((subject, index) => (
                <SubjectParameter
                  key={index.toString().concat('KEYS')}
                  data={subject}
                />
              ))}
          </TabsContent>
          <TabsContent value="thirdYr" className="m-0 grid gap-2">
            {data.length > 0 &&
              data.map((subject, index) => (
                <SubjectParameter
                  key={index.toString().concat('KEYS')}
                  data={subject}
                />
              ))}
          </TabsContent>
          <TabsContent value="fourthYr" className="m-0 grid gap-2">
            {data.length > 0 &&
              data.map((subject, index) => (
                <SubjectParameter
                  key={index.toString().concat('KEYS')}
                  data={subject}
                />
              ))}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

const subjects: SubjectType[] = [
  { name: 'Programming Basics', unit: 3, origin: 'BSCS' },
  { name: 'Mathematics in the Modern World', unit: 3, origin: 'GENED' },
  { name: 'Ethics', unit: 2, origin: 'EDUC' },
];

const curriculumData: ICurriculum[] = [
  {
    id: 'as2512',
    name: 'Curriculum 1',
    subjectsLength: 7,
    units: 13,
    course: 'BSCS',
    subjects,
  },
  {
    id: 'op9u21',
    name: 'Curriculum 2',
    subjectsLength: 7,
    units: 13,
    course: 'BSCS',
    subjects,
  },
  {
    id: 'fge98q',
    name: 'Curriculum 3',
    subjectsLength: 7,
    units: 13,
    course: 'BSCS',
    subjects,
  },
];

const GenerateSchedule = () => {
  const initialCurriculum = {
    id: '',
    name: '',
    subjectsLength: 0,
    units: 0,
    course: '',
    subjects: [],
  };

  const [firstSemSelectedCurriculum, setFirstSemSelectedCurriculum] =
    useState<ICurriculum>(initialCurriculum);
  const [secondSemSelectedCurriculum, setSecondSemSelectedCurriculum] =
    useState<ICurriculum>(initialCurriculum);

  return (
    <main className="w-full">
      <Header useSearch={(true, [])} />
      <section className="w-full h-full flex flex-col  items-center px-16 py-8 2xl:px-60 2xl:py-12">
        <GenerateScheduleHead />

        <ListOfCurriculum
          data={curriculumData}
          firstSemController={[
            firstSemSelectedCurriculum,
            setFirstSemSelectedCurriculum,
          ]}
          secondSemController={[
            secondSemSelectedCurriculum,
            setSecondSemSelectedCurriculum,
          ]}
        />
        <ListOfSubject data={firstSemSelectedCurriculum.subjects} />
        <div className="flex items-center gap-2 justify-start w-full mt-4">
          <div className="p-1.5 bg-accent rounded-full" />
          <p className="w-full text-left text-sm">
            Blue borders signifies parameters is entered.
          </p>
        </div>
      </section>
    </main>
  );
};

export default GenerateSchedule;
