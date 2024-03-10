import { twMerge } from 'tailwind-merge';

const twmerge = (def: string, custom: string): string => {
  return twMerge(def, custom);
};

// eslint-disable-next-line import/prefer-default-export
export { twmerge };
