import { ReactNode } from 'react';

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inset-0 w-screen h-screen fixed bg-black/20 flex items-center justify-center">
      {children}
    </div>
  );
};

export default Modal;
