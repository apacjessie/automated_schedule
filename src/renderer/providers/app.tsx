import { ReactNode } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return <Router>{children}</Router>;
};

export default AppProvider;
