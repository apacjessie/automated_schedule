import { AccountType } from './auth';

export interface UserTypes {
  username: string;
  department: string;
  feature?: string;
  date_modified?: string;
  last_updated?: string;
  created_on?: string;
  course?: string;
  academicYearStart?: number;
  curriculumYear?: string;
}

export interface ProfessorTypes extends UserTypes {
  date_employed: string;
  employment_type: 'Full time' | 'Part time';
}

export interface SubjectTypes {
  code: string;
  name: string;
  lec: number;
  lab: number;
}

export interface Users {
  username: string;
  status: string;
  account_type: AccountType;
  last_updated: string;
  created_on: string;
}

export interface RoomType {
  no: string;
  type: string;
  avaibility: boolean;
  scheduled_use: string;
}

const data: UserTypes[] = [
  {
    username: 'Jessie Apac',
    department: 'College of Computer Studies',
    feature: 'Update',
    date_modified: '10/20/2023',
    last_updated: '10/20/2023',
    created_on: '10/10/2023',
    course: 'Bachelor of Science in Computer Science',
    academicYearStart: 2023,
    curriculumYear: '1st year',
  },
  {
    username: 'Jessie Cape',
    department: 'College of Computer Studies',
    feature: 'Update',
    date_modified: '10/20/2023',
    last_updated: '10/20/2023',
    created_on: '10/10/2023',
    course: 'Bachelor of Science in Computer Science',
    academicYearStart: 2023,
    curriculumYear: '1st year',
  },
  {
    username: 'Jessie Vape',
    department: 'College of Computer Studies',
    feature: 'Update',
    date_modified: '10/20/2023',
    last_updated: '10/20/2023',
    created_on: '10/10/2023',
    course: 'Bachelor of Science in Computer Science',
    academicYearStart: 2023,
    curriculumYear: '1st year',
  },
];

const committe: UserTypes[] = [
  {
    username: 'Jessie Apac',
    department: 'College of Computer Studies',
    feature: 'Approved',
    date_modified: '10/20/2023',
    last_updated: '10/20/2023',
    created_on: '10/10/2023',
    course: 'Bachelor of Science in Computer Science',
    academicYearStart: 2023,
    curriculumYear: '1st year',
  },
  {
    username: 'Jessie Cape',
    department: 'College of Computer Studies',
    feature: 'Approved',
    date_modified: '10/20/2023',
    last_updated: '10/20/2023',
    created_on: '10/10/2023',
    course: 'Bachelor of Science in Computer Science',
    academicYearStart: 2023,
    curriculumYear: '1st year',
  },
  {
    username: 'Jessie Vape',
    department: 'College of Computer Studies',
    feature: 'Approved',
    date_modified: '10/20/2023',
    last_updated: '10/20/2023',
    created_on: '10/10/2023',
    course: 'Bachelor of Science in Computer Science',
    academicYearStart: 2023,
    curriculumYear: '1st year',
  },
];

const subjects: SubjectTypes[] = [
  {
    code: 'GEC103',
    name: 'Understanding the self',
    lec: 3,
    lab: 0,
  },
  {
    code: 'GEC103',
    name: 'Fundamentals of Programming',
    lec: 2,
    lab: 1,
  },
  {
    code: 'GEC103',
    name: 'Basic Photography',
    lec: 3,
    lab: 0,
  },
  {
    code: 'GEC103',
    name: 'Databases Fundamentals',
    lec: 3,
    lab: 0,
  },
  {
    code: 'GEC103',
    name: 'Elective 1',
    lec: 1,
    lab: 2,
  },
  {
    code: 'GEC103',
    name: 'NSTP',
    lec: 3,
    lab: 0,
  },
  {
    code: 'GEC103',
    name: 'Physical Education',
    lec: 2,
    lab: 1,
  },
];

const allUsers: Users[] = [
  {
    username: 'LeBron James',
    account_type: AccountType.DEAN,
    status: 'Active',
    last_updated: '12/31/23',
    created_on: '11/11/11',
  },
  {
    username: 'Michael Jordan',
    account_type: AccountType.DEAN,
    status: 'Active',
    last_updated: '12/31/23',
    created_on: '11/11/11',
  },
  {
    username: 'Magic Johnson',
    account_type: AccountType.DEAN,
    status: 'Active',
    last_updated: '12/31/23',
    created_on: '11/11/11',
  },
  {
    username: 'Shaqueel Oatmeal',
    account_type: AccountType.DEAN,
    status: 'Active',
    last_updated: '12/31/23',
    created_on: '11/11/11',
  },
  {
    username: 'Pennywise Junior',
    account_type: AccountType.DEAN,
    status: 'Active',
    last_updated: '12/31/23',
    created_on: '11/11/11',
  },
  {
    username: 'Santa Claus',
    account_type: AccountType.DEAN,
    status: 'Active',
    last_updated: '12/31/23',
    created_on: '11/11/11',
  },
];

const rooms: RoomType[] = [
  {
    no: '102',
    avaibility: true,
    scheduled_use: 'Mon-Wed',
    type: 'Computer laboratory',
  },
  {
    no: '103',
    avaibility: true,
    scheduled_use: 'Mon-Wed',
    type: 'Computer laboratory',
  },
];

const professor: Professor[] = [
  {
    username: 'LeBron James',
    employment_type: 'Full time',
    department: 'College of Computer Studies',
    date_employed: '10/10/10',
  },
  {
    username: 'Michael Jordan',
    employment_type: 'Full time',
    department: 'College of Computer Studies',
    date_employed: '10/10/10',
  },
  {
    username: 'Magic Johnson',
    employment_type: 'Full time',
    department: 'College of Computer Studies',
    date_employed: '10/10/10',
  },
  {
    username: 'Shaqueel Oatmeal',
    employment_type: 'Full time',
    department: 'College of Computer Studies',
    date_employed: '10/10/10',
  },
  {
    username: 'Pennywise Junior',
    employment_type: 'Full time',
    department: 'College of Computer Studies',
    date_employed: '10/10/10',
  },
  {
    username: 'Santa Claus',
    employment_type: 'Full time',
    department: 'College of Computer Studies',
    date_employed: '10/10/10',
  },
];

export { data, committe, subjects, allUsers, rooms, professor };
